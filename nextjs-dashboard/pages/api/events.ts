import { NextApiRequest, NextApiResponse } from 'next';
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch('https://data-time.kintone.com/k/v1/records.json?app=6', {
            method: 'GET',
            headers: {
                'X-Cybozu-API-Token': process.env.KINTONE_KEY as string
            }
        });

        if (!response.ok) {
            const responseText = await response.text();
            throw new Error('Failed to fetch records from Kintone: ' + responseText);
        }

        const kintoneData = await response.json();

        const parsedRecords = kintoneData.records.map((item: any) => ({
            Company: item.Company.value,
            Amount: item.Amount.value,
            Deadline: item.Deadline.value,
            Categories: item.Categories.value,
        }));

        // Access your API key (see "Set up your API key" above)
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY2);
        
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});

        
          const prompt = `
  You are working within a payment scheduling app. You will be given a text file in the form of an array. This will contain payments including the company, the amount, the deadline, and the category.
 
  Here is an example text file:
  
  ${JSON.stringify(parsedRecords)}
  
  Here is your job: 
  
  1) Group payments that have deadlines close together, i.e. within 5 days of each other, and determine the optimal payment date for each group.

  2) No individual payment can be later than its deadline. 
  
  3) Put the determined payment dates in an OptimalDate variable in a format like the date in the Deadline variable.
  
  Complete this task and return a js calendar in the same format as the example above. DO NOT return anything else besides the calendar.
  Only return the company, amount, deadline, category, and generated optimal date listed in the prompt. don't output backticks in the response.
  
  This is how you generate the optimal date, which we will later transform into the final output. Note that this is NOT the output I want:
  
  var calendar = new Calendar(calendarE1, {
    eventSources: [
      {
        id : 'companyA',
        Amount : 102.00,
        Deadline : '2024-04-09T12:30:00',
        Categories : 'CarLoan',
        OptimalDate : 'mm-dd-yyyy'
      },
      // more events...
    ],
    });

    Now, transform this data into the following format, which is going to be your final output. 
    This is very IMPORTANT; PLACE T between date and time, no spaces.
    Here is the format that you have to follow. DO NOT print extra symbols:

    [
        {
        id: 'a',
        title: 'my event',
        start: '2024-04-25T12:00:00',
        end: '2024-04-25T12:00:00'
        },
        // More events...
    ]

    please map the values of id to id, the Categories to title, and OptimalDate to start and end with the exact same values. Return data in this format.
    pay attention to the timestamp, it needs to be ISO 8601 format.
    please make sure the response can be parsed as JSON correctly.
  `
        const genAIOutput = await model.generateContent(prompt);
        const genAIResponse = await genAIOutput.response;
        const finalOutput = genAIResponse.text();
        
        // const mappedData = finalOutput.map((item: { id: any; Categories: any; OptimalDate: any; }) => ({
        //     id: item.id,
        //     title: item.Categories,
        //     start: item.OptimalDate || '4/31/2024T12:00:00',
        //     end: item.OptimalDate || '4/31/2024T12:00:00',
        // }));

        res.status(200).send(finalOutput);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
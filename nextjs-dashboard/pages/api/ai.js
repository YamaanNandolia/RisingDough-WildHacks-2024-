const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');


// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyA5km_I5zJI-7Pj_Cn8Mt40aIksaRmUCbw");

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `
  You are working within a payment scheduling app. You will be given a text file in the form of an array. This will contain payments including the company, the amount, the deadline, and the category.
 
  Here is an example text file:
  
  [
    {
      "Company": "myAutoloan",
      "Amount": "$100.00",
      "Deadline": "4/31/2024 22:30:00",
      "Categories": [
        "CarLoan"
      ]
    },
    {
      "Company": "Sallie Mae",
      "Amount": "$200.00",
      "Deadline": "4/20/2024 15:00:00",
      "Categories": [
        "StudentLoan"
      ]
    },
    {
      "Company": "Discover",
      "Amount": "$500.00",
      "Deadline": "4/27/2024 12:00:00",
      "Categories": [
        "Credit"
      ]
    },
    {
      "Company": "BofA",
      "Amount": "$1,000.00",
      "Deadline": "4/28/2024 11:59:00",
      "Categories": [
        "Savings"
      ]
    }
  ]
  
  Here is your job: 
  
  1) Group payments that have deadlines close together, i.e. within 5 days of each other, and make an optimal payment date, ideally on the same day for them.
  
  2) Put the determined payment date in an OptimalDate variable in a format like the date in the Deadline variable.
  
  Complete this task and return a js calendar in the same format as the example above. DO NOT return anything else besides the calendar.
  Only return the company, amount, deadline, category, and generated optimal date listed in the prompt. don't output backticks in the response.
  
  Here is the calendar format that you are supposed to output:
  
  var calendar = new Calendar(calendarE1, {
    eventSources: [
      {
        id : 'companyA',
        Amount : 102.00,
        Deadline : '2024-04-09T12:30:00',
        Categories : 'CarLoan',
        OptimalDate : 'mm-dd-yyyy'
      },
    ],
    backgroundColor: 'red',
    textColor: 'white'

});
  `

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  fs.writeFile('calendarInput.js', text, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

run();
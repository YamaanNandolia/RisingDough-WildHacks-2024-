

// declare const kintone: any;

// export const dynamic = 'force-dynamic'; // defaults to auto

// export async function GET(request: Request): Promise<void> {
//   const body = {
//     app: 1
//   };

//   try {
//     const response = await fetch(kintone.api.url('/k/v1/records.json', true), {
//       method: 'GET',
//       body: JSON.stringify(body),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (!response.ok) {
//       throw new Error('There was an error when retrieving the data.');
//     }

//     const data = await response.json();
//     const records = data.records;
//     const recordSize = records.length + 1;
//     alert(`There are now currently ${recordSize} records in this App.`);
//   } catch (error) {
//     alert((error as Error).message);
//   }
// }
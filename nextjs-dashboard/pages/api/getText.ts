import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { parseJson } from '../../app/lib/parseJson';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const fileData = fs.readFileSync(path.join(process.cwd(), 'pages/api/record.json'), 'utf8');
      const jsonData = parseJson(fileData);
  
      // Write jsonData to a text file
      fs.writeFileSync(path.join(process.cwd(), 'pages/api/parsedData.txt'), JSON.stringify(jsonData, null, 2));
  
      res.status(200).json(jsonData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error reading data' });
    }
  }
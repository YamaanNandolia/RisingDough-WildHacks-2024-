import fs from 'fs';
import path from 'path';
// import handler from getText.ts
import getText from './getText';
import type { NextApiRequest, NextApiResponse } from 'next'

async function processFile(filename:string) {
  try {
    // Read the file
    const fileData = fs.readFileSync(path.resolve('./', filename), 'utf8');

    // 
    const data = await getText();

    // Return the data
    return data;
  } 
  catch (error) {
    console.error(error);
    throw error;
  }
}
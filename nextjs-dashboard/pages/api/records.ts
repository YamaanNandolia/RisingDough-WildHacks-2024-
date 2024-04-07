import { NextApiRequest, NextApiResponse } from 'next';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch('https://data-time.kintone.com/k/v1/records.json?app=6', {
            method: 'GET',
            headers: {
                'X-Cybozu-API-Token': 'N0OMF6fdrrOAOKiDWGS75Q4y5y4XCiQvKeNAP48S'
            }
        });

        if (!response.ok) {
            const responseText = await response.text();
            throw new Error('Failed to fetch records from Kintone: ' + responseText);
        }

        const data = await response.json();

        console.log(data);

        res.status(200).json(data.records);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
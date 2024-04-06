import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch('https://data-time.kintone.com/k/v1/records.json?app=5', {
            method: 'GET',
            headers: {
                'X-Cybozu-API-Token': '4aaoFzfwIgMNHpIqIScyPnNQRQzwU4jpN1SF05VF'
            }
        });

        if (!response.ok) {
            const responseText = await response.text();
            throw new Error('Failed to fetch records from Kintone: ' + responseText);
        }

        const data = await response.json();

        // const mappedData = data.records.map((record: any) => {
        //     return {
        //         ...record,
        //         Company: record.Text_0.value,
        //         Deadline: record.Text_1.value,
        //         Amount: record.Text.value,
        //     };
        // });

        res.status(200).json(data.records);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
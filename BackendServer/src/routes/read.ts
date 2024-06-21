import { Router } from 'express';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(__dirname, '../db.json');

export const readRouter = Router();

readRouter.get('/', (req, res) => {
    const index = parseInt(req.query.index as string);

    if (isNaN(index)) {
        return res.status(400).json({ error: 'Invalid index' });
    }

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }

        const db = JSON.parse(data);

        if (index < 0 || index >= db.submissions.length) {
            return res.status(404).json({ error: 'Submission not found' });
        }

        res.status(200).json(db.submissions[index]);
    });
});

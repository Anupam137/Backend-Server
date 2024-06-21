import { Router } from 'express';
import fs from 'fs';
import path from 'path';

interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

const dbPath = path.join(__dirname, '../db.json');

export const submitRouter = Router();

submitRouter.post('/', (req, res) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    const newSubmission: Submission = { name, email, phone, github_link, stopwatch_time };

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read database' });
        }

        const db = JSON.parse(data);
        db.submissions.push(newSubmission);

        fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save submission' });
            }
            res.status(200).json({ message: 'Submission saved successfully' });
        });
    });
});

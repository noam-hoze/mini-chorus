import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(
    cors({
        origin: "http://localhost:4200", // Allow requests from your Angular app
        credentials: true,
    })
);

const dbPath = path.resolve(__dirname, "db.json");

app.get("/api/calls", (req, res) => {
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading database file");
            return;
        }
        const jsonData = JSON.parse(data);
        res.json(jsonData.calls);
    });
});

app.get("/api/calls/:id", (req, res) => {
    const { id } = req.params;
    fs.readFile(dbPath, "utf8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading database file");
            return;
        }
        const jsonData = JSON.parse(data);
        const call = jsonData.calls.find((c) => c.id === id);

        if (call) {
            // Transform the data to match the frontend model
            const getSentiment = (score) => {
                if (score > 75) return "Positive";
                if (score > 40) return "Neutral";
                return "Negative";
            };

            const responseData = {
                callId: call.id,
                summary: {
                    title: call.title,
                    date: call.date,
                    rep: call.repName,
                },
                sentiment: getSentiment(call.sentimentScore),
                transcript: call.transcript,
                nextSteps: call.nextSteps,
                tags: call.tags,
            };
            res.json(responseData);
        } else {
            res.status(404).send("Call not found");
        }
    });
});

app.listen(port, () => {
    console.log(`Express server running on http://localhost:${port}`);
});

export interface CallDetail {
    callId: string;
    summary: { title: string; date: Date; rep: string };
    sentiment: string;
    transcript: string;
    nextSteps: string[];
    tags: string[]
}

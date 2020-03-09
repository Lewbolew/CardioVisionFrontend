export interface Patient {
    patientId: string;
    section: string[];
    prediction: string[];
    confidence: number[];
    totalScore: string;
}

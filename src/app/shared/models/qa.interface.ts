import { Answer } from './answer.interface';

export interface QA {
    question: string;
    figure?: string;
    answers: Answer[];
    answeredCorrectly?: boolean;
}

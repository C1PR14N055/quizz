import { QA } from './qa.interface';

export enum QuizzState {
    NONE = 'none',
    LOADED = 'loaded',
    STARTED = 'started',
    FINISHED = 'finished'
}

export interface Quizz {
    state: QuizzState;
    qas: QA[];
    qaIndex: number;
}

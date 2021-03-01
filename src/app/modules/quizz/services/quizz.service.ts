import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { QA } from 'src/app/shared/models/qa.interface';
import { Quizz, QuizzState } from 'src/app/shared/models/quizz.interface';

@Injectable({
    providedIn: 'root'
})
export class QuizzService {
    private _currentQuizz: Quizz = {
        state: QuizzState.NONE,
        qas: null,
        qaIndex: -1
    };

    constructor(private _http: HttpClient) {}

    loadQuizz(id: string, chapter: number): Observable<boolean> {
        return this._getQuizzById(id, chapter).pipe(
            tap((quizz: any) => {
                this._currentQuizz = quizz;
            }),
            switchMap(() => of(true))
        );
    }

    get currentQA(): QA {
        return this._currentQuizz.qas[this._currentQuizz.qaIndex];
    }

    // takes in selected index, returns correct index
    verifyAnswer(selectedIndex): number {
        const correctIndex = this.currentQA.answers.findIndex(
            (answer) => answer.correct
        );

        // set answeredCorrectly to true or false
        this.currentQA.answeredCorrectly = correctIndex === selectedIndex;

        return correctIndex;
    }

    hasNextQA(): boolean {
        return this._currentQuizz.qaIndex < this._currentQuizz.qas.length - 1;
    }

    getNextQA(): void {
        this._currentQuizz.qaIndex++;
    }

    getCurrentIdx(): number {
        return this._currentQuizz.qaIndex;
    }

    getTotal(): number {
        return this._currentQuizz.qas.length;
    }

    getTotalCorrect(): number {
        return this._currentQuizz.qas.filter((qa) => qa.answeredCorrectly)
            .length;
    }

    getQuizzRaw(id: string): Observable<QA[]> {
        const url = `assets/json/PPL_${id.toUpperCase()}.json`;

        return this._http.get<QA[]>(url);
    }

    private _shuffleArray(array): void {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    private _getQuizzById(id: string, chapter: number): Observable<Quizz> {
        // check chapter is valid
        if (
            !chapter ||
            !Number.isInteger(chapter) ||
            chapter < 1 ||
            chapter > 30
        ) {
            chapter = 1;
        }

        const url = `assets/json/PPL_${id.toUpperCase()}.json`;

        return this._http.get<QA[]>(url).pipe(
            map((qas) => {
                return {
                    state: QuizzState.LOADED,
                    qas: qas
                        .map((qa) => {
                            this._shuffleArray(qa.answers);

                            return qa;
                        })
                        .slice((chapter - 1) * 10, (chapter - 1) * 10 + 10),
                    qaIndex: 0
                };
            })
        );
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/shared/models/chapter.interface';
import { QA } from 'src/app/shared/models/qa.interface';

import { QuizzService } from '../../services/quizz.service';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-quizz-chapter-page',
    templateUrl: './quizz-chapter-page.component.html',
    styleUrls: ['./quizz-chapter-page.component.scss']
})
export class QuizzChapterPageComponent implements OnInit {
    private _subject: string = null;
    private _currentQuizz: QA[] = null;
    private _chapters: Chapter[] = [];

    constructor(
        private _quizzService: QuizzService,
        private _route: ActivatedRoute,
        private _storage: StorageService
    ) {}

    ngOnInit(): void {
        this._route.paramMap.subscribe((p) => {
            this._subject = p.get('id');
            this._quizzService.getQuizzRaw(this._subject).subscribe((q) => {
                this._currentQuizz = q;
                this.loadChapters();
            });
        });
    }

    loadChapters(): any {
        while (this._currentQuizz.length > 0) {
            const chapter: Chapter = {
                subject: this._subject,
                nr: 0,
                nrQuestions: 0,
                lastScore: null
            };
            chapter.nrQuestions = this._currentQuizz.splice(0, 10).length;
            chapter.nr = this._chapters.length + 1;
            const chapterStorageKey = `${chapter.subject}-${chapter.nr}`;
            if (this._storage.has(chapterStorageKey)) {
                chapter.lastScore = this._storage.get(chapterStorageKey);
            }
            this._chapters.push(chapter);
        }
    }

    get chapters(): Chapter[] {
        return this._chapters;
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterScore } from 'src/app/shared/models/chapter-score.interface';

import { QuizzService } from '../../services/quizz.service';
import { StorageService } from '../../services/storage.service';

@Component({
    selector: 'app-evaluation-page',
    templateUrl: './evaluation-page.component.html',
    styleUrls: ['./evaluation-page.component.scss']
})
export class EvaluationPageComponent implements OnInit {
    totalCorrect = 0;
    total = 0;

    constructor(
        private _quizzService: QuizzService,
        private _route: ActivatedRoute,
        private _storage: StorageService,
        private _router: Router
    ) {}

    ngOnInit(): void {
        this.totalCorrect = this._quizzService.getTotalCorrect();
        this.total = this._quizzService.getTotal();

        const chapterScore: ChapterScore = {
            subject: null,
            nr: 0,
            lastScore: 0
        };
        this._route.paramMap.subscribe((p) => {
            chapterScore.subject = p.get('id');
            chapterScore.nr = parseInt(p.get('chapter'));
            chapterScore.lastScore = this.getScore();

            this.saveChapterScore(chapterScore);
        });
    }

    goBack(): void {
        this._route.params.subscribe((p) => {
            this._router.navigate(['q', p.id]);
        });
    }

    getScore(): number {
        return Math.round((this.totalCorrect / this.total) * 100);
    }

    hasPassed(): boolean {
        return this.getScore() >= 75;
    }

    saveChapterScore(chapterScore: ChapterScore): void {
        this._storage.set(
            `${chapterScore.subject}-${chapterScore.nr}`,
            chapterScore.lastScore
        );
    }
}

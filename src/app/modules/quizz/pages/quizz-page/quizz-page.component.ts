import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QA } from 'src/app/shared/models/qa.interface';

import { QuizzService } from '../../services/quizz.service';

@Component({
    selector: 'app-quizz-page',
    templateUrl: './quizz-page.component.html',
    styleUrls: ['./quizz-page.component.scss']
})
export class QuizzPageComponent implements OnInit {
    loading = true;

    qaForm = new FormGroup({
        answer: new FormControl(null, [Validators.required])
    });

    selectedAnswerIndex = null;
    verified = false;

    constructor(
        private _quizzService: QuizzService,
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this.qaForm.get('answer').valueChanges.subscribe((value) => {
            this.selectedAnswerIndex = value;
        });
    }

    ngOnInit(): void {
        this._route.paramMap.subscribe((p) => {
            const id = p.get('id');
            this._quizzService.loadQuizz(id).subscribe((_) => {
                this.loading = false;
            });
        });
    }

    verifyAnswer(): void {
        this.verified = true;
        this._quizzService.verifyAnswer(this.selectedAnswerIndex);
    }

    nextQuestion(): void {
        this.verified = false;
        this.qaForm.get('answer').patchValue(null);

        if (this._quizzService.hasNextQA()) {
            this._quizzService.getNextQA();
        } else {
            // done
            this._router.navigate(['done'], { relativeTo: this._route });
        }
    }

    getQuestionXofY(): string {
        return `Question ${
            this._quizzService.getCurrentIdx() + 1
        } / ${this._quizzService.getTotal()}`;
    }

    get currentQA(): QA {
        return this._quizzService.currentQA;
    }
}

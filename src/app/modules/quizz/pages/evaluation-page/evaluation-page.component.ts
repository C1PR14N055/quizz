import { Component, OnInit } from '@angular/core';

import { QuizzService } from '../../services/quizz.service';

@Component({
    selector: 'app-evaluation-page',
    templateUrl: './evaluation-page.component.html',
    styleUrls: ['./evaluation-page.component.scss']
})
export class EvaluationPageComponent implements OnInit {
    totalCorrect = 0;
    total = 0;
    constructor(private _quizzService: QuizzService) {}

    ngOnInit(): void {
        this.totalCorrect = this._quizzService.getTotalCorrect();
        this.total = this._quizzService.getTotal();
    }
}

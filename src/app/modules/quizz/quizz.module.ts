import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

import { EvaluationPageComponent } from './pages/evaluation-page/evaluation-page.component';
import { QuizzPageComponent } from './pages/quizz-page/quizz-page.component';
import { QuizzRoutingModule } from './quizz-routing.module';

@NgModule({
    declarations: [QuizzPageComponent, EvaluationPageComponent],
    imports: [
        CommonModule,
        QuizzRoutingModule,
        MatRadioModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatIconModule
    ],
    providers: []
})
export class QuizzModule {}

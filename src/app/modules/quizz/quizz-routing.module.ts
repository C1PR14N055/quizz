import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvaluationPageComponent } from './pages/evaluation-page/evaluation-page.component';
import { QuizzChapterPageComponent } from './pages/quizz-chapter-page/quizz-chapter-page.component';
import { QuizzPageComponent } from './pages/quizz-page/quizz-page.component';

const routes: Routes = [
    {
        path: '',
        component: QuizzChapterPageComponent
    },
    {
        path: ':chapter',
        component: QuizzPageComponent
    },
    {
        path: ':chapter/done',
        component: EvaluationPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizzRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvaluationPageComponent } from './pages/evaluation-page/evaluation-page.component';
import { QuizzPageComponent } from './pages/quizz-page/quizz-page.component';

const routes: Routes = [
    {
        path: '',
        component: QuizzPageComponent
    },
    {
        path: 'done',
        component: EvaluationPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuizzRoutingModule {}

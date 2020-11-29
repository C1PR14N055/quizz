import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'q/:id',
        loadChildren: () =>
            import('./modules/quizz/quizz.module').then((m) => m.QuizzModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

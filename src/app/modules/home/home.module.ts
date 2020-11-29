import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubjectsOverviewModule } from 'src/app/shared/subjects-overview/subjects-overview.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, HomeRoutingModule, SubjectsOverviewModule]
})
export class HomeModule {}

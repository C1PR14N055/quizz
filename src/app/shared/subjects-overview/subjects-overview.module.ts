import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SubjectCardV2Component } from './subject-card-v2/subject-card-v2.component';
import { SubjectCardComponent } from './subject-card/subject-card.component';

@NgModule({
    declarations: [SubjectCardComponent, SubjectCardV2Component],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        RouterModule
    ],
    exports: [SubjectCardComponent, SubjectCardV2Component]
})
export class SubjectsOverviewModule {}

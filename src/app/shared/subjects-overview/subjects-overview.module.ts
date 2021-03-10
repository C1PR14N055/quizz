import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { SubjectCardV2Component } from './subject-card-v2/subject-card-v2.component';

@NgModule({
    declarations: [SubjectCardV2Component],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        RouterModule
    ],
    exports: [SubjectCardV2Component]
})
export class SubjectsOverviewModule {}

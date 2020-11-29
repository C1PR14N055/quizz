import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

import { SubjectCardComponent } from './subject-card/subject-card.component';

@NgModule({
    declarations: [SubjectCardComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
    exports: [SubjectCardComponent]
})
export class SubjectsOverviewModule {}

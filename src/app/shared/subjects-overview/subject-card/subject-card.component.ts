import { Component, Input, OnInit } from '@angular/core';

import { Subject } from '../../models/subject.interface';

@Component({
    selector: 'app-subject-card',
    templateUrl: './subject-card.component.html',
    styleUrls: ['./subject-card.component.scss']
})
export class SubjectCardComponent implements OnInit {
    @Input() subject: Subject;

    constructor() {}

    ngOnInit(): void {}

    getBackgroundImage(): string {
        return `url(${this.subject.image})`;
    }
}

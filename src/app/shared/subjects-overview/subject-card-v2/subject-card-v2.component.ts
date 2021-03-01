import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from '../../models/subject.interface';

@Component({
    selector: 'app-subject-card-v2',
    templateUrl: './subject-card-v2.component.html',
    styleUrls: ['./subject-card-v2.component.scss']
})
export class SubjectCardV2Component implements OnInit {
    @Input() subject: Subject;
    isHovered = false;

    constructor(private _router: Router) {}

    ngOnInit(): void {}

    openRoute(): void {
        this._router.navigate(['q', this.subject.route]);
    }

    getBackgroundImage(): string {
        return `url(${this.subject.image})`;
    }

    getTotalQuestion(): string {
        return `${this.subject.totalQuestions} Questions`;
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.isHovered = true;
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.isHovered = false;
    }
}

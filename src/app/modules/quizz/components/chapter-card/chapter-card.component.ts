import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chapter } from 'src/app/shared/models/chapter.interface';

@Component({
    selector: 'app-chapter-card',
    templateUrl: './chapter-card.component.html',
    styleUrls: ['./chapter-card.component.scss']
})
export class ChapterCardComponent implements OnInit {
    @Input() chapter: Chapter = null;
    isHovered = false;
    constructor(private _router: Router) {}

    ngOnInit(): void {}

    openRoute(): void {
        this._router.navigate([
            'q',
            this.chapter.subject.toLowerCase(),
            this.chapter.nr
        ]);
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

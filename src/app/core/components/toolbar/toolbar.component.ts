import { Component, OnInit } from '@angular/core';
import { ENVIRONMENT } from 'src/environments/environment';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
    version = ENVIRONMENT.version;

    constructor() {}

    ngOnInit(): void {}
}

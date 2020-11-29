import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/shared/models/subject.interface';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    subjects: Subject[];

    constructor(private _http: HttpClient) {}

    ngOnInit(): void {
        this._http.get('assets/json/subjects.json').subscribe((resp) => {
            this.subjects = resp['subjects'];
        });
    }
}

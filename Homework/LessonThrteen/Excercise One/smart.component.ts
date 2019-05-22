


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'smart',
    templateUrl: './dump.component.html',
    styleUrls: []
})
export class SmartComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }


    title = 'Lesson #2';

    user: any;

    constructor() {
        this.user = {
            name: "Abdu E.",
            sex: "M",
            dept: "MSCS",

            course: ["WAP-CS572",
                     "MWA-CS572",
                    "WAA-CS552",
                    "EA-CS600",
                    "Algo-CS400"
            ],
            phone: [
                "123-123-1234",
                "456-456-4567",
            ]
        };
    }
}
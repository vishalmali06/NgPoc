import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    frozenWidth: string;
    scrollableCols: any[];
    frozenCols: any[];
    data: any[];
    newData: any[];
    temparr: any[];
    totalcal: any[];

    ngOnInit() {
        this.frozenCols = [];
        this.scrollableCols = [];
        this.temparr = [];
        this.newData = [];
        this.totalcal = [];

        this.data = [{
            companyName: 'ABCD',
            distributor_ac: 123,
            year: 2015,
            fam: 100,
            euro: 120
        },
        {
            companyName: 'ABCD',
            distributor_ac: 123,
            year: 2016,
            fam: 110,
            euro: 130
        }, {
            companyName: 'XYZ',
            distributor_ac: 444,
            year: 2015,
            fam: 300,
            euro: 350
        },
        {
            companyName: 'XYZ',
            distributor_ac: 444,
            year: 2016,
            fam: 200,
            euro: 250
        }
        ];

        for (var i = 0; i < this.data.length; i++) {
            if (this.temparr.indexOf(this.data[i].companyName) === -1) {
                this.temparr.push(this.data[i].companyName);
                this.newData.push({
                    companyName: this.data[i].companyName,
                    distributor_ac: this.data[i].distributor_ac
                });
                this.newData[this.temparr.indexOf(this.data[i].companyName)][`fam_${this.data[i].year}`] = this.data[i].fam;
                this.newData[this.temparr.indexOf(this.data[i].companyName)][`euro_${this.data[i].year}`] = this.data[i].euro;
                // this.newData[this.temparr.indexOf(this.data[i].companyName)].total_fam = this.data[i].fam;
                // this.newData[this.temparr.indexOf(this.data[i].companyName)].total_euro = this.data[i].euro;
            } else {
                this.newData[this.temparr.indexOf(this.data[i].companyName)][`fam_${this.data[i].year}`] = this.data[i].fam;
                this.newData[this.temparr.indexOf(this.data[i].companyName)][`euro_${this.data[i].year}`] = this.data[i].euro;
                // this.newData[this.temparr.indexOf(this.data[i].companyName)].total_fam += this.data[i].fam;
                // this.newData[this.temparr.indexOf(this.data[i].companyName)].total_euro += this.data[i].euro;
            }
        }

        for (var i = 0; i < this.newData.length; i++) {
            Object.assign(this.newData[i], { total_fam: 210, total_euro: 250 });
        }

        console.log(this.newData);

        for (var i = 0; i < this.newData.length; i++) {
            if (i === 0) {
                for (var j = 0; j < Object.keys(this.newData[i]).length; j++) {
                    if (j < 2) {
                        this.frozenCols.push(
                            { field: Object.keys(this.newData[i])[j], header: Object.keys(this.newData[i])[j] }
                        );
                    }
                    else {
                        this.scrollableCols.push(
                            { field: Object.keys(this.newData[i])[j], header: Object.keys(this.newData[i])[j] }
                        );
                    }
                }
            }
        }

        this.frozenWidth = `${this.frozenCols.length * 150}px`;

        this.totalcal = [this.newData.reduce((acc, n) => {
            for (var prop in n) {
                if (acc.hasOwnProperty(prop)) acc[prop] += n[prop];
                else acc[prop] = n[prop];
            }
            return acc;
        }, {})]

    }
}

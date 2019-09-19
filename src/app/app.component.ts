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
    totarr: any[];

    ngOnInit() {
        this.frozenCols = [];
        this.scrollableCols = [];
        this.temparr = [];
        this.newData = [];
        this.totalcal = [];
        this.totarr = [];
        this.data = [
            { company_name: 'AIR', distributor_ac_no: 12345, b_a: 'CT', f_a_m: 'INK', year: 2015, fam_local: 10, euro_other: 20 },
            { company_name: 'Optimize', distributor_ac_no: 12345677, b_a: 'PT', f_a_m: 'INO', year: 2015, fam_local: 30, euro_other: 40 },
            { company_name: 'Winsupply', distributor_ac_no: 12344556, b_a: 'VT', f_a_m: 'JPN', year: 2015, fam_local: 50, euro_other: 60 },
            { company_name: 'Av group DB inc', distributor_ac_no: 122334455, b_a: 'IT', f_a_m: 'ZAA', year: 2015, fam_local: 70, euro_other: 80 },
            { company_name: 'AIR', distributor_ac_no: 12345, b_a: 'CT', f_a_m: 'INK', year: 2016, fam_local: 90, euro_other: 100 },
            { company_name: 'Optimize', distributor_ac_no: 12345677, b_a: 'PT', f_a_m: 'INO', year: 2016, fam_local: 110, euro_other: 120 },
            { company_name: 'Winsupply', distributor_ac_no: 12344556, b_a: 'VT', f_a_m: 'JPN', year: 2016, fam_local: 130, euro_other: 140 },
            { company_name: 'Av group DB inc', distributor_ac_no: 122334455, b_a: 'IT', f_a_m: 'ZAA', year: 2016, fam_local: 150, euro_other: 160 },
            { company_name: 'Acier roger NX inc', distributor_ac_no: 444444, b_a: 'CT', f_a_m: 'INK', year: 2015, fam_local: 15, euro_other: 25 },
            { company_name: 'AV Bombardier inc', distributor_ac_no: 555555, b_a: 'PT', f_a_m: 'INO', year: 2015, fam_local: 35, euro_other: 45 },
            { company_name: 'Produits rog', distributor_ac_no: 666666, b_a: 'VT', f_a_m: 'JPN', year: 2015, fam_local: 55, euro_other: 65 },
            { company_name: 'Bombardier inc', distributor_ac_no: 777777, b_a: 'IT', f_a_m: 'ZAA', year: 2015, fam_local: 75, euro_other: 85 },
            { company_name: 'Acier roger NX inc', distributor_ac_no: 444444, b_a: 'CT', f_a_m: 'INK', year: 2016, fam_local: 95, euro_other: 150 },
            { company_name: 'AV Bombardier inc', distributor_ac_no: 555555, b_a: 'PT', f_a_m: 'INO', year: 2016, fam_local: 115, euro_other: 125 },
            { company_name: 'Produits rog', distributor_ac_no: 666666, b_a: 'VT', f_a_m: 'JPN', year: 2016, fam_local: 135, euro_other: 145 },
            { company_name: 'Bombardier inc', distributor_ac_no: 777777, b_a: 'IT', f_a_m: 'ZAA', year: 2016, fam_local: 155, euro_other: 165 }
        ];

        for (let i = 0; i < this.data.length; i++) {
            if (this.temparr.indexOf(this.data[i].company_name) === -1) {
                this.temparr.push(this.data[i].company_name);
                this.newData.push({
                    company_name: this.data[i].company_name,
                    distributor_ac_no: this.data[i].distributor_ac_no,
                    b_a: this.data[i].b_a,
                    f_a_m: this.data[i].f_a_m
                });
                this.newData[this.temparr.indexOf(this.data[i].company_name)][`fam_local_${this.data[i].year}`] = this.data[i].fam_local;
                this.newData[this.temparr.indexOf(this.data[i].company_name)][`euro_other_${this.data[i].year}`] = this.data[i].euro_other;
                this.newData[this.temparr.indexOf(this.data[i].company_name)].total_fam = this.data[i].fam_local;
                this.newData[this.temparr.indexOf(this.data[i].company_name)].total_euro = this.data[i].euro_other;
            } else {
                this.newData[this.temparr.indexOf(this.data[i].company_name)][`fam_local_${this.data[i].year}`] = this.data[i].fam_local;
                this.newData[this.temparr.indexOf(this.data[i].company_name)][`euro_other_${this.data[i].year}`] = this.data[i].euro_other;
                this.newData[this.temparr.indexOf(this.data[i].company_name)].total_fam += this.data[i].fam_local;
                this.newData[this.temparr.indexOf(this.data[i].company_name)].total_euro += this.data[i].euro_other;
            }
        }
        for (let j = 0; j < this.newData.length; j++) {
            this.totarr = [];
            for (let i in this.newData[j]) {
                if (i.search("total_") !== -1) {
                    this.totarr.push(this.newData[j][i]);
                    delete this.newData[j][i];
                }
            }

            this.newData[j] = Object.assign({}, this.newData[j],
                { fam_total: this.totarr[0] },
                { euro_total: this.totarr[1] }
            );
        }

        console.log(this.newData);

        for (let i = 0; i < this.newData.length; i++) {
            if (i === 0) {
                for (let j = 0; j < Object.keys(this.newData[i]).length; j++) {
                    if (j < 4) {
                        this.frozenCols.push(
                            { field: Object.keys(this.newData[i])[j], header: humanize(Object.keys(this.newData[i])[j]) }
                        );
                    }
                    else {
                        this.scrollableCols.push(
                            { field: Object.keys(this.newData[i])[j], header: humanize(Object.keys(this.newData[i])[j]) }
                        );
                    }
                }
            }
        }

        this.frozenWidth = `${this.frozenCols.length * 150}px`;

        this.totalcal = [this.newData.reduce((acc, n) => {
            for (const prop in n) {
                if (acc.hasOwnProperty(prop)) {
                    acc[prop] += n[prop];
                } else {
                    acc[prop] = n[prop];
                }
            }
            return acc;
        }, {})];

        function humanize(str) {
            var frags = str.split('_');
            for (let i = 0; i < frags.length; i++) {
                frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
            }
            return frags.join(' ');
        }
        console.log(this.totalcal);
    }
}

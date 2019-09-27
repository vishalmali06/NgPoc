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

    yearsdd = ["2015", "2016"];
    arrdd: any[];

    ngOnInit() {
        this.frozenCols = [];
        this.scrollableCols = [];
        this.temparr = [];
        this.newData = [];
        this.totalcal = [];
        this.totarr = [];
        this.arrdd = [];
        this.data = [
            { company_name: 'AIR', distributor_ac_no: 31100798601, b_a: 'CT', f_a_m: 'INK', year: 2015, fam_local: 10, other: 20 },
            { company_name: 'Optimize', distributor_ac_no: 31100798602, b_a: 'PT', f_a_m: 'INO', year: 2015, fam_local: 30, other: 40 },
            { company_name: 'Winsupply', distributor_ac_no: 31100798603, b_a: 'VT', f_a_m: 'JPN', year: 2015, fam_local: 50, other: 60 },
            { company_name: 'Av group DB inc', distributor_ac_no: 31100798604, b_a: 'IT', f_a_m: 'ZAA', year: 2015, fam_local: 70, other: 80 },
            { company_name: 'AIR', distributor_ac_no: 31100798601, b_a: 'CT', f_a_m: 'INK', year: 2016, fam_local: 90, other: 100 },
            { company_name: 'Optimize', distributor_ac_no: 31100798602, b_a: 'PT', f_a_m: 'INO', year: 2016, fam_local: 110, other: 120 },
            { company_name: 'Winsupply', distributor_ac_no: 31100798603, b_a: 'VT', f_a_m: 'JPN', year: 2016, fam_local: 130, other: 140 },
            { company_name: 'Av group DB inc', distributor_ac_no: 31100798604, b_a: 'IT', f_a_m: 'ZAA', year: 2016, fam_local: 150, other: 160 },
            { company_name: 'Acier roger NX inc', distributor_ac_no: 31100798605, b_a: 'CT', f_a_m: 'INK', year: 2015, fam_local: 15, other: 25 },
            { company_name: 'AV Bombardier inc', distributor_ac_no: 31100798666, b_a: 'PT', f_a_m: 'INO', year: 2015, fam_local: 35, other: 45 },
            { company_name: 'Produits rog', distributor_ac_no: 31100798607, b_a: 'VT', f_a_m: 'JPN', year: 2015, fam_local: 55, other: 65 },
            { company_name: 'Bombardier inc', distributor_ac_no: 31100798608, b_a: 'IT', f_a_m: 'ZAA', year: 2015, fam_local: 75, other: 85 },
            { company_name: 'Acier roger NX inc', distributor_ac_no: 31100798605, b_a: 'CT', f_a_m: 'INK', year: 2016, fam_local: 95, other: 150 },
            { company_name: 'AV Bombardier inc', distributor_ac_no: 31100798666, b_a: 'PT', f_a_m: 'INO', year: 2016, fam_local: 115, other: 125 },
            { company_name: 'Produits rog', distributor_ac_no: 31100798607, b_a: 'VT', f_a_m: 'JPN', year: 2016, fam_local: 135, other: 145 },
            { company_name: 'Bombardier inc', distributor_ac_no: 31100798608, b_a: 'IT', f_a_m: 'ZAA', year: 2016, fam_local: 155, other: 165 }
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
                this.newData[this.temparr.indexOf(this.data[i].company_name)][`other_${this.data[i].year}`] = this.data[i].other;
                this.newData[this.temparr.indexOf(this.data[i].company_name)].total_fam = this.data[i].fam_local;
                this.newData[this.temparr.indexOf(this.data[i].company_name)].total_other = this.data[i].other;
            } else {
                this.newData[this.temparr.indexOf(this.data[i].company_name)][`fam_local_${this.data[i].year}`] = this.data[i].fam_local;
                this.newData[this.temparr.indexOf(this.data[i].company_name)][`other_${this.data[i].year}`] = this.data[i].other;
                this.newData[this.temparr.indexOf(this.data[i].company_name)].total_fam += this.data[i].fam_local;
                this.newData[this.temparr.indexOf(this.data[i].company_name)].total_other += this.data[i].other;
            }
        }
        for (let j = 0; j < this.newData.length; j++) {
            this.totarr = [];
            for (let i in this.newData[j]) {
                if (i.search('total_') !== -1) {
                    this.totarr.push(this.newData[j][i]);
                    delete this.newData[j][i];
                }
            }

            this.newData[j] = Object.assign({}, this.newData[j],
                { fam_total: this.totarr[0] },
                { other_total: this.totarr[1] }
            );
        }

        for (let i = 0; i < this.newData.length; i++) {
            if (i === 0) {
                for (let j = 0; j < Object.keys(this.newData[i]).length; j++) {
                    if (j < 4) {
                        let header =humanize(Object.keys(this.newData[i])[j]);
                        header = header.replace("Ac No", "A/c. No");
                        header = header.replace("B A", "BA");
                        header = header.replace("F A M", "FAM");
                        this.frozenCols.push(
                            { field: Object.keys(this.newData[i])[j], header: header }
                        );
                    } else {
                        let header = humanize(Object.keys(this.newData[i])[j]).replace("Fam", "FAM");
                        header = header.replace("Other", "Euro/Other");
                        this.scrollableCols.push(
                            { field: Object.keys(this.newData[i])[j], header: header }
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
            const frags = str.split('_');
            for (let i = 0; i < frags.length; i++) {
                frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
            }
            return frags.join(' ');
        }
        this.arrdd = this.scrollableCols.slice();
    }

    onChange(deviceValue) {
        this.arrdd = this.scrollableCols.slice();
        if (deviceValue === '2015') {
            this.arrdd.splice(2, 2);
            for (let i = 0; i < this.newData.length; i++) {
                this.newData[i].fam_total = this.newData[i].fam_local_2015;
                this.newData[i].other_total = this.newData[i].other_2015;
            }
            this.totalcal[0].fam_total = this.totalcal[0].fam_local_2015;
            this.totalcal[0].other_total = this.totalcal[0].other_2015;
        } else if (deviceValue === '2016') {
            this.arrdd.splice(0, 2);
            for (let i = 0; i < this.newData.length; i++) {
                this.newData[i].fam_total = this.newData[i].fam_local_2016;
                this.newData[i].other_total = this.newData[i].other_2016;
            }
            this.totalcal[0].fam_total = this.totalcal[0].fam_local_2016;
            this.totalcal[0].other_total = this.totalcal[0].other_2016;
        } else {
            this.arrdd = this.scrollableCols.slice();
            for (let i = 0; i < this.newData.length; i++) {
                this.newData[i].fam_total = (this.newData[i].fam_local_2015 + this.newData[i].fam_local_2016);
                this.newData[i].other_total = (this.newData[i].other_2015 + this.newData[i].other_2016);
            }
            this.totalcal[0].fam_total = (this.totalcal[0].fam_local_2015 + this.totalcal[0].fam_local_2016);
            this.totalcal[0].other_total = (this.totalcal[0].fam_local_2016 + this.totalcal[0].other_2016);
        }
    }

}
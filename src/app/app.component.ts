import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  frozenWidth: string;
  cars: any[];
  scrollableCols: any[];
  frozenCols: any[];
  totalcal: any[];
  faml_15_sum: number;
  euro_15_sum: number;
  faml_16_sum: number;
  euro_16_sum: number;
  faml_tot_sum: number;
  euro_tot_sum: number;

data: any[];
newdata: any[];

  ngOnInit() {
    this.cars = [
      {
        companyName: 'ABCD',
        distributor_ac: 123121,
        ba: 'CT',
        brand: 'Atlas-1',
        faml_15: 20,
        euro_15: 21,
        faml_16: 22,
        euro_16: 23,
        faml_tot: 100,
        euro_tot: 200
      },
      {
        companyName: 'XYZ',
        distributor_ac: 564565,
        ba: 'AT',
        brand: 'Atlas-2',
        faml_15: 11,
        euro_15: 12,
        faml_16: 13,
        euro_16: 14,
        faml_tot: 100,
        euro_tot: 200
      },
      {
        companyName: 'PQR',
        distributor_ac: 564565,
        ba: 'AT',
        brand: 'Atlas-2',
        faml_15: 11,
        euro_15: 12,
        faml_16: 13,
        euro_16: 14,
        faml_tot: 100,
        euro_tot: 200
      },
      {
        companyName: 'PQR',
        distributor_ac: 564565,
        ba: 'AT',
        brand: 'Atlas-2',
        faml_15: 11,
        euro_15: 12,
        faml_16: 13,
        euro_16: 14,
        faml_tot: 100,
        euro_tot: 200
      },
      {
        companyName: 'PQR',
        distributor_ac: 564565,
        ba: 'AT',
        brand: 'Atlas-2',
        faml_15: 11,
        euro_15: 12,
        faml_16: 13,
        euro_16: 14,
        faml_tot: 100,
        euro_tot: 200
      },
      {
        companyName: 'PQR',
        distributor_ac: 564565,
        ba: 'AT',
        brand: 'Atlas-2',
        faml_15: 11,
        euro_15: 12,
        faml_16: 13,
        euro_16: 14,
        faml_tot: 100,
        euro_tot: 200
      }
    ];

    this.frozenCols = [
      { field: 'companyName', header: 'Company Name' },
      { field: 'distributor_ac', header: 'A/C No' },
      { field: 'ba', header: 'BA' },
      { field: 'brand', header: 'Brand' },
      { field: 'brand', header: 'Brand' },
      { field: 'brand', header: 'Brand' }
    ];
    this.frozenWidth = `${this.frozenCols.length * 150}px`;

    this.scrollableCols = [
      { field: 'faml_15', header: 'FAM Local' },
      { field: 'euro_15', header: 'Euro/Other' },
      { field: 'faml_16', header: 'FAM Local' },
      { field: 'euro_16', header: 'Euro/Other' },
      { field: 'faml_tot', header: 'FAM Local' },
      { field: 'euro_tot', header: 'Euro/Other' }
    ];

    this.faml_15_sum = this.cars.map(i => i.faml_15).reduce((a, b) => a + b, 0);
    this.euro_15_sum = this.cars.map(i => i.euro_15).reduce((a, b) => a + b, 0);
    this.faml_16_sum = this.cars.map(i => i.faml_16).reduce((a, b) => a + b, 0);
    this.euro_16_sum = this.cars.map(i => i.euro_16).reduce((a, b) => a + b, 0);
    this.faml_tot_sum = this.cars.map(i => i.faml_tot).reduce((a, b) => a + b, 0);
    this.euro_tot_sum = this.cars.map(i => i.euro_tot).reduce((a, b) => a + b, 0);

    this.totalcal = [
      {
        total: 'Total',
        faml_15: this.faml_15_sum,
        euro_15: this.euro_15_sum,
        faml_16: this.faml_16_sum,
        euro_16: this.euro_16_sum,
        faml_tot: this.faml_tot_sum,
        euro_tot: this.euro_tot_sum
      }
    ];


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

this.data.forEach(element => {
    console.log(element);
});

for (let index = 0; index < this.data.length; index++) {
    const element = this.data[index].companyName.length;
    console.log(element);
}


// var i;
// console.log();
// for (i = 0; i < this.data.length; i++) {
//   console.log(this.data[i].companyName);
// }
  }
}

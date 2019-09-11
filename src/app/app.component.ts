import {Component, OnInit} from '@angular/core';
import { Car } from './domain/car';
import { CarService} from './services/carservice';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  providers:   [CarService]
})
export class AppComponent implements OnInit {

    cars: Car[];

    frozenCols: any[];

    scrollableCols: any[];

    frozenColLength: '200px';

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCars().subscribe(cars => this.cars = cars);

        this.scrollableCols = [
            { field: 'brand', header: 'FAM Local' },
            { field: 'color', header: 'Euro/Other' },
            { field: 'country', header: 'FAM Local' },
            { field: 'state', header: 'Euro/Other' },
            { field: 'country', header: 'FAM Local' },
            { field: 'state', header: 'Euro/Other' }
        ];

        this.frozenCols = [
            { field: 'CompanyName', header: 'Company Name' },
            { field: 'BA', header: 'BA' },
            { field: 'FAM', header: 'FAM' },
        ];
    }
}


import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../domain/car';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http
      .get<{ data: Car[] }>('assets/data/cars-small.json')
      .pipe(map(res => <Car[]>res.data));
  }
}

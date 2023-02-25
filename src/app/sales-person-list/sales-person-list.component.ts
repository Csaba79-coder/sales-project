import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Csaba", "Vadasz", "csabavadasz79@gmail.com", 50000),
    new SalesPerson("Elek", "Teszt", "teszt.elek@teszt.com", 2),
    new SalesPerson("John", "Doe", "john.doe@johnny.org", 26620)
  ];

}

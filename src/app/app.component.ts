import { Component } from '@angular/core';
import {MockDateBase} from './shared/mockDateBase';
import {Appointment} from './shared/appointment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table-lesson';
  displayedColumns = ['title', 'startDate', 'finishDate', 'country', 'town'];
  dataSource: Array<Appointment> = MockDateBase.schedule;
  constructor() {
  }

}

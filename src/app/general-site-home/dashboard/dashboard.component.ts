import { Component, OnInit } from '@angular/core';
import { table } from 'console';
import { TestModel } from '../models/test-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tableData: TestModel[] = [];

  constructor() { }

  ngOnInit(): void {
    for (var _i = 0; _i < 3; _i++)
    {
      this.tableData.push(new TestModel());
    }
  }

}

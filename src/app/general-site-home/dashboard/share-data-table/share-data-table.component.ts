import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TestModel } from '../../models/test-model';

@Component({
  selector: 'app-share-data-table',
  templateUrl: './share-data-table.component.html',
  styleUrls: ['./share-data-table.component.scss']
})
export class ShareDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @Input() data: TestModel[] = [];

  dataSource = new MatTableDataSource<TestModel>(this.data);

  displayedColumns = ['test1','test2','test3','test4'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(){
    this.dataSource.data = this.data;
  }

}

import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../_services/state.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { StateMas } from '@app/_models/StateMas';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.less'],
})
export class StateListComponent implements OnInit, AfterViewInit  {
  states: any[] = [];

  constructor(private stateService: StateService, private router: Router) { }
  displayedColumns: string[] = ['stateId', 'stateName', 'stateCode', 'Action'];
  dataSource = new MatTableDataSource<StateMas>(this.states);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.getState();
  }
  AddNew() {
    this.router.navigate(['/master/state-add/0']);
  }

  getState() {
    this.stateService.getStates().subscribe(data => {
      this.states = data;
      console.log(this.states);
    });
  }

  DeleteState(id: number) {
    this.stateService.deleteState(id).subscribe(res =>
    {
      console.log("Deleted")
      this.getState();
    });     
  }

  EnableState(id: number) {
    this.stateService.enableState(id).subscribe(res =>
    {
      console.log("Deleted");
      this.getState();
    });     
  }
  
}

// export interface StateMas{
//   stateId: number, 
//   stateName: string, 
//   stateCode: string
// }

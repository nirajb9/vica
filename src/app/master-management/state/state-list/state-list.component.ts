import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../_services/state.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.less']
})
export class StateListComponent implements OnInit {
  states: any[] = [];

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
     this.stateService.getStates().subscribe(data => {
       this.states = data;
     });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../_services/state.service';
import { StateMas } from '@app/_models/StateMas';

@Component({
  selector: 'app-state-add',
  templateUrl: './state-add.component.html',
  styleUrls: ['./state-add.component.less']
})
export class StateAddComponent {
  stateForm: FormGroup;
  todayDate: Date | null;
  stateid: number = 0;

  constructor(private fb: FormBuilder, private stateService: StateService, private router: Router, private route: ActivatedRoute) {
    this.stateForm = this.fb.group({
      state_name: ['', Validators.required],
      state_code: ['', Validators.required]
    });

    this.todayDate = new Date();
    this.route.paramMap.subscribe(params => {
      this.stateid = Number(params.get('id'));
  });
  }
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  AddState() {
    if (this.stateForm.valid) {

      console.log(this.stateForm)
       let stateobj : StateMas =
       {
         stateId: this.stateid,
         stateName: this.stateForm.value.state_name,
         stateCode: this.stateForm.value.state_code,
         isDeleted:false,
         createdBy: 1,
         createdDate: this.todayDate,
         modifiedBy: 1,
         modifiedDate: this.todayDate,

       }

      this.stateService.addState(stateobj).subscribe(() => {
        this.router.navigate(['/master/state-list']);
      });
    }
  }

  ngOnInit() {
    console.log(this.stateid);
    if(this.stateid != undefined && this.stateid !=0)
    {
      this.stateService.getStateById(this.stateid).subscribe(res =>
      {
        this.stateForm.controls["state_name"].setValue(res.stateName);
        this.stateForm.controls["state_code"].setValue(res.stateCode);
      }
      )
      
    }
  }
}

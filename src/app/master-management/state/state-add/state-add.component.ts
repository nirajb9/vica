import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../../../_services/state.service';

@Component({
  selector: 'app-state-add',
  templateUrl: './state-add.component.html',
  styleUrls: ['./state-add.component.less']
})
export class StateAddComponent {
  stateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private router: Router
  ) {
    this.stateForm = this.fb.group({
      state_name: ['', Validators.required],
      state_code: ['', Validators.required]
    });
  }
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  addState(): void {
    if (this.stateForm.valid) {
      this.stateService.addState(this.stateForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../../../_services/state.service';

@Component({
  selector: 'app-state-edit',
  templateUrl: './state-edit.component.html',
  styleUrls: ['./state-edit.component.less']
})
export class StateEditComponent implements OnInit {
  stateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.stateForm = this.fb.group({
      state_id: [{ value: '', disabled: true }],
      state_name: ['', Validators.required],
      state_code: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.stateService.getStateById(id).subscribe(data => {
      this.stateForm.patchValue(data);
    });
  }

  updateState(): void {
    if (this.stateForm.valid) {
      const stateData = { ...this.stateForm.value, state_id: this.stateForm.get('state_id')!.value };
      this.stateService.updateState(stateData).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}

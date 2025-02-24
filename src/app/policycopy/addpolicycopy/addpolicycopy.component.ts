import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistration } from '@app/_models';
import { PolicyCopyModel } from '@app/_models/PolicyCopyModel';
import { CommonService } from '@app/_services/common.service';
import { PolicycopyService } from '@app/_services/policycopy.service';

@Component({
  selector: 'app-addpolicycopy',
  templateUrl: './addpolicycopy.component.html',
  styleUrls: ['./addpolicycopy.component.less']
})
export class AddpolicycopyComponent implements OnInit {

  aForm: FormGroup;
  todayDate: Date | null;
  stateid: number = 0;
  policyCopyFileName: any;
  policyCopy: any;
  userList: any;

  constructor(private fb: FormBuilder, private policycopyService: PolicycopyService, private commonService: CommonService, private router: Router, private route: ActivatedRoute) {
    this.aForm = this.fb.group({
      username: ['', Validators.required],
      vehicleno: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.todayDate = new Date();
    //   this.route.paramMap.subscribe(params => {
    //     this.stateid = Number(params.get('id'));
    // });
  }
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  AddData() {
    if (this.aForm.valid) {

      let pObj: PolicyCopyModel =
      {
        policyCopyId: 0,
        userId: this.aForm.value.username,
        vehicleNo: this.aForm.value.vehicleno,
        policyCopyUrl: this.policyCopy == null ? "" : this.policyCopy.split(',')[1],
        status: this.aForm.value.status,
        isDeleted: false,
        policyCopyFileName: this.policyCopyFileName,
        agentCompanyId: 1,
        tpRequestId: 0,
        createdBy: 1,
        createdDate: this.todayDate,
        modifiedBy: 1,
        modifiedDate: this.todayDate,
        userName:"",
      }

      this.policycopyService.AddPolicyCopy(pObj).subscribe(() => {
        alert('SUCCESS!! Data added sucessfully!');
        this.router.navigate(['/policycopy/policycopy-view']);
      });
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.policyCopyFileName = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        this.policyCopy = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  ngOnInit() {
       
    this.commonService.getUserList().subscribe(res =>
    {
      this.userList = res;
      console.log(this.userList);
    } );
  }

}

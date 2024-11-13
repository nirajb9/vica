import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegistration } from '@app/_models';
import { UsersService } from '@app/_services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.less']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  todayDate: Date | null;
  stateid: number = 0;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router, private route: ActivatedRoute) {
    this.userForm = this.fb.group({  
    name: ['', Validators.required],
    email: ['', Validators.required],
    mobileno: ['', Validators.required],
    password: ['', Validators.required],
    });

    this.todayDate = new Date();
  //   this.route.paramMap.subscribe(params => {
  //     this.stateid = Number(params.get('id'));
  // });
  }
  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  AddUser() {
    if (this.userForm.valid) {

       let userObj : UserRegistration =
       {
        userid : 0,
        name : this.userForm.value.name,
        email : this.userForm.value.email,
        mobileno : this.userForm.value.mobileno,
        password : this.userForm.value.password,
        isapproved : true  
       }

      this.usersService.addUser(userObj).subscribe(() => {
        this.router.navigate(['/usersmodule/list-user']);
      });
    }
  }

  ngOnInit() {
    // console.log(this.stateid);
    // if(this.stateid != undefined && this.stateid !=0)
    // {
    //   this.stateService.getStateById(this.stateid).subscribe(res =>
    //   {
    //     this.stateForm.controls["state_name"].setValue(res.stateName);
    //     this.stateForm.controls["state_code"].setValue(res.stateCode);
    //   }
    //   )
      
    // }
  }
}

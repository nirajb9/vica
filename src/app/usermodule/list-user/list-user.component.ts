import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@app/_services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.less']
})
export class ListUserComponent implements OnInit {

  userDetailsList : any;
  
  constructor(private userService: UsersService, private router: Router ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }
 
  getUserDetails() {
     this.userService.GetUserDetails().subscribe(res => {
      this.userDetailsList = res;
      console.log(res);
    });
  }

  AddNew() {
    this.router.navigate(['usersmodule/add-user']);
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models/user';
import { AccountService } from '@app/_services/account.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  user: User | null;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
  }
  logout() {
      this.accountService.logout();
  }
  ngOnInit(): void {
    
  }
  menu: NavItem [] = [
      {
        displayName: 'Dashboard',
       // iconName: '',//'desktop_windows',
        route: 'escritorio',
      },    
      {
        displayName: 'User Module',
        iconName: 'desktop_windows',    
        children: [
          {
            displayName: 'Add User',
            iconName: 'how_to_reg',
            route: '/usersmodule/add-user'
          },
          { 
            displayName: 'View User',
            iconName: 'waves',
            route: '/usersmodule/list-user'
          },
         
        ]
      },    
    
      {
        displayName: 'Master Module',
        iconName: '',          
        children: [
          {
            displayName: 'State',
            iconName: 'how_to_reg',
            route: '/master/state-list'
          },
          { 
            displayName: 'Vehicle Type',
            iconName: 'waves',
            route: '/todos'
          },
          { 
            displayName: 'RTO',
            iconName: 'waves',
            route: '/master/rto-list'
          },
         
            { 
              displayName: 'CC/GCV',
              iconName: 'waves',
              route: '/todos'
            },
            { 
              displayName: 'Insurance Company',
              iconName: 'waves',
              route: '/todos'
            },
            { 
              displayName: 'Age',
              iconName: 'waves',
              route: '/todos'
            }
        ]
      },
      {
        displayName: 'TP(Policy) Details',
        iconName: 'desktop_windows',    
        children: [
          {
            displayName: 'Add Policy Premium',
            iconName: 'how_to_reg',
            route: '/tppolicy/tppolicy-add'
          },
          { 
            displayName: 'Policy Requested',
            iconName: 'waves',
            route: '/tppolicy/quote-request-list'
          },
         
        ]
      }
    ];
}
export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: NavItem[];
}


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
        displayName: 'TP Details',
        iconName: 'desktop_windows',    
        children: [
          {
            displayName: 'Policy Add',
            iconName: 'how_to_reg',
            route: '/tppolicy/tppolicy-add'
          },
          { 
            displayName: 'Requested Quote',
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


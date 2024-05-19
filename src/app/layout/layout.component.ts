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
        iconName: 'desktop_windows',
        route: 'escritorio',
      },        
    
      {
        displayName: 'Master Module',
        iconName: 'desktop_windows',          
        children: [
          {
            displayName: 'State',
            iconName: 'how_to_reg',
            route: '/master/state-list'
          },
          { 
            displayName: 'RTO',
            iconName: 'waves',
            route: '/master/rto-list'
          },
          { 
              displayName: 'Vehicle Company',
              iconName: 'waves',
              route: '/todos'
            },
            { 
              displayName: 'Vehicle Model',
              iconName: 'waves',
              route: '/todos'
            },
            { 
              displayName: 'Varient',
              iconName: 'waves',
              route: '/todos'
            }
        ]
      }
    ];
}
export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}


import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User | null;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
    logout() {
        this.accountService.logout();
    }
    menu: NavItem [] = [
        {
          displayName: 'Dashboard',
          iconName: 'desktop_windows',
          route: 'escritorio',
        },        
      
        {
          displayName: 'Master Module',
          iconName: 'description',          
          children: [
            {
              displayName: 'State',
              iconName: 'how_to_reg',
              route: '/master/state-list'
            },
            { 
              displayName: 'RTO',
              iconName: 'waves',
              route: '/todos'
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

import { Component } from '@angular/core';

import { AccountService } from './_services';
import { LoginModel, User } from './_models';
import { environment } from '../environments/environment';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })

export class AppComponent {
  env: any = environment;
    user?: User | null;
   // loginModel?: LoginModel | null;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
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

export const API_URL  = environment.apiUrl;

export interface NavItem {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    children?: NavItem[];
  }
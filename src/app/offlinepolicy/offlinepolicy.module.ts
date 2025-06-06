import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflinepolicyListComponent } from './offlinepolicy-list/offlinepolicy-list.component';
import { OfflinepolicydetailsAddComponent } from './offlinepolicydetails-add/offlinepolicydetails-add.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { BuyofflinepolicyrequestListComponent } from './buyofflinepolicyrequest-list/buyofflinepolicyrequest-list.component';
import { OfflinepolicypaymentlinkAddComponent } from './offlinepolicypaymentlink-add/offlinepolicypaymentlink-add.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
        children: [
            { path: 'offlinepolicy-list', component: OfflinepolicyListComponent },
            { path: 'offlinepolicy-add/:id/:userid', component: OfflinepolicydetailsAddComponent},
            { path: 'buyofflinepolicy-list', component: BuyofflinepolicyrequestListComponent},
            { path: 'offlinepolicypaymentlink-add/:id/:userid', component: OfflinepolicypaymentlinkAddComponent}
           
        ]}

];
@NgModule({
  declarations: [
    OfflinepolicyListComponent,
    OfflinepolicydetailsAddComponent,
    BuyofflinepolicyrequestListComponent,
    OfflinepolicypaymentlinkAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
  ]
})
export class OfflinepolicyModule { }

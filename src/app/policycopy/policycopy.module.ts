import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewpolicycopyComponent } from './viewpolicycopy/viewpolicycopy.component';
import { AddpolicycopyComponent } from './addpolicycopy/addpolicycopy.component';
import { EditpolicycopyComponent } from './editpolicycopy/editpolicycopy.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/layout/layout.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: LayoutComponent,
        children: [
            { path: 'policycopy-view', component: ViewpolicycopyComponent },
            { path: 'policycopy-add', component: AddpolicycopyComponent}
        ]}
];

@NgModule({
  declarations: [
    ViewpolicycopyComponent,
    AddpolicycopyComponent,
    EditpolicycopyComponent
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
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDialogModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
  ]
})
export class PolicycopyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewendorsementComponent } from './viewendorsement/viewendorsement.component';
import { AddendorsementComponent } from './addendorsement/addendorsement.component';
import { EditendorsementComponent } from './editendorsement/editendorsement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@app/layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
        children: [
            { path: 'endorsement-view', component: ViewendorsementComponent },
            { path: 'endorsement-add/:id', component: AddendorsementComponent}
        ]}
];

@NgModule({
  declarations: [
    ViewendorsementComponent,
    AddendorsementComponent,
    EditendorsementComponent
  ],
  imports: [
    CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule, 
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
export class EndorsementModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TppolicyListComponent } from './tppolicy-list/tppolicy-list.component';
import { TppolicyAddComponent } from './tppolicy-add/tppolicy-add.component';
import { TppolicyEditComponent } from './tppolicy-edit/tppolicy-edit.component';
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
import { QuoteRequestListComponent } from './quote-request-list/quote-request-list.component';
import { QuoteRequestDetailsComponent } from './quote-request-details/quote-request-details.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
        children: [
            { path: 'tppolicy-list', component: TppolicyListComponent },
            { path: 'tppolicy-add', component: TppolicyAddComponent },
            { path: 'tppolicy-edit/:id', component: TppolicyEditComponent },
            { path: 'quote-request-list', component: QuoteRequestListComponent },
            { path: 'quote-request-details/:id', component: QuoteRequestDetailsComponent },
        ]}

];

@NgModule({
  declarations: [
    TppolicyListComponent,
    TppolicyAddComponent,
    TppolicyEditComponent,
    QuoteRequestListComponent,
    QuoteRequestDetailsComponent
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
    MatCheckboxModule
  ]
})
export class TppolicyModule { }

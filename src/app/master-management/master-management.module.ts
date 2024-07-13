import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StateListComponent } from './state/state-list/state-list.component';
import { StateAddComponent } from './state/state-add/state-add.component';
import { StateEditComponent } from './state/state-edit/state-edit.component';
import { RtoListComponent } from './rto/rto-list/rto-list.component';
import { RtoAddComponent } from './rto/rto-add/rto-add.component';
import { RtoEditComponent } from './rto/rto-edit/rto-edit.component';
import { VcompanyListComponent } from './vcompany/vcompany-list/vcompany-list.component';
import { VcompanyAddComponent } from './vcompany/vcompany-add/vcompany-add.component';
import { VcompanyEditComponent } from './vcompany/vcompany-edit/vcompany-edit.component';
import { VmodelListComponent } from './vmodel/vmodel-list/vmodel-list.component';
import { VmodelAddComponent } from './vmodel/vmodel-add/vmodel-add.component';
import { VmodelEditComponent } from './vmodel/vmodel-edit/vmodel-edit.component';
import { VariantListComponent } from './variant/variant-list/variant-list.component';
import { VariantAddComponent } from './variant/variant-add/variant-add.component';
import { VariantEditComponent } from './variant/variant-edit/variant-edit.component';
import { HomeComponent } from '@app/home';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { LayoutComponent } from '@app/layout/layout.component';


const routes: Routes = [
  {path: '', component: LayoutComponent,
        children: [
            { path: 'state-list', component: StateListComponent },
            { path: 'state-add', component: StateAddComponent },
            { path: 'state-edit/:id', component: StateEditComponent },
            { path: 'rto-list', component: RtoListComponent },
            { path: 'rto-add', component: RtoAddComponent },
            { path: 'rto-edit/:id', component: RtoEditComponent }
        ]}

  // { path: 'state-list', component: StateListComponent },
  // { path: 'state-add', component: StateAddComponent },
  // { path: 'state-edit/:id', component: StateEditComponent }
];


@NgModule({
  declarations: [
    StateListComponent,
    StateAddComponent,
    StateEditComponent,
    RtoListComponent,
    RtoAddComponent,
    RtoEditComponent,
    VcompanyListComponent,
    VcompanyAddComponent,
    VcompanyEditComponent,
    VmodelListComponent,
    VmodelAddComponent,
    VmodelEditComponent,
    VariantListComponent,
    VariantAddComponent,
    VariantEditComponent
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
export class MasterManagementModule { }

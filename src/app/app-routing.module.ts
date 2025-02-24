import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { LayoutComponent } from './layout/layout.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./usermodule/usermodule.module').then(x => x.UsermoduleModule);
const mastermodule = () => import('./master-management/master-management.module').then(x => x.MasterManagementModule);
const tppolicy = () => import('./tppolicy/tppolicy.module').then(x =>x.TppolicyModule);
const offlinepolicy = () => import('./offlinepolicy/offlinepolicy.module').then(x =>x.OfflinepolicyModule);
const cashback = () => import('./cashback/cashback.module').then(x => x.CashbackModule);
const policycopy = () => import('./policycopy/policycopy.module').then(x => x.PolicycopyModule);
const endorsement = () => import('./endorsement/endorsement.module').then(x => x.EndorsementModule);

const routes: Routes = [
    { path: '', component: LayoutComponent, canActivate: [AuthGuard] },
   // { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { 
        path: 'master', 
        loadChildren: mastermodule,
        canActivate: [AuthGuard]
    },
    { 
        path: 'usersmodule', 
        loadChildren: usersModule,
        canActivate: [AuthGuard]
    },
    { path: 'tppolicy', loadChildren: tppolicy, canActivate: [AuthGuard]},
    { path: 'offlinepolicy', loadChildren: offlinepolicy, canActivate: [AuthGuard]},
    { path: 'cashback', loadChildren: cashback, canActivate: [AuthGuard]},
    { path: 'policycopy', loadChildren: policycopy, canActivate: [AuthGuard]},
    { path: 'endorsement', loadChildren: endorsement, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
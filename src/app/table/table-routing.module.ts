import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BonusComponent } from './bonus/bonus.component';
import { PayoutComponent } from './payout/payout.component';

import { TableComponent } from './table.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '...pending', component: TableComponent },
  {path:'',component:UserComponent},
  {path:'account',component:AccountComponent},
  {path:'payout',component:PayoutComponent},
  {path:'bonus/:_id',component:BonusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }

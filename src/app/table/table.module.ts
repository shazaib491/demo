import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { PayoutComponent } from './payout/payout.component';
import { BonusComponent } from './bonus/bonus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TableComponent, UserComponent, AccountComponent, PayoutComponent, BonusComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    FormsModule
  ]
})
export class TableModule { }

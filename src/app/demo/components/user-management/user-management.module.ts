import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    TabViewModule,
    InputTextModule,
    PanelModule,
    ProgressBarModule,
    TableModule,
    DialogModule
  ]
})
export class UserManagementModule { }

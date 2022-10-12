import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfigModalComponent } from './modals/config-modal/config-modal.component';
import { UserModalComponent } from './modals/user-modal/user-modal.component';
import { AppComponent } from './app.component';

import { NzInputModule } from 'ng-zorro-antd/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ViewModalComponent } from './modals/view-modal/view-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigModalComponent,
    UserModalComponent,
    ViewModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    NzInputModule,
    DragDropModule,
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NzModalModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

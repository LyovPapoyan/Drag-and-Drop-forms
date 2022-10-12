import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ConfigModalComponent } from './modals/config-modal/config-modal.component';
import { IFormsList } from './models/forms-list';
import { UserModalComponent } from './modals/user-modal/user-modal.component';
import { IConfig } from './models/config';
import { ViewModalComponent } from './modals/view-modal/view-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public formsList: IFormsList[] = [
    {
      type: 'text',
      label: 'Text',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'number',
      label: 'Number',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'search',
      label: 'search',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'email',
      label: 'Email',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'password',
      label: 'Password',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'tel',
      label: 'Phone',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'date',
      label: 'Date',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'checkbox',
      label: 'Checkbox',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'radio',
      label: 'Radio',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'range',
      label: 'Range',
      multy: true,
      config: { label: '', name: '',  id: ''}
    },
    {
      type: 'button',
      label: 'Button',
      multy: false,
      config: { label: '', name: '',  id: ''}
    },

  ];

  public userForms: IFormsList[] = [];
  public allForms: any = [];

  public settingsForm!: FormGroup;
  public isEdit: boolean = false;

  constructor(private _modalService: NzModalService) {}

  ngOnInit(): void {}

  public drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      let data = JSON.stringify(event.previousContainer.data);
      let previousData = JSON.parse(data);
      if (!event.previousContainer.data[event.previousIndex].multy) {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      } else {
        copyArrayItem(
          previousData,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
      }
      this._openConfigModal(event.container.data[event.currentIndex], event.currentIndex);
    }
  }

  public save() {
    if (this.isEdit) {
      this.userForms = [];
      this.isEdit = false;
    } else {
      this._openUserModal();
    }
  }

  public deleteFromAllForm(index: number) {
    this.allForms.splice(index, 1);
  }

  public deleteForm(index: number) {
    this.userForms.splice(index, 1);
  }

  public editForm(value: IFormsList) {
    this._openConfigModal(value)
  }

  public edit(value: IFormsList[]) {
    this.isEdit = true;
    this.userForms = value;
  }

  public view(value: IFormsList[]) {
    this._modalService.info({
      nzTitle: 'Forms View',
      nzContent: ViewModalComponent,
      nzComponentParams: {initialValues: value},
      nzOkText: 'Ok'
    })
  }

  private _openConfigModal(userForm: IFormsList, index?: number) {
    this._modalService.create({
      nzTitle: 'Configurations',
      nzContent: ConfigModalComponent,
      nzWidth: '500px',
      nzOkText: 'Save',
      nzCancelText: 'Cancel',
      nzComponentParams: { initialValues: userForm.config },
      nzOnCancel: () => {
        if (typeof index == 'number') {
          this.userForms.splice(index, 1);
        }
      },
      nzOnOk: (instance: ConfigModalComponent) => {
        if (index) {
          this.userForms[index].config = instance.configForm.value;
        } else {
          userForm.config = instance.configForm.value
        }
      },
    });
  }

  private _openUserModal() {
    this._modalService.create({
      nzTitle: 'User form information',
      nzContent: UserModalComponent,
      nzWidth: '500px',
      nzOkText: 'Save',
      nzCancelText: 'Cancel',
      nzOnOk: (instance: UserModalComponent) => {
        if (instance.name.invalid) {
          instance.name.markAsDirty();
          instance.name.updateValueAndValidity({ onlySelf: true });
          return false;
        }
        this.allForms.push({
          name: instance.name.value,
          created_date: new Date(),
          value: [...this.userForms],
        });
        this.userForms = [];
        return true;
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IConfig } from 'src/app/models/config';

@Component({
  selector: 'app-config-modal',
  templateUrl: './config-modal.component.html',
  styleUrls: ['./config-modal.component.scss']
})
export class ConfigModalComponent implements OnInit {

  public initialValues!: IConfig;
  public configForm!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._initForm();
    this.configForm.patchValue(this.initialValues)
  }

  private _initForm() {
    this.configForm = this._fb.group({
      label: '',
      name: '',
      id: '',
    })
  }

}

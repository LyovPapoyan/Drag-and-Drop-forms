import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  public name: FormControl = new FormControl('', Validators.required);

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

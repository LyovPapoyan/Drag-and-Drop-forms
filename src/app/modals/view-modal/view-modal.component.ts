import { Component, OnInit } from '@angular/core';
import { IFormsList } from 'src/app/models/forms-list';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent implements OnInit {

  public initialValues!: IFormsList[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

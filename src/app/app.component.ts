import { Component } from '@angular/core';
import { HeadersComponent } from './modules/layout/headers/headers.component';
import { FootersComponent } from './modules/layout/footers/footers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

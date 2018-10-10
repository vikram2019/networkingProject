import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[LayoutComponent],
  declarations: [HeadersComponent, FootersComponent, LayoutComponent]
})
export class LayoutModule { }

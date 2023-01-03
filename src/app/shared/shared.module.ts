import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }

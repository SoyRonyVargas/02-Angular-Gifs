import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    SidebarComponent
  ]
})
export class GifsModule { }

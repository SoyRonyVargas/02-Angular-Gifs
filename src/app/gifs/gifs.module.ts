import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { GifsService } from './services/gifs.service';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    CardComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    GifsService
  ],
  exports: [
    HomeComponent,
    SidebarComponent
  ]
})
export class GifsModule { }

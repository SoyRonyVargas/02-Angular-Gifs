import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(
    private gifsService:GifsService
  )
  {

  }

  public selectTag( tag: string ): void {
    
    this.gifsService.searchTag(tag)

  }

  get tags()
  {
    return this.gifsService.tagsHistory;
  }
}

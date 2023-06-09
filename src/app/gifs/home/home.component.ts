import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(
    private gifsService: GifsService
  )
  {

  }
  
  @ViewChild("txtTagInput") 
  tagInput!: ElementRef<HTMLInputElement>

  searchTag(){
    
    const value = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(value);

    this.tagInput.nativeElement.value = '';
    
  }

  get gifs(): Gif[]
  {
    return this.gifsService.gifsList;
  }
}

import { Component, Input } from '@angular/core';
import { Gif } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  
  @Input()
  gifs: Gif[] = []

}

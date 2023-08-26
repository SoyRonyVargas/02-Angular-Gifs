import { Component , Input , OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  
  @Input()
  public url!: string

  @Input()
  public alt: string = "Sin alt"

  hasLoaded: boolean = false;
  
  ngOnInit(): void {
    
    if( !this.url ) throw new Error("No se implementa el url")

  }

  public async onLoad() {

    this.hasLoaded = true;

  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = []

  public gifsList: Gif[] = [];

  private API_KEY: string = "rctUpzR1JTXPL3hSXqorUlNyA0izOLQ3";

  private base_url: string = "https://api.giphy.com/v1/gifs/search"
  private LIMIT: number = 10

  constructor(
    private httpClient: HttpClient
  ) { }

  private organizeHistory( tag: string ){

    tag = tag.toLowerCase()

    if( this.tagsHistory.includes(tag) )
    {
      this._tagsHistory = this.tagsHistory.filter( tg => tg !== tag )
    }

    this._tagsHistory.unshift(tag)

    this._tagsHistory = this._tagsHistory.splice( 0 , 10 )

  }

  get tagsHistory()
  {
    const history = Array.from(this._tagsHistory);
    return  history;
  }

   searchTag( tag: string ): void {
    
    if( tag.trim().length === 0 ) return;

    this.organizeHistory(tag)

    const params = new HttpParams()
      .set('api_key' , this.API_KEY)
      .set('limit' , this.LIMIT)
      .set('q' , tag)

    const url = `${this.base_url}`

    this.httpClient.get<GIFResponse>( url, { params }).subscribe( observer => {
      
      console.log(observer.data);
      
      this.gifsList = observer.data

    })

   }

}

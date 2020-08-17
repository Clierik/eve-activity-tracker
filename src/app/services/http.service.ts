import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  data: any =  [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  constructor() { }

  hello() {
    return this.data;
  }

  // GET charakter ID
  // https://esi.evetech.net/latest/search/?categories=character&datasource=tranquility&language=en-us&search=Kovier&strict=true

  // responce
  // {
  //   "character": [
  //     90211685
  //   ]
  // }

  

}

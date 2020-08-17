import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  data: any =  [
    {
      "name": "Germany",
      "value": 8
    },
    {
      "name": "USA",
      "value": 5
    },
    {
      "name": "France",
      "value": 7
    },
    {
      "name": "1111",
      "value": 1
    },
    {
      "name": "22222",
      "value": 5
    },
    {
      "name": "3333333",
      "value": 7
    },
    {
      "name": "444",
      "value": 2
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

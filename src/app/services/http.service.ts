import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  data: any =  [
    { "name": "Germany", "value": 8 },
    { "name": "USA", "value": 5 },
    { "name": "France", "value": 7 }, 
    { "name": "1111", "value": 1 },
    { "name": "22222","value": 5 },
    { "name": "3333333", "value": 7 },
    { "name": "444", "value": 2 }
  ];

  constructor() { }

  hello() {
    return this.data;
  }

  // GET charakter ID
  // https://esi.evetech.net/latest/search/?categories=character&datasource=tranquility&language=en-us&search=Kovier&strict=true

  // search=Awesome&categories=agent,alliance,character,constellation,corporation,faction,inventory_type,region,solar_system,station"

  // responce
  // {
  //   "character": [
  //     90211685
  //   ]
  // }

  

}

// ---//---

// https://imageserver.eveonline.com/
// Documentation for getting images:
// Alliance logos: https://images.evetech.net/alliances/434243723/logo
// Character portraits: https://images.evetech.net/characters/1338057886/portrait
// Corporation logos: https://images.evetech.net/corporations/109299958/logo
// Type icons: https://images.evetech.net/types/587/icon
// Type renders: https://images.evetech.net/types/587/render
// example: https://images.evetech.net/types/587/render?size=256
// Currently the service only support a set of sizes that are powers of 2, i.e.: 32, 64, 128, 256, 512 and 1024.
// Tenant defaults to tranquility 

// ---//---

// https://docs.esi.evetech.net/docs/id_ranges.html
// esi-docs
// ID Ranges
// from         to            description
// 90,000,000	  98,000,000	  EVE characters created after 2010-11-03
// 98,000,000	  99,000,000	  EVE corporations created after 2010-11-03
// 99,000,000	  100,000,000	  EVE alliances created after 2010-11-03

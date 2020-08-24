import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  reqHeader = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public httpClient: HttpClient) { }

  hello() {
    return this.data;
  }

  public getEntityIdByName(entityName) {
    if (!environment.production) {
      return this.httpClient.get(`${environment.esiUrl}latest/search/?categories=character&datasource=tranquility&language=en-us&search=${entityName}&strict=true`, {headers: this.reqHeader});
    }
  }

  public getEntityKillLossData(entityID) {
    if (!environment.production) {
      return this.httpClient.get(`${environment.zkillUrl}characterID/${entityID}/`, {headers: this.reqHeader});
    }
  }

  public getEntityKillData(killMailId, killMailHash) {
    if (!environment.production) { // TODO change dev from below line when moving to production
      return this.httpClient.get(`${environment.esiUrl}dev/killmails/${killMailId}/${killMailHash}/?datasource=tranquility`)
    }
  }

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

// GET kill and loss mail ID's

// https://zkillboard.com/api/characterID/268946627/

// do not pass kills or losses to get both
// https://zkillboard.com/api/kills/characterID/268946627/
// https://zkillboard.com/api/losses/characterID/268946627/

// responce
// [
//   {
//     killmail_id: 84663804,
//     zkb: {
//       locationID: 40221769,
//       hash: "e2d651d6cedd78b7550b8ffead0b5c40df458ea0",
//       fittedValue: 75548029.35,
//       totalValue: 75719170.79,
//       points: 1,
//       npc: false,
//       solo: false,
//       awox: false,
//     },
//   },
//   {
//     killmail_id: 75962440,
//     zkb: {
//     ...

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

// orther api's
// CCP_IMAGE_SERVER            =   https://images.evetech.net
// Z_KILLBOARD                 =   https://zkillboard.com/api
// EVEEYE                      =   https://eveeye.com
// DOTLAN                      =   http://evemaps.dotlan.net
// ANOIK                       =   http://anoik.is
// EVE_SCOUT                   =   https://www.eve-scout.com/api
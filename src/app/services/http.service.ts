import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CharacterID } from 'src/app/interfaces';
import { CookieService } from 'ngx-cookie';

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
  private reqHeader = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private httpClient: HttpClient,
              private cookieService: CookieService) {
    this.checkSessionStatus();
  }

  private checkSessionStatus() {
    // for checking if SSO authentication is valid
    // if ( no ) { get new token from this.getToken }
  }

  public getToken() {
    const body: URLSearchParams = new URLSearchParams();
    // body.set('',);
    return this.httpClient.post(`${environment.esiUrl}`, body.toString(), {
      headers: this.reqHeader, responseType: 'text'
    });
  }

  hello() {
    return this.data;
  }

  public getEntityIdByName(entityName) {
    if (!environment.production) {
      return this.httpClient.get<CharacterID>(`${environment.esiUrl}latest/search/?categories=character&datasource=tranquility&language=en-us&search=${entityName}&strict=true`, {headers: this.reqHeader});
    }
  }

  public getEntityKillLossData(entityID) {
    if (!environment.production) {
      return 'TODO'
    }
  }

  public getEntityKillData(killMailId: number, killMailHash: string) {
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

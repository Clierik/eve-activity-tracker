import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { CharacterID } from 'src/app/interfaces'

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  searchInput: string;

  // mock data
  killmailId: number = 86039676;
  killmailHash: string = 'df92199fdbd6f9af6fe7230d23364cc2a53053a1';

  constructor(public http: HttpService) {}

  ngOnInit(): void {

  }

  private search(input) {
    if (input.keyCode === 13) {
      this.searchInput = input.target.value;
      this.http.getEntityIdByName(input.target.value).subscribe(resp => {
        console.log(resp);
        let id: CharacterID = resp;
        if (id.character.length === 1) {
          this.getKillData(id);
        }
      }, err => {
        console.log(err);
      });
    }
  }

  private getKillData(id) {
    // this.http.getEntityKillLossData(id).subscribe(resp => {
    //   console.log(resp);
    //   // DOTO next on the list to sort out SSO authentication 
    //   // gonna try avoiding zkillboard as a data source
    // }, err => {
    //   console.log(err);
    // });
  }

}



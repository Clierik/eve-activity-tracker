import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  options: object = {
    
  };
  searchInput: string;

  killmailId: number = 86039676;
  killmailHash: string = 'df92199fdbd6f9af6fe7230d23364cc2a53053a1';

  constructor() {}

  ngOnInit(): void {

  }

  search(input) {
    this.searchInput = input;
    console.log('search works');
    console.log(this.searchInput);
  }

}

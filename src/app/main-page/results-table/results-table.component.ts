import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

import { Result } from './results';
import { HitUpdaterService } from '../../services/hit-updater.service'

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  
  hitServiceSubscription!: Subscription;
  results : Result[] = [];
  hitService : HitUpdaterService;

  constructor(hitService : HitUpdaterService) {
    this.hitService = hitService;
  }

  ngOnInit() {
    
    this.hitServiceSubscription = this.hitService.hitRequestStatus$.subscribe({
      next: value => {
        if (value != null && value != undefined) {
          if (value.length >= this.results.length) {
            this.results = value;
          } else {
            this.results.push(value as unknown as Result);
          }
          console.log("table", this.results);

        }
      }
    });
    
    this.hitService.getAllHits();
  }

  refresh(){
    this.results = [];
    this.hitService.clearHits();
  }
}
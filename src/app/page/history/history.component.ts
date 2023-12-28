import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { MatchCardComponent } from '../../card-Components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  allMatch: any;
  constructor(private _api:ApiCallService)
  {

  }
  
  ngOnInit(): void {
   this._api.getAllMatches().subscribe({
    next:data=>{
        this.allMatch=data;
    }
   })    
  }

}
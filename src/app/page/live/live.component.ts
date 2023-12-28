import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { MatchCardComponent } from "../../card-Components/match-card/match-card.component";

@Component({
    selector: 'app-live',
    standalone: true,
    templateUrl: './live.component.html',
    styleUrl: './live.component.css',
    imports: [MatchCardComponent]
})
export class LiveComponent implements OnInit {
  liveMatches:any
  constructor(  private api:ApiCallService)
  {

  }
  ngOnInit(): void {
    this.loadLiveMatches();

  }


  private loadLiveMatches(): void {
  this.api.getLiveMatches().subscribe({
    next:data=>
    {
      console.log(data)
  
     this.liveMatches = data;
    },
    error:error=>
    {
      console.log(error)
    }
    
  })
  }
  

}

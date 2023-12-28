import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../service/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-points',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './points.component.html',
  styleUrl: './points.component.css'
})
export class PointsComponent implements OnInit {
  pointTable: any;
  tableHeading: any;
  constructor(private _api: ApiCallService) {
  }
  ngOnInit(): void {
    this.loadPointTable();
  }
  private loadPointTable(): void {
    this._api.getPointTables().subscribe({
      next: data => {
        this.pointTable = data;
        this.tableHeading = [...this.pointTable[0]]

      },
      error: error => {
        console.log(error)

      }


    })
  }

}

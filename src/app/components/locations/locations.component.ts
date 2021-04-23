import { DataPullService } from './../../../shared/data-pull.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  providers: [DataPullService],
})
export class LocationsComponent implements OnInit {
  restaurants = [] as any
  constructor(private _dataPullService: DataPullService) {}

  ngOnInit(): void {
    this._dataPullService.getCategories().subscribe(
      res => {
        const data = res as any;
        this.restaurants = data.response.groups[0].items;
        localStorage.setItem('restaurants', JSON.stringify(this.restaurants));
      },
      err => {
        console.log('err: ', err);
      }
    );
  }
}

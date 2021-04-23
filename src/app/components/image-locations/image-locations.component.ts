import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataPullService } from './../../../shared/data-pull.service';

@Component({
  selector: 'app-image-locations',
  templateUrl: './image-locations.component.html',
  styleUrls: ['./image-locations.component.scss'],
  providers: [DataPullService],
})
export class ImageLocationsComponent implements OnInit {
  restaurants = [] as any;
  images = [] as any;
  constructor(private _dataPullService: DataPullService, private router: Router) {}

  navigateScreen(_id: string) {
    console.log(_id)
    this.router.navigate(['image-details', _id]); (1)
  }

  ngOnInit(): void {
    const data = localStorage.getItem('restaurants');
    if(data) {
      this.restaurants = JSON.parse(data);
    }
    if (this.restaurants) {
      for (let index = 0; index < this.restaurants.length; index++) {
        this._dataPullService
          .getVenueImage(this.restaurants[index].venue.id)
          .subscribe(
            (res) => {
              const result = res as any;
              const image = result.response.photos.items[0].prefix +"300x500"+ result.response.photos.items[0].suffix;
              this.images.push({
                _id: result.response.photos.items[0].id,
                url: image
              });
            },
            (err) => {
              console.log('Error: ',err);
            }
          );
      }
    }
  }
}

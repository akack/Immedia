import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataPullService } from './../../../shared/data-pull.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss'],
  providers: [DataPullService],
})
export class ImageDetailsComponent implements OnInit {
  constructor(
    private _dataPullService: DataPullService,
    private route: ActivatedRoute
  ) {}

  image = {} as any

  ngOnInit(): void {
    const params = this.route.params as any;
    const id = params._value.id;
    this._dataPullService.getImageDetails(id).subscribe(
      (res) => {
        const data = res as any;
        this.image = data.response.photo
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataPullService {
  private credentials =
    'client_id=DSMYYGV54ZMENFMAPKJ4RAOHUFB5JRDSDRZS1WVPI3XLAUS5&client_secret=W40T2JKRLYMNI3W4ML5Q5MR2VJ3J5GKLIEYDV0CXRHZFOGNG';
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(
      'https://api.foursquare.com/v2/venues/explore/?near=Johannesburg&venuePhotos=1&section=food&client_id=DSMYYGV54ZMENFMAPKJ4RAOHUFB5JRDSDRZS1WVPI3XLAUS5&client_secret=W40T2JKRLYMNI3W4ML5Q5MR2VJ3J5GKLIEYDV0CXRHZFOGNG&v=20131124'
    );
  }

  getVenueImage(_id: string) {
    return this.http.get(
      `https://api.foursquare.com/v2/venues/${_id}/photos?client_id=DSMYYGV54ZMENFMAPKJ4RAOHUFB5JRDSDRZS1WVPI3XLAUS5&client_secret=W40T2JKRLYMNI3W4ML5Q5MR2VJ3J5GKLIEYDV0CXRHZFOGNG&v=20131124`
    );
  }

  getImageDetails(_id: string) {
    return this.http.get(
      `https://api.foursquare.com/v2/photos/${_id}?client_id=DSMYYGV54ZMENFMAPKJ4RAOHUFB5JRDSDRZS1WVPI3XLAUS5&client_secret=W40T2JKRLYMNI3W4ML5Q5MR2VJ3J5GKLIEYDV0CXRHZFOGNG&v=20131124`
    );
  }
}

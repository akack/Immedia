import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ImageLocationsComponent } from './components/image-locations/image-locations.component';
import { LocationsComponent } from './components/locations/locations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
  },
  {
    path: 'image-locations',
    component: ImageLocationsComponent
  },
  {
    path: 'image-details/:id',
    component: ImageDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

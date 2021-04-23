import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLocationsComponent } from './image-locations.component';

describe('ImageLocationsComponent', () => {
  let component: ImageLocationsComponent;
  let fixture: ComponentFixture<ImageLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

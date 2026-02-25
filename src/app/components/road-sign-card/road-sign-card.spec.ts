import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSignCard } from './road-sign-card';

describe('RoadSignCard', () => {
  let component: RoadSignCard;
  let fixture: ComponentFixture<RoadSignCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadSignCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadSignCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

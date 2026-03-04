import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadSignPanel } from './road-sign-panel';

describe('RoadSignPanel', () => {
  let component: RoadSignPanel;
  let fixture: ComponentFixture<RoadSignPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadSignPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadSignPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

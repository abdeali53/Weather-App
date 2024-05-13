import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTemperatureComponent } from './daily-temperature.component';

describe('DailyTemperatureComponent', () => {
  let component: DailyTemperatureComponent;
  let fixture: ComponentFixture<DailyTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTemperatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

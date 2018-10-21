import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumorChartComponent } from './humor-chart.component';

describe('HumorChartComponent', () => {
  let component: HumorChartComponent;
  let fixture: ComponentFixture<HumorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

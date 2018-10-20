import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantLoaderComponent } from './assistant-loader.component';

describe('AssistantLoaderComponent', () => {
  let component: AssistantLoaderComponent;
  let fixture: ComponentFixture<AssistantLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistantLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

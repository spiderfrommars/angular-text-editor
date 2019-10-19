import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsynonymsComponent } from './synonyms.component';

describe('ShowsynonymsComponent', () => {
  let component: ShowsynonymsComponent;
  let fixture: ComponentFixture<ShowsynonymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsynonymsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsynonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymItemComponent } from './synonym-item.component';

describe('SynonymItemComponent', () => {
  let component: SynonymItemComponent;
  let fixture: ComponentFixture<SynonymItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynonymItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

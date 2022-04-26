import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutteComponent } from './tutte.component';

describe('TutteComponent', () => {
  let component: TutteComponent;
  let fixture: ComponentFixture<TutteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHerosComponent } from './all-heros.component';

describe('AllHerosComponent', () => {
  let component: AllHerosComponent;
  let fixture: ComponentFixture<AllHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

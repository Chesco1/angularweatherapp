import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperDataComponent } from './upper-data.component';

describe('UpperDataComponent', () => {
  let component: UpperDataComponent;
  let fixture: ComponentFixture<UpperDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

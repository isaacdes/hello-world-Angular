import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCompoenentComponent } from './like-compoenent.component';

describe('LikeCompoenentComponent', () => {
  let component: LikeCompoenentComponent;
  let fixture: ComponentFixture<LikeCompoenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeCompoenentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeCompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

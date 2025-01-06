import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCheckBoxComponent } from './reactive-check-box.component';

describe('ReactiveCheckBoxComponent', () => {
  let component: ReactiveCheckBoxComponent;
  let fixture: ComponentFixture<ReactiveCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveCheckBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

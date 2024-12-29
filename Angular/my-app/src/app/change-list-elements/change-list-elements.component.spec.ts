import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeListElementsComponent } from './change-list-elements.component';

describe('ChangeListElementsComponent', () => {
  let component: ChangeListElementsComponent;
  let fixture: ComponentFixture<ChangeListElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeListElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeListElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

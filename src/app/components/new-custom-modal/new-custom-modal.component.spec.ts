import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomModalComponent } from './new-custom-modal.component';

describe('NewCustomModalComponent', () => {
  let component: NewCustomModalComponent;
  let fixture: ComponentFixture<NewCustomModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCustomModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

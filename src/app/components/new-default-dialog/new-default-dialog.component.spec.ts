import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDefaultDialogComponent } from './new-default-dialog.component';

describe('NewDefaultDialogComponent', () => {
  let component: NewDefaultDialogComponent;
  let fixture: ComponentFixture<NewDefaultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDefaultDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDefaultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

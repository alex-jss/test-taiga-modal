import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCustomDialogComponent } from './second-custom-dialog.component';

describe('SecondCustomDialogComponent', () => {
  let component: SecondCustomDialogComponent;
  let fixture: ComponentFixture<SecondCustomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCustomDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCustomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

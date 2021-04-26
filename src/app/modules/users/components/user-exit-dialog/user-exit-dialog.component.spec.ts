import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExitDialogComponent } from './user-exit-dialog.component';

describe('UserExitDialogComponent', () => {
  let component: UserExitDialogComponent;
  let fixture: ComponentFixture<UserExitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserExitDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

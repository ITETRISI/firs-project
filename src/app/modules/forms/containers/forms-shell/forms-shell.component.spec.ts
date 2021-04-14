import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsShellComponent } from './forms-shell.component';

describe('FormsShellComponent', () => {
  let component: FormsShellComponent;
  let fixture: ComponentFixture<FormsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

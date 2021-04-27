import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInShellComponent } from './log-in-shell.component';

describe('LogInShellComponent', () => {
  let component: LogInShellComponent;
  let fixture: ComponentFixture<LogInShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

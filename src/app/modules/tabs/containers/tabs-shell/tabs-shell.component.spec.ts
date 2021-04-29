import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsShellComponent } from './tabs-shell.component';

describe('TabsShellComponent', () => {
  let component: TabsShellComponent;
  let fixture: ComponentFixture<TabsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

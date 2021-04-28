import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedTemplateComponent } from './unauthorized-template.component';

describe('UnauthorizedTemplateComponent', () => {
  let component: UnauthorizedTemplateComponent;
  let fixture: ComponentFixture<UnauthorizedTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

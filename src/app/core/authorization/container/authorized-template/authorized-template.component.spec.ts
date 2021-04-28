import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedTemplateComponent } from './authorized-template.component';

describe('AuthorizedTemplateComponent', () => {
  let component: AuthorizedTemplateComponent;
  let fixture: ComponentFixture<AuthorizedTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

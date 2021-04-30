import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsInfoTabComponent } from './contacts-info-tab.component';

describe('ContactsInfoTabComponent', () => {
  let component: ContactsInfoTabComponent;
  let fixture: ComponentFixture<ContactsInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsInfoTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

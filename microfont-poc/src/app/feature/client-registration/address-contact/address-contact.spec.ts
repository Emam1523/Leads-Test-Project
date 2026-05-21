import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressContact } from './address-contact';

describe('AddressContact', () => {
  let component: AddressContact;
  let fixture: ComponentFixture<AddressContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

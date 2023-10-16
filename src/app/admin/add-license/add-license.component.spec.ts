import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenseComponent } from './add-license.component';

describe('AddLicenseComponent', () => {
  let component: AddLicenseComponent;
  let fixture: ComponentFixture<AddLicenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLicenseComponent]
    });
    fixture = TestBed.createComponent(AddLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

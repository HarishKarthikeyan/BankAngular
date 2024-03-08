import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBankComponent } from './other-bank.component';

describe('OtherBankComponent', () => {
  let component: OtherBankComponent;
  let fixture: ComponentFixture<OtherBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

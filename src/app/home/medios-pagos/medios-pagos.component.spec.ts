import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediosPagosComponent } from './medios-pagos.component';

describe('MediosPagosComponent', () => {
  let component: MediosPagosComponent;
  let fixture: ComponentFixture<MediosPagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediosPagosComponent]
    });
    fixture = TestBed.createComponent(MediosPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

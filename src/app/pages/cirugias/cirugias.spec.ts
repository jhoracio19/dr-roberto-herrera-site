import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cirugias } from './cirugias';

describe('Cirugias', () => {
  let component: Cirugias;
  let fixture: ComponentFixture<Cirugias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cirugias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cirugias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

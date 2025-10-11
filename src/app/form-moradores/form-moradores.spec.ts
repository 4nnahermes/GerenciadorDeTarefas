import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMoradores } from './form-moradores';

describe('FormMoradores', () => {
  let component: FormMoradores;
  let fixture: ComponentFixture<FormMoradores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMoradores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMoradores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

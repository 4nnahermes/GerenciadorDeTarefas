import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMoradores } from './tabela-moradores';

describe('TabelaMoradores', () => {
  let component: TabelaMoradores;
  let fixture: ComponentFixture<TabelaMoradores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaMoradores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaMoradores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

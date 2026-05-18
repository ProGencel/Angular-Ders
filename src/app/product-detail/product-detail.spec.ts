import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcDetail } from './product-detail';

describe('ProdutcDetail', () => {
  let component: ProdutcDetail;
  let fixture: ComponentFixture<ProdutcDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutcDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutcDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSerach } from './product-serach';

describe('ProductSerach', () => {
  let component: ProductSerach;
  let fixture: ComponentFixture<ProductSerach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSerach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSerach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

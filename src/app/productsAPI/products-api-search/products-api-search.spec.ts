import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsApiSearch } from './products-api-search';

describe('ProductsApiSearch', () => {
  let component: ProductsApiSearch;
  let fixture: ComponentFixture<ProductsApiSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsApiSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsApiSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

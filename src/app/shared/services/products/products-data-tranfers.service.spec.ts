import { TestBed } from '@angular/core/testing';

import { ProductsDataTranfersService } from './products-data-tranfers.service';

describe('ProductsDataTranfersService', () => {
  let service: ProductsDataTranfersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDataTranfersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

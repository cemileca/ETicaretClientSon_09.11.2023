import { TestBed } from '@angular/core/testing';

import { MyNgxSpinnerService } from './my-ngx-spinner.service';

describe('MyNgxSpinnerService', () => {
  let service: MyNgxSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyNgxSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

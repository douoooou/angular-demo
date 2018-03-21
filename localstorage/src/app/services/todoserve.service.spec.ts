import { TestBed, inject } from '@angular/core/testing';

import { TodoserveService } from './todoserve.service';

describe('TodoserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoserveService]
    });
  });

  it('should be created', inject([TodoserveService], (service: TodoserveService) => {
    expect(service).toBeTruthy();
  }));
});

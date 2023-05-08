/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerieService } from './serie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Serie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SerieService],
    });
  });

  it('should ...', inject([SerieService], (service: SerieService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { AnalyzerClientService } from './analyzer-client.service';

describe('AnalyzerClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyzerClientService = TestBed.get(AnalyzerClientService);
    expect(service).toBeTruthy();
  });
});

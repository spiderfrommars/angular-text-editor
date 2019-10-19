import { TestBed } from '@angular/core/testing';

import { SynonymsInteractionService } from './synonyms-interaction.service';

describe('SynonymsInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SynonymsInteractionService = TestBed.get(SynonymsInteractionService);
    expect(service).toBeTruthy();
  });
});

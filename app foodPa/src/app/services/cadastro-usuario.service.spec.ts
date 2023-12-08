import { TestBed } from '@angular/core/testing';

import { CadastroRestauranteService } from './cadastro-restaurante.service';

describe('CadastroRestauranteService', () => {
  let service: CadastroRestauranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroRestauranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

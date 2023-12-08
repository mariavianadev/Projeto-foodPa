import { TestBed } from '@angular/core/testing';

import { LoginRestauranteService } from './login-restaurante.service';

describe('LoginUsuarioService', () => {
  let service: LoginRestauranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRestauranteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

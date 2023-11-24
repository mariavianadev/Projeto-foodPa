import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestauranteUsuarioPage } from './restaurante-usuario.page';

describe('RestauranteUsuarioPage', () => {
  let component: RestauranteUsuarioPage;
  let fixture: ComponentFixture<RestauranteUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestauranteUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

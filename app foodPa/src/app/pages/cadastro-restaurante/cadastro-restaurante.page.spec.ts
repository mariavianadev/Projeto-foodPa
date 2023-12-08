import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroRestaurantePage } from './cadastro-restaurante.page';

describe('CadastroRestaurantePage', () => {
  let component: CadastroRestaurantePage;
  let fixture: ComponentFixture<CadastroRestaurantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroRestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosRestaurantePage } from './dados-restaurante.page';

describe('DadosRestaurantePage', () => {
  let component: DadosRestaurantePage;
  let fixture: ComponentFixture<DadosRestaurantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DadosRestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

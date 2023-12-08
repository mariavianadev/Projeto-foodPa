import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardapioRestaurantePage } from './cardapio-restaurante.page';

describe('CardapioRestaurantePage', () => {
  let component: CardapioRestaurantePage;
  let fixture: ComponentFixture<CardapioRestaurantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardapioRestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestauranteRestaurantePage } from './restaurante-restaurante.page';

describe('RestauranteRestaurantePage', () => {
  let component: RestauranteRestaurantePage;
  let fixture: ComponentFixture<RestauranteRestaurantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestauranteRestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioRestaurantePage } from './inicio-restaurante.page';

describe('InicioRestaurantePage', () => {
  let component: InicioRestaurantePage;
  let fixture: ComponentFixture<InicioRestaurantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioRestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

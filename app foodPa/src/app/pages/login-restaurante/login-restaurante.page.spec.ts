import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginRestaurantePage } from './login-restaurante.page';

describe('LoginRestaurantePage', () => {
  let component: LoginRestaurantePage;
  let fixture: ComponentFixture<LoginRestaurantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginRestaurantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardapioUsuarioPage } from './cardapio-usuario.page';

describe('CardapioUsuarioPage', () => {
  let component: CardapioUsuarioPage;
  let fixture: ComponentFixture<CardapioUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardapioUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

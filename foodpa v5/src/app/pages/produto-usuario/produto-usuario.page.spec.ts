import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoUsuarioPage } from './produto-usuario.page';

describe('ProdutoUsuarioPage', () => {
  let component: ProdutoUsuarioPage;
  let fixture: ComponentFixture<ProdutoUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProdutoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

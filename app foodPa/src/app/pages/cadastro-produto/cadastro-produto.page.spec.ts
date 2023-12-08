import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroProdutoPage } from './cadastro-produto.page';

describe('CadastroProdutoPage', () => {
  let component: CadastroProdutoPage;
  let fixture: ComponentFixture<CadastroProdutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosUsuarioPage } from './dados-usuario.page';

describe('DadosUsuarioPage', () => {
  let component: DadosUsuarioPage;
  let fixture: ComponentFixture<DadosUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DadosUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

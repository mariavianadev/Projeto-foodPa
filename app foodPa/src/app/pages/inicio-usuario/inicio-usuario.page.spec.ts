import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioUsuarioPage } from './inicio-usuario.page';

describe('InicioUsuarioPage', () => {
  let component: InicioUsuarioPage;
  let fixture: ComponentFixture<InicioUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

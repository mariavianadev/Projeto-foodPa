import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FotoPage } from './foto.page';

describe('FotoPage', () => {
  let component: FotoPage;
  let fixture: ComponentFixture<FotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

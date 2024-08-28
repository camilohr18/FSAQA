import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaInfoPage } from './tarea-info.page';

describe('TareaInfoPage', () => {
  let component: TareaInfoPage;
  let fixture: ComponentFixture<TareaInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

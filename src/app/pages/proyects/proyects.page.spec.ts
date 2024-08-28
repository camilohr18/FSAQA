import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectsPage } from './proyects.page';

describe('ProyectsPage', () => {
  let component: ProyectsPage;
  let fixture: ComponentFixture<ProyectsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

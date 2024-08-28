import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArchivadosPage } from './archivados.page';

describe('ArchivadosPage', () => {
  let component: ArchivadosPage;
  let fixture: ComponentFixture<ArchivadosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

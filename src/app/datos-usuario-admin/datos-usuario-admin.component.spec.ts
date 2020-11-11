import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsuarioAdminComponent } from './datos-usuario-admin.component';

describe('DatosUsuarioAdminComponent', () => {
  let component: DatosUsuarioAdminComponent;
  let fixture: ComponentFixture<DatosUsuarioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosUsuarioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUsuarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

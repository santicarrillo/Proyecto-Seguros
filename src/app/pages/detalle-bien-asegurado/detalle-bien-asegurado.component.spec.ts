import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleBienAseguradoComponent } from './detalle-bien-asegurado.component';

describe('DetalleBienAseguradoComponent', () => {
  let component: DetalleBienAseguradoComponent;
  let fixture: ComponentFixture<DetalleBienAseguradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleBienAseguradoComponent]
    });
    fixture = TestBed.createComponent(DetalleBienAseguradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

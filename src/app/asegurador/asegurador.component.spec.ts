import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradorComponent } from './asegurador.component';

describe('AseguradorComponent', () => {
  let component: AseguradorComponent;
  let fixture: ComponentFixture<AseguradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AseguradorComponent]
    });
    fixture = TestBed.createComponent(AseguradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

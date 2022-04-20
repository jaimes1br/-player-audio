import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaComponetComponent } from './prueba-componet.component';

describe('PruebaComponetComponent', () => {
  let component: PruebaComponetComponent;
  let fixture: ComponentFixture<PruebaComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaComponetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

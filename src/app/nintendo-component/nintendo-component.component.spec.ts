import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NintendoComponentComponent } from './nintendo-component.component';

describe('NintendoComponentComponent', () => {
  let component: NintendoComponentComponent;
  let fixture: ComponentFixture<NintendoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NintendoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NintendoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

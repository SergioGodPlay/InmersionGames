import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationComponentComponent } from './playstation-component.component';

describe('PlaystationComponentComponent', () => {
  let component: PlaystationComponentComponent;
  let fixture: ComponentFixture<PlaystationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaystationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

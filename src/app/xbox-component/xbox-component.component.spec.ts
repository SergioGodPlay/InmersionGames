import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxComponentComponent } from './xbox-component.component';

describe('XboxComponentComponent', () => {
  let component: XboxComponentComponent;
  let fixture: ComponentFixture<XboxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

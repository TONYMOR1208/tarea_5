import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuContraComponent } from './recu-contra.component';

describe('RecuContraComponent', () => {
  let component: RecuContraComponent;
  let fixture: ComponentFixture<RecuContraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuContraComponent]
    });
    fixture = TestBed.createComponent(RecuContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

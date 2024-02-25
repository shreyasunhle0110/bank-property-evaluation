import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PVSGridComponent } from './pvs-grid.component';

describe('PVSGridComponent', () => {
  let component: PVSGridComponent;
  let fixture: ComponentFixture<PVSGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PVSGridComponent]
    });
    fixture = TestBed.createComponent(PVSGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSectionComponent } from './upload-section.component';

describe('UploadSectionComponent', () => {
  let component: UploadSectionComponent;
  let fixture: ComponentFixture<UploadSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadSectionComponent]
    });
    fixture = TestBed.createComponent(UploadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

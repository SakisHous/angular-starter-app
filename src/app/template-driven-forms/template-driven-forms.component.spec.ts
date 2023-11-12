import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsComponent } from './template-driven-forms.component';

describe('TemplateDrivenFormsComponent', () => {
  let component: TemplateDrivenFormsComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TemplateDrivenFormsComponent]
    });
    fixture = TestBed.createComponent(TemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

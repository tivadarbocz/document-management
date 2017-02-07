/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExamplePdfComponent } from './example-pdf.component';

describe('ExamplePdfComponent', () => {
  let component:ExamplePdfComponent;
  let fixture:ComponentFixture<ExamplePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplePdfComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

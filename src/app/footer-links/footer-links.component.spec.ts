/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterLinksComponent } from './footer-links.component';

describe('FooterLinksComponent', () => {
  let component: FooterLinksComponent;
  let fixture: ComponentFixture<FooterLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsUs } from './abouts-us';

describe('AboutsUs', () => {
  let component: AboutsUs;
  let fixture: ComponentFixture<AboutsUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutsUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutsUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSiteHomeComponent } from './general-site-home.component';

describe('GeneralSiteHomeComponent', () => {
  let component: GeneralSiteHomeComponent;
  let fixture: ComponentFixture<GeneralSiteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSiteHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSiteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

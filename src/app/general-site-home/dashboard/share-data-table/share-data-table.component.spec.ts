import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDataTableComponent } from './share-data-table.component';

describe('ShareDataTableComponent', () => {
  let component: ShareDataTableComponent;
  let fixture: ComponentFixture<ShareDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

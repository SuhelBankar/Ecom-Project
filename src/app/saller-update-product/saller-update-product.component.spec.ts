import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallerUpdateProductComponent } from './saller-update-product.component';

describe('SallerUpdateProductComponent', () => {
  let component: SallerUpdateProductComponent;
  let fixture: ComponentFixture<SallerUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallerUpdateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SallerUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

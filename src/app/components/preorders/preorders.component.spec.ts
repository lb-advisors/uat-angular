import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOrdersComponent } from './preorders.component';

describe('PreOrdersComponent', () => {
  let component: PreOrdersComponent;
  let fixture: ComponentFixture<PreOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

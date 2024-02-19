import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BfkComponent } from './bfk.component';

describe('BfkComponent', () => {
  let component: BfkComponent;
  let fixture: ComponentFixture<BfkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BfkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BfkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

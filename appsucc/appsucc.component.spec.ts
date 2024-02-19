import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsuccComponent } from './appsucc.component';

describe('AppsuccComponent', () => {
  let component: AppsuccComponent;
  let fixture: ComponentFixture<AppsuccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsuccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppsuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

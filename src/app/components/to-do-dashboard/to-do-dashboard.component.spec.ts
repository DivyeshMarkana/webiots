import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDashboardComponent } from './to-do-dashboard.component';

describe('ToDoDashboardComponent', () => {
  let component: ToDoDashboardComponent;
  let fixture: ComponentFixture<ToDoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMinimalComponent } from './logo-minimal.component';

describe('LogoMinimalComponent', () => {
  let component: LogoMinimalComponent;
  let fixture: ComponentFixture<LogoMinimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoMinimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

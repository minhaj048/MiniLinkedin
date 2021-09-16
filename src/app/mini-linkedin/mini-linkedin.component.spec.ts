import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniLinkedinComponent } from './mini-linkedin.component';

describe('MiniLinkedinComponent', () => {
  let component: MiniLinkedinComponent;
  let fixture: ComponentFixture<MiniLinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniLinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniLinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

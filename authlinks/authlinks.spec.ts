import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authlinks } from './authlinks';

describe('Authlinks', () => {
  let component: Authlinks;
  let fixture: ComponentFixture<Authlinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Authlinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Authlinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

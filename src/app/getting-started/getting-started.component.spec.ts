import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GettingStartedComponent } from './getting-started.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

describe('GettingStartedComponent', () => {
  let component: GettingStartedComponent;
  let fixture: ComponentFixture<GettingStartedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingStartedComponent ],
      imports: [
        CommonModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

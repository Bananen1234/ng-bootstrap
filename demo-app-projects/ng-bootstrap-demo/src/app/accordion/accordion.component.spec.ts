import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import {SharedModule} from '../shared/shared.module';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {AccordionRoutingModule} from './accordion-routing.module';
import {CommonModule} from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ],
      imports: [
        CommonModule,
        SharedModule,
        RouterTestingModule,
        NgbAccordionModule,
        AccordionRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TooltipComponent } from './tooltip.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {NgbModalModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalRoutingModule} from '../modal/modal-routing.module';
import {TooltipRoutingModule} from './tooltip-routing.module';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipComponent ],
      imports: [
        CommonModule,
        SharedModule,
        RouterTestingModule,
        NgbTooltipModule,
        TooltipRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

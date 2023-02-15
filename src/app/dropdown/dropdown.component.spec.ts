import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {DropdownRoutingModule} from './dropdown-routing.module';
import { SelectComponent } from './select/select.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownComponent, SelectComponent ],
      imports: [
        CommonModule,
        SharedModule,
        RouterTestingModule,
        NgbDropdownModule,
        DropdownRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

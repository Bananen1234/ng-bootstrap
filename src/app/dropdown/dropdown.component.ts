import { Component } from '@angular/core';
import { MobileDetectService } from '../services/mobile-detect.service';
import {UntypedFormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  constructor(private mobileDetectService: MobileDetectService, private fb: UntypedFormBuilder) { }

  options: Array<string> = ['First', 'Second', 'Third', 'Forth']; // available options, used by dropdown and multi-select example
  selected: string; // selected option for dropdown example

  multiOptions = [{
    name: 'First', value: 'first', selected: true
  }, {
    name: 'Second', value: 'second', selected: false
  }, {
    name: 'Third', value: 'third', selected: true
  }, {
    name: 'Forth', value: 'forth', selected: true
  }, {
    name: 'Fifth', value: 'fifth', selected: true
  }];

  selectForm = this.fb.group({
    selection: ''
  });
  multiSelectForm = this.fb.group({
    multiselect: [this.multiOptions.filter(option => option.selected)]
  });

}

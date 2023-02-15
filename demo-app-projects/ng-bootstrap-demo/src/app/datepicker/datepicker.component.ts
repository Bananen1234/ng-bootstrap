import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {

  sources = {
    simple: [{
      name: 'datepicker.component.html',
      src: 'https://raw.githubusercontent.com/sebgroup/ng-bootstrap/master/src/app/datepicker/datepicker-simple/datepicker-simple.component.html?token=AAMOT4ZYRM7CHYYOB5QDVSK54TTDO',
      lang: 'markup'
    }, {
      name: 'datepicker.component.ts',
      src: 'https://raw.githubusercontent.com/sebgroup/ng-bootstrap/master/src/app/datepicker/datepicker-simple/datepicker-simple.component.ts?token=AAMOT4ZYRM7CHYYOB5QDVSK54TTDO',
      lang: 'typescript'
    }],
    input: [{
      name: 'datepicker.component.html',
      src: 'https://raw.githubusercontent.com/sebgroup/ng-bootstrap/master/src/app/datepicker/datepicker-input/datepicker-input.component.html?token=AAMOT4ZYRM7CHYYOB5QDVSK54TTDO',
      lang: 'markup'
    }, {
      name: 'datepicker.component.ts',
      src: 'https://raw.githubusercontent.com/sebgroup/ng-bootstrap/master/src/app/datepicker/datepicker-input/datepicker-input.component.ts?token=AAMOT4ZYRM7CHYYOB5QDVSK54TTDO',
      lang: 'typescript'
    }]
  }

}

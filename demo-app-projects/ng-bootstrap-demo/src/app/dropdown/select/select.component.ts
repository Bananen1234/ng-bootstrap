import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {MobileDetectService} from '../../services/mobile-detect.service';
import {ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {distinctUntilChanged, map, startWith, takeUntil, tap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectComponent
    }
  ]
})
export class SelectComponent implements ControlValueAccessor, OnInit, OnDestroy {
  get allowMultiple(): boolean {
    return this._allowMultiple;
  }

  @Input() set allowMultiple(value: boolean) {
    this._allowMultiple = value;
  }
  get options(): any[] {
    return this._options;
  }

  @Input() set options(value: any[]) {
    this._options = value;
  }
  get multiselect(): UntypedFormArray {
    return this.checkboxForm.get('multiselect') as UntypedFormArray;
  }

  checkboxForm: UntypedFormGroup;

  constructor(private mobileDetectService: MobileDetectService, private fb: UntypedFormBuilder) {
    this.checkboxForm = this.fb.group({
      selectAll: this.fb.control(!this._options.find(option => option.selected === false)),
      multiselect: this.fb.array(this._options.filter(option => option.selected)),
      selection: ''
    });
  }

  unsubscribe$ = new Subject();
  selectedOptions$: Observable<any>;
  private _allowMultiple: boolean = false;
  private _options = [];

  useContainerBody = true;

  onChange = (selection) => {};
  onTouched = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
  }

  select(option: any): void {
    this.checkboxForm.get('selection').setValue(option);
    this.onChange(option);
  }

  /**
   * toggle all - toggle all options
   */
  toggleAll(selectAll: boolean): void {
    this.multiselect.controls.forEach(control => {
      if (control.value !== selectAll) {
        control.setValue(selectAll);
      }
    });
  }

  toggleBodyLock(show: boolean, templateRef: any): void {
    if (this.mobileDetectService.isMobile()) {
      if (show) {
        disableBodyScroll(templateRef);
      } else {
        enableBodyScroll(templateRef);
      }
    }
  }

  private _addSelection(): void {
    this._options.map(option => this.multiselect.push(new UntypedFormControl(option.selected)));
  }

  toggleContainer(value: boolean): void {
    this.useContainerBody = !this.useContainerBody;
  }

  ngOnInit(): void {
    this._addSelection();
    this.selectedOptions$ = this.checkboxForm.get('multiselect')
        .valueChanges
        .pipe(
            map(option => option. // flatten
                reduce((previous, current, index) => current ? [...previous, this._options[index]] : previous, [])
            ),
            tap(selection => this.checkboxForm
                .get('selectAll')
                .setValue(selection.length === this._options.length ? 1 : 0) // use numeric boolean to differentiate against `selectAll` toggle action
            ),
            tap(options => this.onChange(options)),
            startWith(this._options.filter(options => options.selected)),
        );
    this.checkboxForm.get('selectAll').valueChanges
        .pipe(
            distinctUntilChanged(),
            takeUntil(this.unsubscribe$)
        ).subscribe(selectAll => {
          // only toggle all if `selectAll` is a boolean i.e. user checked toggle all checkbox
          if (selectAll === true || selectAll === false)  {
            this.toggleAll(selectAll);
          }
        });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-stars',
  templateUrl: './stars.components.html',
  styleUrls: ['./stars.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:
    [
      {
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: StarsComponent
      }
    ]
})
export class StarsComponent implements OnInit, ControlValueAccessor {
  @Input() starCount: number[] | undefined;
  selected: number | undefined;
  private onChange: Function | undefined;
  private onTouched: Function | undefined;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  selectStar(star: number) {
    this.selected = star;
    // @ts-ignore
    this.onChange(star);
  }

  isSelected(star: number): boolean {
    // @ts-ignore
    return star <= this.selected;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  writeValue(count: number): void {
    this.selected = count;
    this.cd.markForCheck();
  }

}

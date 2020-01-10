import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GoDatepickerComponent } from '../../../../../go-lib/src/lib/components/go-datepicker/go-datepicker.component';

@Component({
  selector: 'app-test-date-picker',
  templateUrl: './test-date-picker.component.html',
  styleUrls: ['./test-date-picker.component.scss']
})
export class TestDatePickerComponent implements OnInit {
  @ViewChild('datePickerOne') fc1: GoDatepickerComponent;
  @ViewChild('datePickerTwo') fc2: GoDatepickerComponent;

  formControl1: FormControl = new FormControl('2020-01-01');

  formControl2: FormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {}
}

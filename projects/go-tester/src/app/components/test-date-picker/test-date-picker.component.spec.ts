import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { GoDatepickerModule } from '../../../../../go-lib/src/lib/components/go-datepicker/go-datepicker.module';

import { TestDatePickerComponent } from './test-date-picker.component';

fdescribe('TestDatePickerComponent', () => {
  let component: TestDatePickerComponent;
  let fixture: ComponentFixture<TestDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestDatePickerComponent],
      imports: [GoDatepickerModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('FormControlOne', () => {
    it('should contain the initial value', () => {
      expect(component.fc1.selectedDate).toEqual('1/1/2020');
    });
  });

  describe('FormControlTwo', () => {
    it('should detect that the value was changed', (done: DoneFn) => {
      setTimeout(() => {
        component.formControl2.setValue('2020-01-01');
        expect(component.fc2.selectedDate).toEqual('1/1/2020');
        done();
      }, 100);
    });
  });
});

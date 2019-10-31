import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'go-select',
  templateUrl: './go-select.component.html',
  styleUrls: ['./go-select.component.scss']
})
export class GoSelectComponent implements OnInit {
  id: string;

  @Input() appendTo: string;
  @Input() bindLabel: string;
  @Input() bindValue: string;
  @Input() control: FormControl;
  @Input() hints: string[];
  @Input() items: any[];
  @Input() key: string;
  @Input() label: string;
  @Input() loading: boolean = false;
  @Input() multiple: boolean = false;
  @Input() placeholder: string;
  @Input() typeahead?: Subject<string>;
  @Input() theme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    this.id = this.key || this.generateId(this.label);
  }

  private generateId(label: string): string {
    const labelText: string = label || 'select';
    const idArray: Array<string> = labelText.split(' ');

    // NOTE: There is only a one in a million chance that this number is not unique.
    idArray.push(String(Math.round(Math.random() * 1000000)));

    return idArray.join('-');
  }
}
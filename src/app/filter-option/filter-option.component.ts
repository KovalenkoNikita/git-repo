import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-option',
  templateUrl: './filter-option.component.html',
  styleUrls: ['./filter-option.component.css']
})
export class FilterOptionComponent implements OnInit {
  public id: string;
  @Output() changeCheckbox: EventEmitter<any> = new EventEmitter();
  @Input() option: string;
  @Input() title: string;

  ngOnInit() {
    this.id = this.title + '_' + this.option;
  }
  public onMyCheckBox() {
    this.changeCheckbox.emit(this.option);
  }
}

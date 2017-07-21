import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MyFilter } from '../myFilter';


@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent {

  @Input() item: MyFilter;
  @Output() changeCheckList: EventEmitter<any> = new EventEmitter();
  currFilter: any = {
    title: '',
    options: []
  };
  changeFilter(option: string) {
    this.currFilter.title = this.item.title;
    let listOptions = this.currFilter.options;
    let position = listOptions.indexOf(option);
    if (position === -1) {
      this.currFilter.options.push(option);
    } else {
      this.currFilter.options.splice(position, 1);
    }
    this.changeCheckList.emit(this.currFilter);
  }
}

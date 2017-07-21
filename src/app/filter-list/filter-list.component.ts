import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { MyFilter } from '../myFilter';
import { HttpService } from '../http.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  @Output() getFilter: EventEmitter<any> = new EventEmitter();
  private allFilterList: MyFilter[] = [];
  private currFilterList: any = {};

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.reload();
    AppComponent.onRouteClick.subscribe(() => {
      this.reload();
    });
  }
  public reload() {
    this.currFilterList = {};
    this.getFilter.emit(this.currFilterList);
    this.httpService.getFilters()
      .subscribe((resp: any) => {
        this.allFilterList = resp.json()["data"];
      });
  }
  public changeFilterList(filter) {
    this.currFilterList[filter.title] = filter.options;
    if (!filter.options.length) {
      delete this.currFilterList[filter.title];
    }
    this.getFilter.emit(this.currFilterList);
  }
}

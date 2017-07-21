import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { HttpService } from '../http.service';
import { Route } from '../route';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  @Input() gender: string;
  @Output() route: EventEmitter<any> = new EventEmitter();
  private currRouteList: Route[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getRoutes()
      .subscribe((resp: any) => {
        let routeList = resp.json();
        this.currRouteList = routeList[this.gender];
      });
  }
  public sendClickUp() {
    this.route.emit();
  }
}

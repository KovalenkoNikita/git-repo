import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Route } from '../route';

@Component({
  selector: 'app-route-item',
  templateUrl: './route-item.component.html',
  styleUrls: ['./route-item.component.css']
})
export class RouteItemComponent implements OnInit {

  @Input() link: Route;
  @Input() gender: string;
  @Output() route: EventEmitter<any> = new EventEmitter();
  private routerLink: any[] = [];

  ngOnInit() {
    this.routerLink.push(this.gender);
    this.routerLink.push(this.link.namePage);
  }
  public sendClickUp() {
    this.route.emit();
  }
}

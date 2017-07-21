import {Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { HttpService } from '../http.service';
import { Product } from '../product';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  private currFilter: any;
  private gender: string;
  private namePage: string;
  private filteredProducts: Product[] = [];
  private subscription: Subscription;

  constructor(private httpService: HttpService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.reload();
    AppComponent.onRouteClick.subscribe(() => {
      this.reload();
    });
  }
  public reload() {
    this.filteredProducts = [];
    this.subscription = this.activateRoute.params.subscribe((params): any => {
      this.gender = params['gender'];
      this.namePage = params['namePage'];
    });
    this.httpService.getData()
      .subscribe((resp: any) => {
        let productsList = resp.json()["data"];
        let self = this;
        this.filteredProducts = productsList.filter(function (currItem) {
          return currItem.filters.gender === self.gender;
        });
        console.log(this.currFilter);
        for (let option in this.currFilter) {
          this.filteredProducts = this.filteredProducts.filter(function (currItem) {
            let newOption = option.toLowerCase();
            let listOptions = self.currFilter[option];
            let arrayOptions = listOptions.join();
            if (arrayOptions.indexOf(currItem.filters[newOption]) !== -1) {
              return true;
            }
            if (newOption === 'size') {
              console.log('1');
              for (let key in currItem.filters[newOption]) {
                if (arrayOptions.indexOf(currItem.filters[newOption][key]) !== -1) {
                  return true;
                }
              }
            }
          return false;
        });
      }
      });
  }
  public getCurrFilter(filter) {
    this.currFilter = filter;
    this.reload();
  }
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

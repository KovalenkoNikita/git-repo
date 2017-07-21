import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from './translate/translate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {  } from '@'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private currLanguage: string;
  private openLangMenu: boolean = false;
  private men: string = 'men';
  private women: string = 'women';
  public translatedText: string;
  public supportedLanguages: any[];
  private textSearch: string;
  private subscription: Subscription;
  static onRouteClick = new Subject();

  constructor(private _translate: TranslateService, private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Русский', value: 'ru' }
    ];
    this.subscription = this.activateRoute.params.subscribe((params): any => {
      console.log(params);
    });
    this.currLanguage = ( window.localStorage.getItem('language') ) ? window.localStorage.getItem('language') : 'en';
    // set current language
    this.selectLang( this.currLanguage );
    this.textSearch = this.refreshText('Search ASOS');
  }
  public toggle() {
    this.openLangMenu = !this.openLangMenu;
  }
  public changeLanguage(lang: string) {
    if (lang !== 'en') {
      window.localStorage.setItem('language', lang);
    } else {
      window.localStorage.removeItem('language');
    }
    this.currLanguage = ( window.localStorage.getItem('language') ) ? window.localStorage.getItem('language') : 'en';
    this.openLangMenu = false;
    this.selectLang(this.currLanguage);
    this.textSearch = this.refreshText('Search ASOS');
  }
  public isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  public selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
  }

  public refreshText(text: string) {
    // refresh translation when language change
    return this._translate.instant(text);
  }

  public routeClick() {
    AppComponent.onRouteClick.next();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

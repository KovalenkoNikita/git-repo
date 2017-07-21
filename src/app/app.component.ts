import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from './translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private currLanguage: string = 'en';
  private openLangMenu: boolean = false;
  private men: string = 'men';
  private women: string = 'women';
  public translatedText: string;
  public supportedLanguages: any[];
  static onRouteClick = new Subject();

  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Русский', value: 'ru' }
    ];

    // set current langage
    this.currLanguage = 'ru';
    this.selectLang(this.currLanguage);
  }
  toggle() {
    this.openLangMenu = !this.openLangMenu;
  }
  changeLanguage(lang: string) {
    console.log(lang);
    this.currLanguage = lang;
    this.openLangMenu = false;
  }
  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('hello world');
  }

  public routeClick() {
    AppComponent.onRouteClick.next();
  }
}

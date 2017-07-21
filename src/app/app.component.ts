import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { TranslateService } from './translate/translate.service';
import { HttpService } from './http.service';
import { Subscription } from 'rxjs/Subscription';

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
  public supportedLanguages: any[];
  private textSearch: string;
  private subscription: Subscription;
  private footerLinks: any[];
  static onRouteClick = new Subject();

  constructor(private _translate: TranslateService, private httpService: HttpService) {}

  ngOnInit() {
   this.getFooterLinks();

    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Русский', value: 'ru' }
    ];
    this.setCurrlanguage( ( window.localStorage.getItem('language') ) ? window.localStorage.getItem('language') : 'en' );
  }

  public getFooterLinks() {
    this.httpService.getFooterLinks()
      .subscribe((resp: any) => {
        this.footerLinks = resp.json()["data"];
        console.log(this.footerLinks);
      });
  }

  public setCurrlanguage(lang: string) {
    this.currLanguage = lang;
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
  /*
  public isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }*/

  public selectLang(lang: string) {
    this._translate.use(lang);
  }

  public refreshText(text: string) {
    return this._translate.instant(text);
  }

  public routeClick() {
    AppComponent.onRouteClick.next();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

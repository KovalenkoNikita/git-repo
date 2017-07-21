import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FilterItemComponent } from './filter-item/filter-item.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FilterOptionComponent } from './filter-option/filter-option.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RouteListComponent } from './route-list/route-list.component';
import { RouteItemComponent } from './route-item/route-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';

import { TRANSLATION_PROVIDERS } from './translate/translation';
import { TranslatePipe } from './translate/translate.pipe';
import { TranslateService } from './translate/translate.service';

import { HttpService } from './http.service';

import { appRoutes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    FilterItemComponent,
    FilterListComponent,
    FilterOptionComponent,
    ProductPageComponent,
    RouteListComponent,
    RouteItemComponent,
    HomePageComponent,
    NotFoundPageComponent,
    TranslatePipe,
    FooterLinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ HttpService, TRANSLATION_PROVIDERS, TranslateService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

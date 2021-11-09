import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule }  from "@angular/common/http";
import { ListDaysWeatherComponent } from './components/list-days-weather/list-days-weather.component';
import { HighlightDayComponent } from './components/highlight-day/highlight-day.component';
import { HighlightComponent } from './components/highlight/highlight.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ListDaysWeatherComponent,
    HighlightDayComponent,
    HighlightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

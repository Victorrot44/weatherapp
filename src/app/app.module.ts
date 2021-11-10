import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS }  from "@angular/common/http";

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListDaysWeatherComponent } from './components/list-days-weather/list-days-weather.component';
import { HighlightDayComponent } from './components/highlight-day/highlight-day.component';
import { HighlightComponent } from './components/highlight/highlight.component';

import { SpinnerModule } from './components/spinner/spinner.module';
import { SpinnerInterceptor } from './components/spinner/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ListDaysWeatherComponent,
    HighlightDayComponent,
    HighlightComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SpinnerModule,
  ],
  providers: [
    // SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

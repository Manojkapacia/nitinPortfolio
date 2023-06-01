import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { ContactComponent } from './view/contact/contact.component';
import { ServicesComponent } from './view/services/services.component';
import { PortfolioComponent } from './view/portfolio/portfolio.component';
import { ResumeComponent } from './view/resume/resume.component';
import { AboutComponent } from './view/about/about.component';
import { ProgressbarModule,ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { HomeComponent } from './view/home/home.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { CountUpDirective } from './count-up.directive';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    PortfolioComponent,
    ResumeComponent,
    AboutComponent,
    HomeComponent,
    CountUpDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ProgressbarModule,
    NgxTypedJsModule,
    NgChartsModule
  ],
  providers: [
    ProgressbarConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

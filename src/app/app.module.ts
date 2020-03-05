import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/header/header.component';
import { BannerComponent } from './landing/banner/banner.component';
import { InfoTournamentComponent } from './landing/info-tournament/info-tournament.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './landing/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    InfoTournamentComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

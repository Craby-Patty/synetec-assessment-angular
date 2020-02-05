import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CitiesListComponent } from './components/cities/cities-list.component';
import { BaseService } from './services/base.service';
import { CitiesEndpoint } from './services/cities/cities-endpoint.service';
import { CitiesService } from './services/cities/cities.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [
    BaseService,
    CitiesEndpoint
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

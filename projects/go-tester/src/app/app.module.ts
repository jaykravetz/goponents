import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.router';
import { DummyComponent } from './dummy.component'

import {
  GoButtonComponent,
  GoButtonModule,
  GoIconComponent,
  GoIconButtonModule,
  GoIconModule,
  GoLoaderModule,
  GoModalModule,
  GoOffCanvasModule,
  GoSearchModule,
  GoSideNavModule,
  GoTableModule,
  GoToasterModule,
  GoToastModule,
  GoModalService
} from '../../../go-lib/src/public_api';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SearchTestComponent } from './components/search-test.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    SearchTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GoButtonModule,
    GoIconModule,
    GoIconButtonModule,
    GoLoaderModule,
    GoModalModule,
    GoOffCanvasModule,
    GoSearchModule,
    GoSideNavModule,
    GoTableModule,
    GoToastModule,
    GoToasterModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    GoModalService
  ],
  entryComponents: [
    GoButtonComponent,
    GoIconComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

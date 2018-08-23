import { LoginGuard } from './guards/login.guard';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './services/auth.service';
import { InterceptService } from './services/intercept.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { SecurityService } from './shared/services/security.service';
import { MzInputModule, MzModalModule, MzToastModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MzModalModule,
    MzInputModule,
    MzToastModule
  ],
  providers: [
    AuthGuard,
    LoginGuard,
    AuthService,
    InterceptService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }, SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule {}

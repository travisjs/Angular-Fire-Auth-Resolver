import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { MaterialModule } from '@angular/material';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './login/create.component';
import { AppResolver } from './app-resolver.service';
import 'hammerjs';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyB_VirqQgsDRekn0qjzJvsEfSaRm1MdT2o',
  authDomain: 'fir-1-dd57c.firebaseapp.com',
  databaseURL: 'https://fir-1-dd57c.firebaseio.com',
  projectId: "fir-1-dd57c",
  storageBucket: 'fir-1-dd57c.appspot.com',
  messagingSenderId: '107791740117'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [AppResolver, AngularFireAuth]
})
export class AppModule { }

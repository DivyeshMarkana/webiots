import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ToDoDashboardComponent } from './components/to-do-dashboard/to-do-dashboard.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

const firebaseConfig = {
  apiKey: "AIzaSyBq5q6Jbitma6F7xpnv8rOJfLpmMHyntrQ",
  authDomain: "webiots-50364.firebaseapp.com",
  databaseURL: "https://webiots-50364-default-rtdb.firebaseio.com",
  projectId: "webiots-50364",
  storageBucket: "webiots-50364.appspot.com",
  messagingSenderId: "727211170629",
  appId: "1:727211170629:web:975023bf36ed970ee37c2c"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToDoDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

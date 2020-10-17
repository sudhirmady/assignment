import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FiboComponent } from './fibo/fibo.component';
import { DelayComponent } from './delay/delay.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    FiboComponent,
    DelayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

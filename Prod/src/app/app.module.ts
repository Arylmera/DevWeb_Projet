import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { FourthOFourthComponent } from './fourth-o-fourth/fourth-o-fourth.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  { path: '', component: FourthOFourthComponent },
  { path: 'not-found', component: FourthOFourthComponent },
  { path: '**', component: FourthOFourthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FourthOFourthComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

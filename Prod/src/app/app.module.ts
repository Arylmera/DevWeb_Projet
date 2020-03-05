import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { FourthOFourthComponent } from './components/fourth-o-fourth/fourth-o-fourth.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { PointListComponent } from './components/point-list/point-list.component';
import { PointInfoComponent } from './components/point-info/point-info.component';
import {MapComponent} from "./components/map/map.component";
import {PointsService} from "./services/points/points.service";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'newAccount', component: NewAccountComponent},
  { path: 'pointList', component: PointListComponent},
  { path: 'pointInfo/:id', component: PointInfoComponent},
  { path: 'map', component: MapComponent},
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourthOFourthComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FourthOFourthComponent,
    LoginComponent,
    NewAccountComponent,
    PointListComponent,
    PointInfoComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    PointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

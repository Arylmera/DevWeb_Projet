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
import {MapComponent} from './components/map/map.component';
import {PointsService} from './services/points/points.service';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CamComponent } from './components/cam/cam.component';
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import { ParcoursSelectComponent } from './components/parcours-select/parcours-select.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ScrollingModule} from "@angular/cdk/scrolling";
import { PointSheetComponent } from './components/point-sheet/point-sheet.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { AdminComponent } from './components/admin/admin.component';
import {DeferLoadModule} from "@trademe/ng-defer-load";
import {MatTableModule} from "@angular/material/table";
import { AdminDialogComponent } from './components/admin-dialog/admin-dialog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'newAccount', component: NewAccountComponent},
  { path: 'pointList', component: PointListComponent},
  { path: 'pointInfo/:id', component: PointInfoComponent},
  { path: 'parcours-select', component: ParcoursSelectComponent},
  { path: 'map', component: MapComponent},
  { path: 'map/:id', component: MapComponent},
  { path: '', component: LoginComponent },
  { path: 'not-found', component: FourthOFourthComponent },
  { path: 'cam', component: CamComponent},
  { path: 'admin', component: AdminComponent },
  //{ path: '**', redirectTo: 'not-found' }
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
    CamComponent,
    ParcoursSelectComponent,
    PointSheetComponent,
    AdminComponent,
    AdminDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    FormsModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FontAwesomeModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    ZXingScannerModule,
    MatRadioModule,
    MatCardModule,
    MatSlideToggleModule,
    ScrollingModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    DeferLoadModule,
    MatTableModule,
  ],
  entryComponents: [
    PointSheetComponent,
    MapComponent
  ],
  providers: [
    PointsService,
    MapComponent
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}

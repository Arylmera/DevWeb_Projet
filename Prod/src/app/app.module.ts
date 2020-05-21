import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { FourthOFourthComponent } from './components/fourth-o-fourth/fourth-o-fourth.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { PointListComponent } from './components/point-list/point-list.component';
import { PointInfoComponent } from './components/point-info/point-info.component';
import {MapComponent} from './components/map/map.component';
import {PointsService} from './services/points/points.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CamComponent } from './components/cam/cam.component';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import { ParcoursSelectComponent } from './components/parcours-select/parcours-select.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { PointSheetComponent } from './components/point-sheet/point-sheet.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AdminComponent } from './components/admin/admin.component';
import {DeferLoadModule} from '@trademe/ng-defer-load';
import {MatTableModule} from '@angular/material/table';
import { AdminDialogComponent } from './components/admin-dialog/admin-dialog.component';
import { AlertComponent } from './components/alert/alert.component';
import {AdminGuard} from './helpers/admin.guard';
import {AuthGuard} from './helpers/auth.guard';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {NotfoundInterceptor} from './helpers/notfound.interceptor';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'newAccount', component: NewAccountComponent},
  { path: 'pointList', component: PointListComponent, canActivate: [AuthGuard]},
  { path: 'pointInfo/:id', component: PointInfoComponent,  canActivate: [AuthGuard]},
  { path: 'parcours-select', component: ParcoursSelectComponent,  canActivate: [AuthGuard]},
  { path: 'map', component: MapComponent, canActivate: [AuthGuard]},
  { path: 'map/:id', component: MapComponent,  canActivate: [AuthGuard]},
  { path: '', component: HomeComponent,  canActivate: [AuthGuard]},
  { path: 'not-found', component: FourthOFourthComponent },
  { path: 'cam', component: CamComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  { path: '**', redirectTo: '' }
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
    AdminDialogComponent,
    AlertComponent
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
    ReactiveFormsModule,
  ],
  entryComponents: [
    PointSheetComponent,
    MapComponent,
  ],
  providers: [
    PointsService,
    MapComponent,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotfoundInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}

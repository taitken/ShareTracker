import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './general-site-home/dashboard/dashboard.component';
import { GeneralSiteHomeComponent } from './general-site-home/general-site-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareDataTableComponent } from './general-site-home/dashboard/share-data-table/share-data-table.component';
import { MatModule } from './material/mat.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GeneralSiteHomeComponent,
    ShareDataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

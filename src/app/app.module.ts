import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoutingModuleModule } from './routing-module/routing-module.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { KnobModule } from 'primeng/knob';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ToastModule } from 'primeng/toast';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModuleModule,
    NgbModule,
    AccordionModule,
    KnobModule,
    CardModule,
    ChartModule,
    ToastModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DashboardComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

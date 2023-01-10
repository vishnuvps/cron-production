import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomePageComponent } from '../home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tryit', component: DashboardComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModuleModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './components/pages/page-one/page-one.component';
import { PageTwoComponent } from './components/pages/page-two/page-two.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'page1'},
  {path: 'page1', component: PageOneComponent},
  {path: 'page2', component: PageTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'yscripter', pathMatch: 'full'},
  { path: 'yscripter', loadChildren: () => import('./generate-script/generate-script.module').then(m => m.GenerateScriptModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

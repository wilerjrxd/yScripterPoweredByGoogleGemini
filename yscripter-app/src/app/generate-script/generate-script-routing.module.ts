import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateScriptComponent } from './generate-script.component';

const routes: Routes = [{ path: '', component: GenerateScriptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateScriptRoutingModule { }

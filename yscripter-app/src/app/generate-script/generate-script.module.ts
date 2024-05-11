import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerateScriptRoutingModule } from './generate-script-routing.module';
import { GenerateScriptComponent } from './generate-script.component';

import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

const primeng = [
  ButtonModule,
  FileUploadModule,
  ProgressSpinnerModule
]

@NgModule({
  declarations: [
    GenerateScriptComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenerateScriptRoutingModule,
    FloatLabelModule,
    InputNumberModule,
    InputTextareaModule,
    DropdownModule,
    ...primeng
  ]
})
export class GenerateScriptModule { }

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-generate-script',
  templateUrl: './generate-script.component.html',
  styleUrl: './generate-script.component.scss',
  providers: [MessageService]
})
export class GenerateScriptComponent {
  uploadedFile: any[] = [];
  apiResult: any = null;
  loading: boolean = false;

  duration: any = 1;
  theme: any;
  style: any;
  reutilize: any;
  details: any;

  formData = new FormData();

  estilos: Array<string> = ["Preciso", "Balanceado", "Criativo"];

  constructor(private http: HttpClient, private messageService: MessageService) { }

  onClick() {
    this.formData.append('reutilize', this.reutilize);
    this.formData.append('details', this.details);
    if (this.duration) {
      this.formData.append('duration', this.duration.toString());
    }

    if (!this.theme) {
      this.theme = "Tema aleatório"
    }
    this.formData.append('theme', this.theme);

    if (!this.style) {
      this.style = "0.5"
    }
    this.formData.append('style', this.style);

    this.loading = true;
    this.http.post('http://localhost:5000/generate-script', this.formData).subscribe({
      next: (response) => {
        this.apiResult = response;
        this.uploadedFile = [];
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        this.messageService.add({ severity: 'error', summary: 'Upload Error', detail: error.message });
      }
    });
  }

  onSelect(event: any) {
    this.apiResult = null;
    for (let file of (event as UploadEvent).files) {
      this.formData.append("file[]", file);
      this.uploadedFile.push(file);
    }
  }

  onUpload(event: any) {
    for (let file of (event as UploadEvent).files) {
      this.formData.append("file[]", file);
      this.uploadedFile.push(file);
    }
  }

  onCancel() {
    this.loading = false;
  }
}

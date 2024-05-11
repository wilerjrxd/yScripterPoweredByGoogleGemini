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

  estilos: Array<string> = ["Preciso", "Balanceado", "Criativo"];

  constructor(private http: HttpClient, private messageService: MessageService) { }

  onUpload(event: any) {

  }

  onClick() {
    const formData = new FormData();
    formData.append('theme', this.theme);
    formData.append('style', this.style);
    formData.append('reutilize', this.reutilize);
    formData.append('details', this.details);
    if (this.duration) {
      formData.append('duration', this.duration.toString());
    }

    if (this.theme == null || this.theme == undefined) {
      this.theme = "Tema aleatório"
    }

    if (this.style == null || this.style == undefined) {
      this.style = "0.5"
    }
    

    this.loading = true;
    this.http.post('http://localhost:5000/generate-script', formData).subscribe({
      next: (response) => {
        this.apiResult = response;
        this.uploadedFile = [];
        this.loading = false;
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'Upload Error', detail: error.message });
      }
    });
  }

  onSelect() {
    this.apiResult = null;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../service';

@Component({
  selector: 'app-upload-section',
  templateUrl: './upload-section.component.html',
  styleUrls: ['./upload-section.component.css']
})
export class UploadSectionComponent implements OnInit {
  fileUploadForm !: FormGroup;
  rowData: any[] = [{ documentType: 'Title Deed', fileName: 'document1.pdf' },
  { documentType: 'National Identity Card', fileName: 'document2.pdf' }
    // Add more rows as needed
  ];
  columnDefs: any[] = [
    { headerName: 'Document Type', field: 'documentType' },
    { headerName: 'File Name', field: 'fileName' },
    { headerName: 'Action', cellRenderer: 'actionRenderer' }
  ];
fileName: any;
  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.fileUploadForm = this.fb.group({
      documentType : ['', Validators.required],
      file :['',Validators.required]
    });
    this.fileUploadForm.valueChanges.subscribe((data) => {
      this.messageService.sendMessage('FileUpload', data);
    });

  }

  onFileSelected(event: any) {
    // Handle file selection logic here
    const file: File = event.target.files[0];
    console.log('Selected file:', file);
  }

  uploadFile() {
    // Handle file upload logic here
    console.log('Uploading file...');
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from '../service';
import { MessageInfo } from '../interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component';
import { ReferenceService } from '../service/ReferenceService';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  @ViewChild('toast') toast !: ToastNotificationComponent;
  private borrowerFormData: any;
  private commentData: any;
  private fileUploadData: any;
  propertyDetails!: FormGroup;

  constructor(private messageService: MessageService, private fb: FormBuilder, private http: HttpClient, private referenceService: ReferenceService) {
    this.borrowerFormData = null;
    this.commentData = null;
    this.fileUploadData = null;
    this.init();
  }

  ngOnInit(): void {
    this.propertyDetails = this.fb.group({
      initiatorName: ['Shreyas', Validators.required],
      initiatorBusinessUnit: ['123123123', Validators.required],
      initiatorContactNo: ['', Validators.required],
      typeOfFacility: ['revolving', Validators.required], // Select the first option by default
      category: ['25000', Validators.required], // Select the first option by default
      purpose: ['1', Validators.required], // Select the first option by default
      term: ['', [Validators.required, Validators.min(1)]], // Add minimum value validation
      ccy: ['MUR', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]], // Add minimum value validation
      housingLoan: ['', Validators.required],
      fosReference: [this.referenceService.generateReference(), Validators.required],
      typeOfEvaluation: ['new', Validators.required]
    });
  }

  submitForm() {
      const requestBody = {
        mainBorrower: this.borrowerFormData.data.mainBorrower,
        jointBorrowers: this.borrowerFormData.data.jointBorrowers,
        initiatorName: this.propertyDetails.value.initiatorName,
        businessUnit: this.propertyDetails.value.initiatorBusinessUnit,
        contactNumber: this.propertyDetails.value.initiatorContactNo,
        facilityType: this.propertyDetails.value.typeOfFacility,
        facilityCategory: this.propertyDetails.value.category,
        facilityPurpose: this.propertyDetails.value.purpose,
        facilityTerms: this.propertyDetails.value.term,
        ccy: this.propertyDetails.value.ccy,
        amount: this.propertyDetails.value.amount,
        isHousingLoan: this.propertyDetails.value.housingLoan,
        fosReference: this.propertyDetails.value.fosReference,
        typeOfEvaluation: this.propertyDetails.value.typeOfEvaluation,
        comment: this.commentData.data.comment,
        uploadedFile: this.fileUploadData.data.file,
        uploadedFileType: this.fileUploadData.data.documentType
      };

      console.log(requestBody);

    this.http.post('http://localhost:9091/startworkflow', requestBody).subscribe(
      (response) => {
        console.log('API Response:', response);
        this.showToast('Entry saved successfully');
        // Handle response as needed
      },
      (error) => {
        console.error('API Error:', error);
        this.showToast('Failed to save entry. Please try again later.', 'error');
        // Handle error as needed
      }
    );
  }
  showToast(message: string, type: string = 'success') {
    this.toast.message = message;
    this.toast.type = type;
    this.toast.show();
  }

  private init() {
    this.messageService.getMessage().subscribe((data: MessageInfo | null) => {
      console.log(new Date(), data);
      if (data?.type === 'BorrowerForm') {
        // replace new value...
        this.borrowerFormData = data;
      } else if (data?.type === 'Comments') {
        this.commentData = data;
      } else if (data?.type === 'FileUpload') {
        this.fileUploadData = data;
      }

    });
  }
}

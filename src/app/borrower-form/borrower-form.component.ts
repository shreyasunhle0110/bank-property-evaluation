import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from '../service';

@Component({
  selector: 'app-borrower-form',
  templateUrl: './borrower-form.component.html',
  styleUrls: ['./borrower-form.component.css']
})
export class BorrowerFormComponent implements OnInit {
  borrowerForm!: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.borrowerForm = this.fb.group({
      mainBorrower: this.createBorrowerFormGroup(),
      jointBorrowers: this.fb.array([])
    });
    this.borrowerForm.valueChanges.subscribe((data) => {
      this.messageService.sendMessage('BorrowerForm', data);
    });
  }

  createBorrowerFormGroup(): FormGroup {
    return this.fb.group({
      customerNumber: ['', Validators.required],
      customerName: ['', Validators.required],
      contactNumber: ['', Validators.required, Validators.pattern('^[0-9]+$')],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  get jointBorrowers() {
    return this.borrowerForm.get('jointBorrowers') as FormArray;
  }

  addJointBorrower() {
    this.jointBorrowers.push(this.createBorrowerFormGroup());
  }

  removeJointBorrower(index: number) {
    this.jointBorrowers.removeAt(index);
  }

  onSubmit() {
    if (this.borrowerForm.valid) {
      console.log(this.borrowerForm.value);
      // Perform your form submission logic here
    }
  }

  // Custom validator for Contact Number
  contactNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^[0-9]{10}$/.test(control.value);
    return valid ? null : { invalidContactNumber: { value: control.value } };
  }

  // Custom validator for Customer Number
  customerNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^[A-Za-z0-9]+$/.test(control.value);
    return valid ? null : { invalidCustomerNumber: { value: control.value } };
  }
}

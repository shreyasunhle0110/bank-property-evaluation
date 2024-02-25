import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(): void {
    const loginData = { username: this.loginForm.value.email, password: this.loginForm.value.password};
    this.http.post<any>('http://localhost:9090/login', loginData)
      .pipe(
        catchError(error => {
          let errorMessage = 'An error occurred. Please try again later.';
          if (error.status === 401) {
            errorMessage = 'Invalid password or email id';
          }
          return throwError(errorMessage);
        })
      )
      .subscribe(response => {
        console.log('Login successful:', response);
        this.router.navigate(['/property-details']);
        // Redirect to the home page or perform other actions upon successful login
      }, error => {
        console.error('Login failed:', error);
        this.errorMessage = error;
      });
  }
}

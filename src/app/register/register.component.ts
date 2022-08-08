import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService) { }

  ngOnInit(): void {
    sessionStorage.setItem('registrationStatus', '');
    this.buildRegistrationControl();
  }
  buildRegistrationControl() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  submitUserForm() {
    if (this.registrationForm.valid) {
      this.apiService.getUserRegistration().subscribe(res => {
        if (res) {
          sessionStorage.setItem('registrationStatus', 'true');
          this.router.navigate(['profile']);
        }
      })
    }
  }
  public formError = (controlName: string, errorName: string) => {
    return this.registrationForm.controls[controlName].hasError(errorName);
  }
}

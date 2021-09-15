import { AlertifyjsService } from './../../services/alertifyjs.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private alertifyjsService: AlertifyjsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  //Kayıt
  registerSubmit() {
    this.http
      .post<any>('http://localhost:3000/users', this.registerForm.value, {
        withCredentials: true,})
      .subscribe(
        (data) => {
          this.alertifyjsService.success('Kayıt işleminiz başarılı bir şekilde gerçekleşti.');
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        (error) => {
          this.alertifyjsService.error('Kayıt işleminiz gerçekleşmedi.');
        }
      );
  }
}

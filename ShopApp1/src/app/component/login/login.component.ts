import { Router } from '@angular/router';
import { AlertifyjsService } from './../../services/alertifyjs.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private alertifyjsService: AlertifyjsService,
    private router: Router,
   
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  loginSubmit() {
    this.http.get<any>('http://localhost:3000/users').subscribe(
      (data) => {
        const user = data.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          this.alertifyjsService.success('Giriş yapıldı.');
          this.loginForm.reset();
          this.router.navigate(['/products']);
        } else {
          this.alertifyjsService.error('Giriş yapılamadı.');
        }
      },
      (error) => {
        this.alertifyjsService.error('Kullanıcı bulunumadı.');
      }
    );
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    terms: new FormControl(false, Validators.requiredTrue),
  });

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  onSubmit() {
    const { firstName, lastName, email, password } = this.registerForm.value;
    this.authService
      .register({ firstName, lastName, email, password })
      .subscribe({
        next: () =>
          this.authService.login({ email, password }).subscribe({
            next: (response:any) => {
              localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);;
            },
            error: (err) => console.error('Error logging in: ', err),
          }),
        error: (err) => {
          console.error('Error registering: ', err);
          alert('Something went wrong, try again');
        },
      });
  }
}

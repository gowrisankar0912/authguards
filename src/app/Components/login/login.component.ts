import { Component } from '@angular/core';
import { AuthGuard } from '../../Service/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  invalidCredentialMsg!: string;
  username!: string;
  password!: string;
  retUrl: string = 'home';
  constructor(public authService: AuthGuard) {}

  ngOnInit() {}

  onFormSubmit(loginForm: any) {
    this.username = loginForm.value.username;
    this.password = loginForm.value.password;
    if (this.authService.login(this.username, this.password)) {
      this.authService.redirectToPreviousUrl();
    } else {
      alert('Please enter valid username & password');
    }
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj: any = {
    username: "",
    pwd: ""
  }
  router = inject(Router)

  onLogin() {
    if (this.loginObj.username === 'admin' && this.loginObj.pwd === '223344') {
      alert('login successful');
      localStorage.setItem('enuiryApp', 'adminLoggedIn')
      this.router.navigateByUrl('/enquiry-list')
    }
    else {
      alert('wrong credentials');
    }
  }

}

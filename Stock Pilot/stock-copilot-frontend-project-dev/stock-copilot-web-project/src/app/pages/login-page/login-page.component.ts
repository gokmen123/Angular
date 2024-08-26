import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth-service';
import { AuthModel } from '../../core/models/auth-model';
import { Account } from '../../core/provides/account/account';
import { FormsModule } from '@angular/forms'; 
import { BaseComponent } from '../../core/base/base.component';
import { LocalStorageService } from '../../core/provides/local-storage.service';
import { Router,RouterModule } from '@angular/router';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',

})
export class LoginPageComponent extends BaseComponent {
  override isOpenSideBar: boolean = false;
  hide = true;

  /**
 * Proje açılınca string adına ve string passwordue sahip kullanıcının tokenı dönüyor. Burası dinamik olmalı  
 */

  constructor(private router: Router, private account: Account, private localStroage: LocalStorageService, private authService: AuthService) {
    super(localStroage);
    
    
  }

  //Test Data
  authModel: AuthModel = <AuthModel>{};

  

  login() {
    console.log("clicked")
    console.log("Auth Model:", this.authModel); 
    this.authService.login(this.authModel).subscribe(
      (res: any) => {
        this.account.token = res.token;
        console.log(`Name: ${res.name}`)
        console.log(`Token: ${res.token}`);
        console.log(`Login successful! Token: ${res.token}`);
        const loginTime = new Date().getTime().toString();
        this.localStorage.setItem('loginTime', loginTime);
        this.localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/supplier');
      },
      (err: any) => {
        console.error(err);
        console.log('Login failed. Please check your credentials and try again.');
        ;
      }
    );
  }

  toggleVisibility(): void {
    this.hide = !this.hide;
  }
}

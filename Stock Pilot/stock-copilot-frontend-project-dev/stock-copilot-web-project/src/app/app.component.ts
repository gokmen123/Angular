import { Component, importProvidersFrom } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaginationComponent } from './pagination/pagination.component';
import { LoginPageComponent } from "./pages/login-page/login-page.component";
import { CommonModule } from '@angular/common';
import { Account } from './core/provides/account/account';
import { BaseComponent } from './core/base/base.component';
import { LocalStorageService } from './core/provides/local-storage.service';
import { SupplierPageComponent } from './pages/supplier-page/supplier-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, DashboardComponent, PaginationComponent, LoginPageComponent, CommonModule,SupplierPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
  ]
})
export class AppComponent extends BaseComponent {
  override isOpenSideBar: boolean;
  title = 'stock-copilot-web-project';

  //Kullanıcı login ise true olacak
  isLogin = false;

  constructor(override localStorage: LocalStorageService, private router: Router) {
    super(localStorage);
    this.isOpenSideBar = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLogin = event.url !== '/login';
      }
    });
  }

  ngOnInit() {
    this.isLogin = this.router.url !== '/login';
  }

  onPageChange(page: number) {
    console.log('Selected page:', page);
  }
}

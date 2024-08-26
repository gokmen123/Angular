import { Component } from '@angular/core';
import { PaginationComponent } from "../../pagination/pagination.component";
import { HeaderComponent } from "../../header/header.component";
import { SidebarComponent } from "../../sidebar/sidebar.component";
import { BaseComponent } from '../../core/base/base.component';
import { LocalStorageService } from '../../core/provides/local-storage.service';
import { ProductService } from '../../core/services/product-service';
import { ProductModel } from '../../core/models/product-model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [PaginationComponent, HeaderComponent, SidebarComponent]
})
export class DashboardComponent extends BaseComponent {
  override isOpenSideBar: boolean = true;

  constructor(override localStorage: LocalStorageService, private productService: ProductService) {
    super(localStorage);
  }

  ngOnInit() {
    this.productService.getAll().subscribe((res: ProductModel[]) => {
      console.log(res[0].productName);
    });
  }

}

import  { Component  } from '@angular/core';
import { SupplierService } from '../../core/services/supplier-services';
import {MatButtonModule} from '@angular/material/button';
import { SupplierModel } from '../../core/models/supplier-model';
import { CommonModule } from '@angular/common';
import { FilterPageComponent } from './filter-page/filter-page.component';

@Component({
  selector: 'supplier-page',
  standalone: true,
  imports: [MatButtonModule, CommonModule, FilterPageComponent],
  templateUrl: './supplier-page.component.html',
  styleUrl: './supplier-page.component.css'
})
export class SupplierPageComponent {

  constructor(private supplierService : SupplierService) {
    this.getAll()
  }
 
  isDropdownOpen = false;
  selectedOption: string  = "İşlem seçiniz...";
  suppliers: SupplierModel[] = [];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    console.log(this.selectedOption)
    //this.cd.detectChanges();
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
  getAll() {
    this.supplierService.getAllSupplier().subscribe(
      (res: SupplierModel[]) => {
        this.suppliers = res;
        /* console.log(`All: ${JSON.stringify(this.suppliers)}`); */
      },
      (err: any) => {
        console.error(err);
        console.log('Get All failed. Please check your function and try again.');
      }
    );
  }
  deleteById(id: number) {
    this.supplierService.deleteById(id).subscribe(
        (res: any) => {
            console.log('Deleted successfully');
            this.getAll(); // Refresh the list after deletion
        },
        (err: any) => {
            console.error(err);
            console.log('Delete failed. Please check your function and try again.');
        }
    );
  }
  isFilterPageVisible: boolean = false;

  toggleFilterPage() {
    this.isFilterPageVisible = !this.isFilterPageVisible;
  }
}

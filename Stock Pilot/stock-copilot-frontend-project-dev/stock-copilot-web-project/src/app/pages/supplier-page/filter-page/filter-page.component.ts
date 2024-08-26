import { Component, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './filter-page.component.html',
  styleUrl: './filter-page.component.css'
})
export class FilterPageComponent {
  activeItems: string[] = [];
  @Output() close = new EventEmitter<void>();

  toggleActive(item: string) {
    const index = this.activeItems.indexOf(item);
    if (index === -1) {
      this.activeItems.push(item);
    } else {
      this.activeItems.splice(index, 1);
    }
  }

  isActive(item: string): boolean {
    return this.activeItems.includes(item);
  }

  selectAll: boolean = false;
  filterOptions = [
    { label: 'Ülke', selected: false },
    { label: 'Adres', selected: false },
    { label: 'Mail', selected: false },
    { label: 'Tel', selected: false },
    { label: 'Fax', selected: false },
    { label: 'Vergi No', selected: false },
    { label: 'Mersis No', selected: false }
  ];

  toggleAll(event: any) {
    this.selectAll = event.target.checked;
    this.filterOptions.forEach(option => option.selected = this.selectAll);
  }

  updateSelectAllState() {
    this.selectAll = this.filterOptions.every(option => option.selected);
  }
  closeModal() {
    this.close.emit();
  }
}

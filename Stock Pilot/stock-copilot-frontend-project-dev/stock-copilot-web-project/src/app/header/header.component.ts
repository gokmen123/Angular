import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName: string = 'Mehmet Akif G.';

  logout() {
    console.log('Logout method executed');
  }
}

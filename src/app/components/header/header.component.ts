import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName = 'mkk2';
  loginId = '25-00132';
  currentDate = new Date();
  isMobileMenuOpen = false;

  navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Admin Page', path: '/admin' },
    { label: 'Document Index List', path: '/documents' },
    { label: 'Change Password', path: '/change-password' },
  ];

  ngOnInit() {
    // Update current date every second
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout() {
    // Implement logout logic
    console.log('Logging out...');
  }
}

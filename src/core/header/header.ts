import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');

      this.isDarkMode = true;
    }
  }

  isDarkMode = false;

  isMenuOpen = false;
  protected isNavOpen: any;

  toggleTheme(event: any) {
    this.isDarkMode = event.target.checked;

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-advantage',
  imports: [],
  templateUrl: './advantage.html',
  styleUrl: './advantage.scss',
})
export class Advantage {
  currentTheme: 'light' | 'dark' = 'light';

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
  }
}

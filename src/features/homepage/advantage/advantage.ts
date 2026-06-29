import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-advantage',
  imports: [],
  templateUrl: './advantage.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './advantage.scss',
})
export class Advantage {
  currentTheme: 'light' | 'dark' = 'light';

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
  }
}

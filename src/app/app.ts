import { Component, signal, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Header } from '../core/header/header';
import { Footer } from '../core/footer/footer';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NgOptimizedImage],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ecommerce');

  constructor(private titleService: Title, private metaService: Meta, private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Define your titles and descriptions based on the route
      let title = 'Ramco Investment - Construction & Mining';
      let description = 'Leading provider of civil engineering, mining expertise, and heavy machinery in Nigeria.';

      const route = this.router.url;

      if (route.includes('civil-engineering')) {
        title = 'Civil Engineering | Ramco Investment';
        description = 'Expert civil engineering solutions, road construction, and infrastructure development across Nigeria.';
      } else if (route.includes('mining')) {
        title = 'Mining & Quarry Expertise | Ramco Investment';
        description = 'Marble, gold, feldspar, and lithium quarry operations with industrial-grade precision.';
      } else if (route.includes('construction')) {
        title = 'Construction Machinery Rentals | Ramco Investment';
        description = 'Heavy-duty construction machinery available for rental and project deployment.';
      } else if (route.includes('contact')) {
        title = 'Contact Ramco Investment | Get a Quote';
        description = 'Reach out to Ramco Investment for civil works, machinery sales, or mining partnerships.';
      }

      // Apply them to the head of the HTML
      this.titleService.setTitle(title);
      this.metaService.updateTag({ name: 'description', content: description });
    });
  }
}

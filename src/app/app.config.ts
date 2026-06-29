import { Component, OnInit, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { Router, NavigationEnd, provideRouter } from '@angular/router';
import { Title, Meta, provideClientHydration } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { routes } from './app.routes';

export class App implements OnInit {
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
  ],
};

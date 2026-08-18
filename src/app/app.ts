import { Component, signal, ChangeDetectionStrategy, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { Header } from '../core/header/header';
import { Footer } from '../core/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ecommerce');

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      // Remove query parameters and fragments
      const route = this.router.url.split('?')[0].split('#')[0];

      const baseUrl = 'https://ramcoinvestment.com.ng';

      let robots = 'index, follow';

      // Default SEO
      let title = 'RAMCO Investment Nigeria Ltd | Construction & Civil Engineering';

      let description =
        'RAMCO Investment Nigeria Limited delivers construction, civil engineering, road works, infrastructure development and construction equipment services in Kogi State and across Nigeria.';

      let canonicalUrl = `${baseUrl}${route}`;

      // PROJECTS - CIVIL ENGINEERING

      if (route === '/projects/civil-engineering') {
        title = 'Civil Engineering & Infrastructure Development | RAMCO Investment Nigeria Ltd';

        description =
          'Professional civil engineering, road construction and infrastructure development services by RAMCO Investment Nigeria Limited for government, institutions and private clients in Nigeria.';
      }
      // PROJECTS - CONSTRUCTION
      else if (route === '/projects/construction') {
        title = 'Construction & Infrastructure Projects | RAMCO Investment Nigeria Ltd';

        description =
          'RAMCO Investment Nigeria Limited delivers quality construction, road works, site development and infrastructure projects for government, institutions and private clients.';
      }

      // PLANT HIRING
      else if (route === '/projects/plant-hiring-sales') {
        title = 'Construction Equipment Hire & Plant Services | RAMCO Investment Nigeria Ltd';

        description =
          'Hire reliable construction equipment and heavy-duty plant machinery for road construction, earthworks, civil engineering and infrastructure projects.';
      }

      // MINING
      else if (route === '/projects/mining') {
        title = 'Mining & Quarry Operations | RAMCO Investment Nigeria Ltd';

        description =
          'Explore RAMCO Investment Nigeria Limited’s mining and quarry operations, expertise and industrial project capabilities in Nigeria.';
      }

      // ABOUT - HISTORY
      else if (route === '/about/history') {
        title = 'Our History | RAMCO Investment Nigeria Ltd';

        description =
          'Discover the history, experience and growth of RAMCO Investment Nigeria Limited and our contribution to construction, civil engineering and infrastructure development.';
      }

      // ABOUT - TEAM
      else if (route === '/about/team') {
        title = 'Our Team | RAMCO Investment Nigeria Ltd';

        description =
          'Meet the leadership and professionals behind RAMCO Investment Nigeria Limited and our commitment to quality construction and infrastructure delivery.';
      }

      // ABOUT - ACHIEVEMENTS
      else if (route === '/about/achievements') {
        title = 'Our Achievements & Project Experience | RAMCO Investment Nigeria Ltd';

        description =
          'Explore RAMCO Investment Nigeria Limited’s achievements, project experience and contributions to construction and infrastructure development across Nigeria.';
      }

      // CONTACT
      else if (route === '/contact') {
        title = 'Contact RAMCO Investment Nigeria Ltd | Request a Quote';

        description =
          'Contact RAMCO Investment Nigeria Limited for construction, civil engineering, road works, infrastructure projects and construction equipment services.';
      }

      // PRIVACY
      else if (route === '/privacy') {
        title = 'Privacy Policy | RAMCO Investment Nigeria Ltd';

        description = 'Read the privacy policy of RAMCO Investment Nigeria Limited.';
      }

      // TERMS
      else if (route === '/terms') {
        title = 'Terms & Conditions | RAMCO Investment Nigeria Ltd';

        description =
          'Read the terms and conditions governing the use of the RAMCO Investment Nigeria Limited website.';
      }


      // 404 PAGE
      else if (route === '/404') {
          title = 'Page Not Found | RAMCO Investment Nigeria Ltd';
          description = 'The page you are looking for could not be found.';
          robots = 'noindex, nofollow';
      }

      // TITLE
      this.titleService.setTitle(title);

      // META DESCRIPTION
      this.metaService.updateTag({
        name: 'description',
        content: description,
      });

      // ROBOTS
      this.metaService.updateTag({
        name: 'robots',
        content: robots,
      });

      // CANONICAL URL
      this.updateCanonicalUrl(canonicalUrl);

      // OPEN GRAPH
      this.metaService.updateTag({
        property: 'og:title',
        content: title,
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: description,
      });

      this.metaService.updateTag({
        property: 'og:url',
        content: canonicalUrl,
      });

      this.metaService.updateTag({
        property: 'og:type',
        content: 'website',
      });

      this.metaService.updateTag({
        property: 'og:site_name',
        content: 'RAMCO Investment Nigeria Ltd',
      });

      // TWITTER / X
      this.metaService.updateTag({
        name: 'twitter:card',
        content: 'summary_large_image',
      });

      this.metaService.updateTag({
        name: 'twitter:title',
        content: title,
      });

      this.metaService.updateTag({
        name: 'twitter:description',
        content: description,
      });
    });
  }

  private updateCanonicalUrl(url: string): void {

    let link =
      this.document.querySelector(
        "link[rel='canonical']"
      ) as HTMLLinkElement | null;

    if (!link) {

      link = this.document.createElement('link');

      link.setAttribute('rel', 'canonical');

      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }


}

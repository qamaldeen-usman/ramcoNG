import { Component, ChangeDetectionStrategy, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Autoplay, FreeMode } from 'swiper/modules';
import { partnersList } from './partners-list';
import Swiper from 'swiper';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-partners',
  imports: [NgOptimizedImage],
  templateUrl: './partners.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './partners.scss',
})
export class Partners implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  protected readonly partnersList = partnersList;

  get reversedPartnersList() {
    return [...this.partnersList].reverse();
  }

  ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {
      //small timeout to ensure DOM is fully rendered
      setTimeout(() => {
        //First swiper - using the class we'll add to template
        new Swiper('.partners-swiper-normal', {
          spaceBetween: 40,
          slidesPerView: 'auto',
          modules: [Autoplay, FreeMode],
          loop: true,
          grabCursor: false,
          centeredSlides: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          freeMode: true,
          speed: 10000,
          breakpoints: {
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            800: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 6 },
            1600: { slidesPerView: 7 },
          },
        });

        //Second swiper (RTL)
        new Swiper('.partners-swiper-rtl', {
          spaceBetween: 40,
          slidesPerView: 'auto',
          modules: [Autoplay, FreeMode],
          direction: 'horizontal',
          loop: true,
          grabCursor: false,
          centeredSlides: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          freeMode: true,
          speed: 8500,
          breakpoints: {
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            800: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 6 },
            1600: { slidesPerView: 7 },
          },
        });
      }, 100);
    }
    }

}

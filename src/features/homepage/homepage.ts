import {
  Component,
  ChangeDetectorRef,
  OnDestroy,
  Type,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import Typed from 'typed.js';
import { Legacy } from './legacy/legacy';
import { Numbers } from './numbers/numbers';
// import { Portfolio } from './portfolio/portfolio';
import { Advantage } from './advantage/advantage';
import { Partners } from './partners/partners';
import { CTA } from './cta/cta';
import { isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [
    RouterLink,
    CommonModule,
    NgOptimizedImage,
    Legacy,
    Numbers,
    Advantage,
    Partners,
    CTA,
  ],
  templateUrl: './homepage.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './homepage.scss',
})
export class Homepage implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;
  private typed: Typed | undefined;

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: object) {}


  slides = [
    { image: 'assets/ramcobgs/r4.webp' },
    { image: 'assets/ramcobgs/r6.webp' },
    { image: 'assets/ramcobgs/28.jpg' },
    // { image: 'assets/ramcobgs/31.jpg' },
  ];

  topRowImages = ['assets/ramcobgs/r1.jpg', 'assets/ramcobgs/rmain.webp', 'assets/ramcobgs/30.jpg'];

  bottomRowImages = [
    'assets/ramcobgs/r5.webp',
    'assets/ramcobgs/r3.webp',
    'assets/ramcobgs/r2.webp',
    'assets/ramcobgs/35.jpg',
  ];

  isMobile = false;
  topView: string[] = [];
  bottomView: string[] = [];

  ngOnInit() {
    this.preloadImages();
    this.startSlideshow();


    if (isPlatformBrowser(this.platformId)) {
      this.checkScreen();
      window.addEventListener('resize', () => this.checkScreen());
    }

  }

  ngAfterViewInit() {
    this.initTypedText();
  }

  checkScreen() {
    const mobile = window.innerWidth <= 768;

    if (isPlatformBrowser(this.platformId)) {
      if (mobile === this.isMobile) return;

      this.isMobile = mobile;

      this.topView = this.isMobile ? this.topRowImages.slice(0, 2) : this.topRowImages;

      this.bottomView = this.isMobile ? this.bottomRowImages.slice(0, 3) : this.bottomRowImages;
    }
    }


  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }

    if (this.typed) {
      this.typed.destroy();
    }
  }

  preloadImages() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlideshow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  resetSlideshow() {
    this.stopSlideshow();
    this.startSlideshow();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;

    this.cdr.detectChanges();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    // this.resetSlideshow();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1) % this.slides.length;
    this.resetSlideshow();
  }

  initTypedText() {
    const options = {
      strings: [
        'Building World-Class Infrastructure Across Nigeria',
        'Shaping the Future of quarry operations & mining',
        'Powering Progress with quality fleets',
      ],
      typeSpeed: 50,
      backSpeed: 15,
      backDelay: 1000,
      startDelay: 200,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    };
    if (isPlatformBrowser(this.platformId)) {
      this.typed = new Typed('.typed-text', options);
    }

  }
}

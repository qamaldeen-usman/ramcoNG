import {
  Component,
  ChangeDetectorRef,
  OnDestroy,
  Type,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import Typed from 'typed.js';
import { Legacy } from './legacy/legacy';
import { Numbers } from './numbers/numbers';
import { Portfolio } from './portfolio/portfolio';
import { Leadership } from './leadership/leadership';
import { Advantage } from './advantage/advantage';
import { Partners } from './partners/partners';
import { CTA } from './cta/cta';

@Component({
  selector: 'app-homepage',
  imports: [
    RouterLink,
    CommonModule,
    NgOptimizedImage,
    Legacy,
    Numbers,
    Portfolio,
    Leadership,
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

  constructor(private cdr: ChangeDetectorRef) {}

  slides = [
    { image: 'assets/ramcobgs/25.jpg' },
    { image: 'assets/ramcobgs/26.jpg' },
    { image: 'assets/ramcobgs/28.jpg' },
    { image: 'assets/ramcobgs/31.jpg' },
  ];

  topRowImages = ['assets/ramcobgs/41.webp', 'assets/ramcobgs/27.webp', 'assets/ramcobgs/30.jpg'];

  bottomRowImages = [
    'assets/ramcobgs/32.jpg',
    'assets/ramcobgs/33.webp',
    'assets/ramcobgs/34.webp',
    'assets/ramcobgs/35.jpg',
  ];

  isMobile = false;
  topView: string[] = [];
  bottomView: string[] = [];

  ngOnInit() {
    this.preloadImages();
    this.startSlideshow();
    this.initTypedText();

    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen());
  }

  checkScreen() {
    const mobile = window.innerWidth <= 768;

    if (mobile === this.isMobile) return;

    this.isMobile = mobile;

    this.topView = this.isMobile ? this.topRowImages.slice(0, 2) : this.topRowImages;

    this.bottomView = this.isMobile ? this.bottomRowImages.slice(0, 3) : this.bottomRowImages;
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
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    };
    this.typed = new Typed('.typed-text', options);
  }
}

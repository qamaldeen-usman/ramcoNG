import {Component, ChangeDetectorRef, OnDestroy, Type, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import Typed from 'typed.js';
import {Legacy} from './legacy/legacy';

@Component({
  selector: 'app-homepage',
  imports: [
    RouterLink,
    CommonModule,
    NgOptimizedImage,
    Legacy,
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage implements OnInit, OnDestroy {


  currentSlide = 0;
  private slideInterval: any;
  private typed: Typed | undefined;

  constructor (
    private cdr: ChangeDetectorRef
  ){}

  slides = [
    {image: 'assets/ramcobgs/15.jpg'},
    {image: 'assets/ramcobgs/16.jpg'},
    {image: 'assets/ramcobgs/3.jpg'},
    {image: 'assets/ramcobgs/4.jpg'},
    {image: 'assets/ramcobgs/5.jpg'},
    {image: 'assets/ramcobgs/6.jpg'},
    {image: 'assets/ramcobgs/17.jpg'},
    // {image: 'assets/ramcobgs/8.jpg'},
    // {image: 'assets/ramcobgs/9.jpg'},
    // {image: 'assets/ramcobgs/10.jpg'},
    // {image: 'assets/ramcobgs/11.jpg'},
    // {image: 'assets/ramcobgs/12.jpg'},
  ];

  topRowImages = [
    'assets/ramcobgs/marble.jpg',
    'assets/ramcobgs/19.jpg',
    'assets/ramcobgs/20.jpg',
  ];

  bottomRowImages = [
    'assets/img4.jpg',
    'assets/img5.jpg',
    'assets/img6.jpg',
    'assets/img7.jpg'
  ];

  isMobile = false;
  topView: string[] = [];
  bottomView: string[] = [];

  ngOnInit() {
    this.preloadImages();
    this.startSlideshow();
    this.initTypedText();

    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen())
  }

  checkScreen() {
    const mobile = window.innerWidth <= 768;

    if (mobile === this.isMobile) return;

    this.isMobile = mobile;

    this.topView = this.isMobile
      ? this.topRowImages.slice(0, 2)
      : this.topRowImages;

    this.bottomView = this.isMobile
      ? this.bottomRowImages.slice(0, 3)
      : this.bottomRowImages;
  }

  ngOnDestroy(){

    if(this.slideInterval){
      clearInterval(this.slideInterval);
    }

    if(this.typed){
      this.typed.destroy();
    }

  }

  preloadImages(){

    this.slides.forEach(slide=>{

      const img = new Image();
      img.src = slide.image;

    });

  }

  startSlideshow() {

    this.slideInterval = setInterval(()=>{

      this.nextSlide();

    },5000);

  }

  stopSlideshow() {
    if(this.slideInterval){
      clearInterval(this.slideInterval);
    }
  }

  resetSlideshow() {
    this.stopSlideshow();
    this.startSlideshow();
  }

  nextSlide() {

    this.currentSlide =
      (this.currentSlide + 1) % this.slides.length;


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
        'Building Infrastructures...',
        'Shaping the Future...',
        'Powering Progress...'
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

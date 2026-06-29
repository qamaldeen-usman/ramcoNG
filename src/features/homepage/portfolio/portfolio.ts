import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterLink } from '@angular/router';

declare const lightGallery: any;

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './portfolio.scss',
})
export class Portfolio implements AfterViewInit, OnDestroy {
  @ViewChild('gallery') galleryRef!: ElementRef;
  private galleryInstance: any;

  ngAfterViewInit() {
    // Wait a tick to ensure DOM is ready
    setTimeout(() => {
      this.initGallery();
    }, 0);
  }

  ngOnDestroy() {
    if (this.galleryInstance) {
      try {
        this.galleryInstance.destroy();
      } catch (e) {
        console.warn('Error destroying gallery:', e);
      }
    }
  }

  private initGallery() {
    const galleryElement = this.galleryRef?.nativeElement || document.querySelector('.gallery');

    if (!galleryElement) {
      console.warn('Gallery element not found');
      return;
    }

    try {
      if (typeof lightGallery === 'undefined') {
        console.error('lightGallery is not loaded. Check your angular.json scripts.');
        return;
      }

      this.galleryInstance = lightGallery(galleryElement, {
        selector: '.gallery-item',
        download: false,
        counter: true,
        thumbnail: true,
        showThumbByDefault: false,
        thumbMargin: 10,
        thumbWidth: 120,
        mode: 'lg-slide',
        speed: 600,
        cssEasing: 'ease',
        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: true,
        getCaptionFromTitleOrAlt: true,
        videoMaxWidth: '1280px',
        youtubePlayerParams: {
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          controls: 1,
        },
        vimeoPlayerParams: {
          byline: 0,
          portrait: 0,
          color: '0d6efd',
        },
      });

      console.log('Gallery initialized successfully');
    } catch (error) {
      console.error('Error initializing gallery:', error);
    }
  }

  // Reinitialize if needed
  reinitGallery() {
    if (this.galleryInstance) {
      try {
        this.galleryInstance.destroy();
      } catch (e) {
        // Ignore
      }
    }
    setTimeout(() => {
      this.initGallery();
    }, 100);
  }
}

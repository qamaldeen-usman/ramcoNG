import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-numbers',
  imports: [RouterLink],
  templateUrl: './numbers.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './numbers.scss',
})
export class Numbers implements AfterViewInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isFlipped = [false, false, false, false];

  toggleFlip(index: number) {
    this.isFlipped[index] = !this.isFlipped[index];
  }
  @ViewChild('statsSection') statsSection!: ElementRef;

  years = 0;
  roads = 0;
  projects = 0;

  private subscriptions: Subscription[] = [];
  private animationStarted = false;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !this.animationStarted) {
            this.animationStarted = true;
            this.startAnimations();
            observer.disconnect();
          }
        },
        { threshold: 0.4 },
      );

      observer.observe(this.statsSection.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private startAnimations() {
    // Stagger the animations
    setTimeout(() => this.animateNumberWithRxJS('years', 20, 2000), 0);
    setTimeout(() => this.animateNumberWithRxJS('roads', 500, 2000), 200);
    setTimeout(() => this.animateNumberWithRxJS('projects', 150, 2000), 400);
  }

  private animateNumberWithRxJS(
    property: 'years' | 'roads' | 'projects',
    target: number,
    duration: number = 2000,
  ) {
    const steps = 60; // 60fps
    const intervalTime = duration / steps;

    const sub = interval(intervalTime)
      .pipe(
        take(steps + 1),
        map((step) => {
          const progress = step / steps;
          // EaseOutQuart
          const eased = 1 - Math.pow(1 - progress, 4);
          return Math.floor(eased * target);
        }),
      )
      .subscribe((value) => {
        this[property] = value;
      });

    this.subscriptions.push(sub);
  }
}

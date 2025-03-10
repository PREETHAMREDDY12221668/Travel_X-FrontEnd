import { Component, HostListener } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  animations: [
    trigger('fadeInScale', [
      state('hidden', style({ opacity: 0, transform: 'scale(0.95)' })),
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      transition('hidden => visible', animate('500ms ease-in'))
    ]),
    trigger('cardFadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('glowEffect', [
      transition(':enter', [
        animate(
          '1s ease-in-out',
          keyframes([
            style({ boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)', offset: 0 }),
            style({ boxShadow: '0 0 35px rgba(59, 130, 246, 0.4)', offset: 0.5 }),
            style({ boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)', offset: 1 })
          ])
        )
      ]),
      transition('* => *', [
        animate(
          '1.5s ease-in-out',
          keyframes([
            style({ boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)', offset: 0 }),
            style({ boxShadow: '0 0 35px rgba(59, 130, 246, 0.4)', offset: 0.5 }),
            style({ boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)', offset: 1 })
          ])
        )
      ])
    ])
    
  ]
})
export class LoadingComponent {
  windowWidth = window.innerWidth;
  numCards = 16;
  cols = this.getCols(this.windowWidth);

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
    this.cols = this.getCols(this.windowWidth);
  }

  getCols(width: number): number {
    return width >= 1024 ? 4 : width >= 640 ? 2 : 1;
  }
}

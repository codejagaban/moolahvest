import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

export const slideInRight = trigger('slideInRight', [
  // state('void', style({
  //   right: '-500px',
  //   opacity: 0,
  // })),
  // transition('void => *', [
  //   style({
  //     right: 0,
  //     opacity: 1,
  //   }),
  //   animate('10s'),
  // ]),
])
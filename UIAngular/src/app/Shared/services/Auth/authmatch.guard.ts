import { CanMatchFn } from '@angular/router';

export const authmatchGuard: CanMatchFn = (route, segments) => {
  return true;
};

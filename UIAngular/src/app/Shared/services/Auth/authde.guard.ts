import { CanDeactivateFn } from '@angular/router';

export const authdeGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};

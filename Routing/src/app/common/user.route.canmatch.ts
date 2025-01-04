import { Injectable } from "@angular/core";
import { CanMatch, RedirectCommand, Route, Router, UrlSegment } from "@angular/router";

@Injectable({ providedIn: 'root' })
class CanMatchTeamSection implements CanMatch {
  constructor(private router: Router) {}
  canMatch(route: Route, segments: UrlSegment[]) {
    const shouldGetAccess = Math.random();
    if (shouldGetAccess < 0.5) {
      return true;
    }
    return new RedirectCommand(this.router.parseUrl('/unauthorized'));
  }
}
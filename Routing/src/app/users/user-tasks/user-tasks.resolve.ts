import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { UsersService } from "../users.service";

export const resolveUserName: ResolveFn<string> = (
    ActivatedRoute: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
) => {
    const userService = inject(UsersService);
    const userName = userService.users.find((u) => 
        u.id === ActivatedRoute.paramMap.get('userid')
   )?.name || '';

    return userName
}

export const resolveTitle: ResolveFn<string> = (ActivatedRoute, routerState) => {
    return resolveUserName(ActivatedRoute, routerState) + '/Tasks'
}

// @Injectable({ providedIn: 'root' })
// export class UserNameResolver implements Resolve<string> {
//   constructor(private usersService: UsersService) {}
//   resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const userName =
//       this.usersService.users.find(
//         (u) => u.id === activatedRoute.paramMap.get('userId')
//       )?.name || '';
//     return userName;
//   }
// }
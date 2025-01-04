import { Injectable } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';

@Injectable()
export class UsersService {
  get users() {
    return DUMMY_USERS;
  }
}

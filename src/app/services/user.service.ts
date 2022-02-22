import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Rishabh',
        lastName: 'Kukreja',
        email: 'rishabh@gnail.com',

        isActive: true,
        balance: 100,
        registered: new Date(),
        hide: true,
      },
      {
        firstName: 'Naman',
        lastName: 'Ahuja',
        email: 'naman@gmail.com',

        isActive: false,
        balance: 200,
        registered: new Date(),
        hide: true,
      },
      {
        firstName: 'Gaurav',
        lastName: 'Sharma',
        email: 'gaurav@gmail.com',

        isActive: true,
        balance: 300,
        registered: new Date(),
        hide: true,
      },
    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next({ name: 'Rishabh' });
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}

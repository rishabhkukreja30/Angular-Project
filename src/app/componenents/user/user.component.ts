import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  //   template: '<h2>Rishabh Kukreja</h2>',
  //   styles: [
  //     `
  //       h2 {
  //         color: red;
  //       }
  //     `,
  //   ],
})
export class UserComponent implements OnInit {
  // properties

  user!: User;
  //   firstName: string;
  //   lastName: string;
  //   age: number;v
  //   address;
  //   hasKids: boolean;
  // numberArray: number[];

  // methods
  constructor() {
    //     console.log('Hello user');
    //     this.syaHello();
    //     console.log(this.age);
    //     this.hasBirthday();
    //     console.log(this.age);
    //   }
    //   syaHello() {
    //     console.log(`Hello ${this.firstName}`);
    //   }
    //   hasBirthday() {
    //     this.age += 1;
    //   }
    //     this.firstName = 'Rishabh';
    //     this.lastName = 'Kukreja';
    //     this.age = 30;
    //     this.address = {
    //       street: 'Model Town',
    //       city: 'Delhi',
    //       state: 'New Delhi',
    //     };
    //     console.log(this.addNumbers(2, 3));
    //   }
    //   addNumbers(num1: number, num2: number): number {
    //     return num1 + num2;
    //   }
  }

  ngOnInit() {
    this.user = {
      firstName: 'Rishabh',
      lastName: 'Kukreja',
      email: '',
    };
  }
}

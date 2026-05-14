// profile/profile.component.ts
import { Component, inject } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { CreditCardPipe } from './CreditCardPipe';
import { IUser } from '../user/userInfo';
import { UserService } from '../Services/user-service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CreditCardPipe],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class ProfileComponent {

  today: Date = new Date();

 
  private userService = inject(UserService);

  user: IUser = this.userService.user;
}
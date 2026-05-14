// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { IUser } from '../user/userInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser = {
    id: 1,
    name: 'Adrian Vance',
    email: 'nda you@precision-optics.com',
    membershipTier: 'Platinum Member',
    joinDate: new Date('2024-10-24'),
    avatar: 'Images/nda.png',
    shippingAddress: [
      '482 Technical Plaza',
      'Suite 1200',
      'San Francisco, CA 94105'
    ],
    creditCard: '4532901288479012',
    recentOrder: {
      id: '#PO-88294-X',
      product: 'Prime 85MM F/1.2 G-Master',
      deliveredDate: new Date('2024-10-12'),
      img: 'Images/order.png'
    },
    registeredGear: [
      { icon: 'fa-camera',     name: 'Alpha 7R V Body',  serial: '7729-1029-44' },
      { icon: 'fa-circle-dot', name: '24-70MM F/2.8 II', serial: '8831-9920-51' }
    ]
  };
}
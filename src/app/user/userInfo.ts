// user/userInfo.ts
export interface IUser {
  id: number;
  name: string;
  email: string;
  membershipTier: string;
  joinDate: Date;
  avatar: string;
  shippingAddress: string[];
  creditCard: string;
  recentOrder: {
    id: string;
    product: string;
    deliveredDate: Date;
    img: string;
  };
  registeredGear: {
    icon: string;
    name: string;
    serial: string;
  }[];
}
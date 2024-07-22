import { ProfileConfirmation } from './profile-confirmation';

export interface OrderConfirmation {
  id: number;
  customerId: number;
  customerName: string;
  salesRepName: string;
  salesRepPhone: string;
  deliveryDate: string;
  shipToId: number;
  shipToName: string;
  totalPrice: number;
  profiles: ProfileConfirmation[];
}

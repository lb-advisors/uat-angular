import { ProfileNew } from './profile-new';
import { ShipTo } from './shipTo';

export interface OrderNew {
  id: number;
  customerId: number;
  customerName: string;
  salesRepName: string;
  salesRepPhone: string;
  deliveryDate: string;
  shipTos: ShipTo[];
  shipToName: string;
  totalPrice: number;
  profiles: ProfileNew[];
}

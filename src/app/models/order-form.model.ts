import { Profile } from './profile.model';
import { ShipTo } from './ship-to.model';

export interface OrderForm {
  id: number;
  customerId: number;
  customerName: string;
  salesRepName: string;
  salesRepPhone: string;
  deliveryDate: string;
  shipTos: ShipTo[];
  shipToName: string;
  totalPrice: number;
  profiles: Profile[];
}

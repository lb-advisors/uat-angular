import { Profile } from './profile.model';
import { ShipTo } from './ship-to.model';

export interface OrderForm {
  id: number;  // Add this line if 'id' is required
  Did: number;
  customerId: number;
  customerName: string;
  salesRepName: string;
  salesRepPhone: string;
  companyId: number;
  companyName: string;
  deliveryDate: string;
  shipTos: ShipTo[];
  shipToName: string;
  totalPrice: number;
  profiles: Profile[];
}

export interface OrderProfile {
  profileDid: number;
  quantity: number;
}

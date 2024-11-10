import { ProfileRequest } from './profile-request.model';

export interface OrderRequest {
  id: number;
  customerId: number;
  deliveryDate: string;
  shipToId: number | string; // Accepts number or empty string
  totalPrice: number;
  profiles: ProfileRequest[];
}

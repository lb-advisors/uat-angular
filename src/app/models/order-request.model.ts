import { ProfileRequest } from './profile-request.model';

export interface OrderRequest {
  id: number;
  customerId: number;
  deliveryDate: string;
  shipToId: number;
  totalPrice: number;
  profiles: ProfileRequest[];
}

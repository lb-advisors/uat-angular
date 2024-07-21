export interface Profile {
  profileDid: number;
  profileDescription: string;
  unitType: string;
  packSize: number;
  price: number;
  id: number;
  quantity?: number;
  customer_id?: number;  // Add this line
  deliveryDate?: string;  // Add this line
  customerPo?: string;    // Add this line
}

export interface Profile {
  profileDescription: string;
  unitTypePd: string;
  packSizePd: number;
  salesPrice: number;
  id: number;
  quantity?: number;
  customer_id?: number;  // Add this line
  deliveryDate?: string;  // Add this line
  customerPo?: string;    // Add this line
}

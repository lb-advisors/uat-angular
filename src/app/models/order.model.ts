export interface Profile {
  profileDescription: string;
  unitTypePd: string;
  packSizePd: number;
  salesPrice: number;
  id: number;
  quantity?: number; // This will be added dynamically
}

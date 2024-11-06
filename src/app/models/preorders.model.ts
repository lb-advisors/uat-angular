// preorders.model.ts
export interface PreOrders {
  dispatchDate: string;
  customerId: number;
  customerName: string;
  sodId: number;
  descriptionMemo: string;
  entryTime: string;
  preOrderHours: number;
  orderedUnits: number;
  unitType: number;
  unitSize: number;
  webAppPreOrderQ_VendorID: number;
  vendor_VendorID: number;
  vendorName: string;
  weight?: number; // Optional weight property to allow for editing
  price?: number;  // Optional price property to allow for editing
}

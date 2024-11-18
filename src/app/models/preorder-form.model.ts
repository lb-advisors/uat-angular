export interface PreOrder {
    id: number;
    dispatchDate: string;
    customerId: number;
    customerName: string;
    sodId: number;
    descriptionMemo: string;
    entryTime: string;
    preOrdersHour: number;
    orderedUnits: number;
    unitType: string; // Assuming unitType is a string based on the provided data
    unitSize: number;
    webAppPreOrderQVendorId: number;
    vendorId: number;
    vendorName: string;
    price: number;
    weight: number;
  }
  
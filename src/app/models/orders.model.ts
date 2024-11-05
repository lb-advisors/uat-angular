export interface Orders {
    id: number;
    customerId: number | null;
    customerName: string;
    customerPo: string;
    deliveryDate: string; // Date string in ISO format (e.g., '2023-11-05')
    salesRepName: string;
    salesRepPhone: string | null;
    shipToId: number | null;
    shipToName: string | null;
    totalPrice: number;
    profiles: string | null;
    profileDescription: string;
    unitType: string;
    packSize: number;
    price: number;
    quantity: number;
    createdBy: string;
    createdAt: string; // Date string in ISO format
    lastUpdatedBy: string;
    lastUpdatedAt: string; // Date string in ISO format
    companyId: number;
}

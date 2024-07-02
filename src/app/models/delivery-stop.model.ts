export interface DeliveryStop {
  id: number;
  driverName: string;
  deliveryAddress1: string;
  deliveryAddress2: string;
  deliveryAddress3: string;
  customerPhone: string;
  plannedArrivalTime: string;
  actualArrivalTime: boolean;
  priority: number;
  plannedTravelTime: string;
  timeDifference?: number; // Added timeDifference property
}

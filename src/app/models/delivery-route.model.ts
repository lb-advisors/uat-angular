export interface DeliveryRoute {
  id: number;
  deliveryAddress1: string;
  customerPhone: string;
  planned_arrival_time: string;
  actual_arrival_time: string | null;
  priority: number;
  planned_arrival_time_minutes?: number; // Add this line
}

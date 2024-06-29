export interface DeliveryRoute {
  id: number;
  priority: number;
  deliveryAddress1: string;
  customerPhone: string;
  planned_arrival_time: string;
  planned_arrival_time_minutes?: number;
  actual_arrival_time?: string;
}

export interface DeliveryRoute {
  driver_name: string;
  customer_name: string;
  address: string;
  delivery_date: Date | null;
  has_arrived: boolean;
  status: string;
  delivery_time: Date | null;
}

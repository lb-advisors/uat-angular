export interface DeliveryRoute {
    id: number;
    driver_name: string;
    invoice_number: number;
    delivery_date: string;
    priority: number;
    delivery_address_1: string;
    delivery_address_2: string;
    delivery_address_3: string;
    customer_phone: string;
    planned_arrival_time: string;
    actual_arrival_time: string;
    comments: string;
    rating: string;
    picture_key: string;
    created_by: string;
    created_at: string;
    last_updated_by: string;
    last_updated_at: string;
  }
  
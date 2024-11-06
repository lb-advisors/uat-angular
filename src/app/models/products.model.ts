// src/app/models/products.model.ts

export interface InventoryItem {
  compItemId: number;
  compDescription: string;
  compInstructions?: string;
  origin: string;
  notes?: string;
  woh?: number | null;
  unitType?: string | number | undefined; // Allow string, number, or undefined
  packSize?: string | number | undefined; // Allow string, number, or undefined
  packLock?: number | null;
  compCost?: number;
  yield?: number;
  laborPackCost?: number;
  buyer?: string | undefined; // Allow string or undefined
  sixtySales?: number;
  tenSales?: number;
  preOrderHours?: number | null;
}

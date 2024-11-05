// src/app/models/products.model.ts

export interface InventoryItem {
  compItemId: number;
  compDescription: string;
  compInstructions?: string;
  origin: string;
  notes?: string;
  woh?: number | null;
  unitType?: string | number;
  packSize?: string | number;
  packLock?: number | null;
  compCost?: number;
  yield?: number;
  laborPackCost?: number;
  buyer?: string;
  sixtySales?: number;
  tenSales?: number;
  preOrderHours?: number | null;
}

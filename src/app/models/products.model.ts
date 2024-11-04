export interface InventoryItem {
  compItemId: number; // Product ID (API uses compItemId)
  compDescription: string; // Product Description
  origin: string; // Product Origin (origin is a string, e.g., "Chile")
  woh: number | null; // WOH (Weeks on Hand)
  sixtySales: number; // Sixty Sales (API uses sixtySales with capital "S")
}

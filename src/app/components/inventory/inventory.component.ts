import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  filters = {
    CompItemID: '',
    ProfileDescription: '',
    UnitTypePD: '',
    PackSizePD: '',
    SalesPrice: '',
    Quantity: ''
  };

  inventoryItems = [
    { CompItemID: 7, ProfileDescription: 'Cold-Smoked Salmon Sliced Skinless Deluxe 16oz NCS', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 18.11, Quantity: 24 },
    { CompItemID: 13, ProfileDescription: 'Shrimp 16-20 P&D White Tail-On Raw Frozen', UnitTypePD: 'Cs', PackSizePD: 10, SalesPrice: 7.54, Quantity: 14 },
    { CompItemID: 26, ProfileDescription: 'Salmon Atlantic Fillet Fresh 2-3 E-Trim Skin-Off 10lb', UnitTypePD: 'Lbs', PackSizePD: 1, SalesPrice: 9.71, Quantity: 10 },
    { CompItemID: 44, ProfileDescription: 'OYSTER SHIGOKU LIVE', UnitTypePD: 'Pcs', PackSizePD: 1, SalesPrice: 1.35, Quantity: 28 },
    { CompItemID: 99, ProfileDescription: 'ALBACORE SUSHI LOIN FROZEN', UnitTypePD: 'Pcs', PackSizePD: 1, SalesPrice: 10.7, Quantity: 25 },
    { CompItemID: 143, ProfileDescription: 'Roe Caviar Salmon (IKURA) 1Kg Frz C-1', UnitTypePD: 'Pck', PackSizePD: 2.2, SalesPrice: 60.02, Quantity: 4 },
    { CompItemID: 150, ProfileDescription: 'CRAB MEAT DUNGENESS FRESH 1 LB', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 40.98, Quantity: 34 },
    { CompItemID: 153, ProfileDescription: 'Cold-Smoked Salmon Fillet Sliced Deluxe With Skin NCS', UnitTypePD: 'Pcs', PackSizePD: 3, SalesPrice: 13.89, Quantity: 30 },
    { CompItemID: 171, ProfileDescription: 'Scallop Processed 10-20 Frozen', UnitTypePD: 'Pck', PackSizePD: 5, SalesPrice: 12.28, Quantity: 11 },
    { CompItemID: 224, ProfileDescription: 'TUNA BLUEFINA BACK LOIN SKIN-ON BLI FRESH', UnitTypePD: 'Lbs', PackSizePD: 1, SalesPrice: 19.99, Quantity: 21 },
    { CompItemID: 326, ProfileDescription: 'Cold-Smoked Salmon Fillet Sliced With-Skin Deluxe *NOIR*', UnitTypePD: 'Side', PackSizePD: 3, SalesPrice: 10.72, Quantity: 30 },
    { CompItemID: 426, ProfileDescription: 'Octopus Spanish 6-8 Whole Raw Frozen', UnitTypePD: 'Pcs', PackSizePD: 7, SalesPrice: 7.15, Quantity: 18 },
    { CompItemID: 446, ProfileDescription: 'Lobster Live Maine Cull Medium', UnitTypePD: 'Pcs', PackSizePD: 3, SalesPrice: 18.17, Quantity: 12 },
    { CompItemID: 465, ProfileDescription: 'Bass Sea Chilean (Toothfish) Fillet Skin-Off PF', UnitTypePD: 'Lbs', PackSizePD: 1, SalesPrice: 29.23, Quantity: 6 },
    { CompItemID: 602, ProfileDescription: 'PRODUCE OHBA (PERILLA-LEAVES)', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 8.8, Quantity: 16 },
    { CompItemID: 603, ProfileDescription: 'PRODUCE KAIWARE (RADISH-SPROUTS)', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 1.45, Quantity: 6 },
    { CompItemID: 628, ProfileDescription: 'LOBSTER MEAT CK (CLAW / KNUCKLE) FROZEN', UnitTypePD: 'Cs', PackSizePD: 12, SalesPrice: 35.67, Quantity: 47 },
    { CompItemID: 658, ProfileDescription: 'Cold-Smoked Salmon Sliced Skinless Deluxe 8oz *NOIR*', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 7.39, Quantity: 29 },
    { CompItemID: 715, ProfileDescription: 'Marinated Anchovies Fresh 2.2#', UnitTypePD: 'Cs', PackSizePD: 8.8, SalesPrice: 7.99, Quantity: 15 },
    { CompItemID: 806, ProfileDescription: 'Clam Juice 1x12 Case', UnitTypePD: 'Cs', PackSizePD: 1, SalesPrice: 56.54, Quantity: 2 },
    { CompItemID: 845, ProfileDescription: 'OYSTER FAT BASTARD LIVE', UnitTypePD: 'Pcs', PackSizePD: 1, SalesPrice: 1.45, Quantity: 6 },
    { CompItemID: 949, ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 8 OZ - OSSETRA ROYAL', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 154.96, Quantity: 12 },
    { CompItemID: 1129, ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 16 OZ - OSSETRA ROYAL', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 320, Quantity: 33 },
    { CompItemID: 1336, ProfileDescription: 'Cold-Smoked Escolar Skin-Off 8oz NCS', UnitTypePD: 'Pcs', PackSizePD: 1, SalesPrice: 7.9, Quantity: 38 },
    { CompItemID: 1339, ProfileDescription: 'GINGER WHITE SUSHI PICKLED 20# BUCKET FRESH', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 26.39, Quantity: 29 },
    { CompItemID: 1388, ProfileDescription: 'WASABI KIZAMI CHOPPED FROZEN 3.5oz', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 5.05, Quantity: 7 },
    { CompItemID: 1410, ProfileDescription: 'Salmon Scottish-Sea 6+ Kg Whole Fresh / *SCALED* (GROSS)', UnitTypePD: 'Pcs', PackSizePD: 15, SalesPrice: 8.92, Quantity: 14 },
    { CompItemID: 1460, ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 1 OZ - OSSETRA ROYAL', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 25, Quantity: 22 },
    { CompItemID: 150, ProfileDescription: 'CRAB MEAT DUNGENESS FRESH 1 LB', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 40.98, Quantity: 34 },
    { CompItemID: 1535, ProfileDescription: 'Sturgeon Whole Head-On Gutted', UnitTypePD: 'Pcs', PackSizePD: 15, SalesPrice: 7.86, Quantity: 6 },
    { CompItemID: 1631, ProfileDescription: 'Clam Whole Cooked Frozen', UnitTypePD: 'Cs', PackSizePD: 10, SalesPrice: 4.2, Quantity: 9 },
    { CompItemID: 1636, ProfileDescription: 'Salad Octopus (Tako Sansai) Japan 4.4# FROZEN', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 49.16, Quantity: 23 },
    { CompItemID: 1646, ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 2 OZ - OSSETRA ROYAL', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 43.01, Quantity: 40 },
    { CompItemID: 1808, ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 1 OZ - KALUGA IMPERIAL', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 26.99, Quantity: 37 },
    { CompItemID: 1809, ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 4 OZ - KALUGA IMPERIAL', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 80, Quantity: 34 },
    { CompItemID: 1884, ProfileDescription: 'Tuna Yellow-Fin Loin #1 Skin-On BLI Fresh', UnitTypePD: 'Lbs', PackSizePD: 1, SalesPrice: 22.71, Quantity: 1 },
    { CompItemID: 1919, ProfileDescription: 'Bass Striped Hybrid Whole Fresh EXTRA-JUMBO / Fillet Skin-Off (GROSS)', UnitTypePD: 'Pcs', PackSizePD: 2.5, SalesPrice: 7.25, Quantity: 20 },
    { CompItemID: 2209, ProfileDescription: 'ROE PRESTIGE CAVIAR SALMON (IKURA) 1KG FROZEN', UnitTypePD: 'Pck', PackSizePD: 2.2, SalesPrice: 34.01, Quantity: 22 },
    { CompItemID: 224, ProfileDescription: 'TUNA BLUEFINA BACK LOIN SKIN-ON BLI FRESH', UnitTypePD: 'Lbs', PackSizePD: 1, SalesPrice: 19.99, Quantity: 21 },
    { CompItemID: 715, ProfileDescription: 'Marinated Anchovies Fresh 2.2#', UnitTypePD: 'Pck', PackSizePD: 2.2, SalesPrice: 10.39, Quantity: 15 },
    { CompItemID: 603, ProfileDescription: 'PRODUCE KAIWARE (RADISH-SPROUTS)', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 1.45, Quantity: 6 },
    { CompItemID: 625, ProfileDescription: 'Tuna Loin Yellow-Fin 30# Frozen', UnitTypePD: 'Cs', PackSizePD: 30, SalesPrice: 9.95, Quantity: 24 },
    { CompItemID: 628, ProfileDescription: 'LOBSTER MEAT CK (CLAW / KNUCKLE) FROZEN', UnitTypePD: 'Cs', PackSizePD: 12, SalesPrice: 43.23, Quantity: 47 },
    { CompItemID: 949, ProfileDescription: 'Roe Sturgeon PRESTIGE Black Caviar 8 OZ - OSSETRA ROYAL', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 160, Quantity: 22 },
    { CompItemID: 1339, ProfileDescription: 'GINGER WHITE SUSHI PICKLED 20# BUCKET FRESH', UnitTypePD: 'Pck', PackSizePD: 1, SalesPrice: 26.39, Quantity: 29 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  filteredInventoryItems() {
    return this.inventoryItems
      .sort((a, b) => a.CompItemID - b.CompItemID) // Sort by CompItemID
      .filter(item => {
        return (!this.filters.CompItemID || item.CompItemID.toString().includes(this.filters.CompItemID)) &&
               (!this.filters.ProfileDescription || item.ProfileDescription.toLowerCase().includes(this.filters.ProfileDescription.toLowerCase())) &&
               (!this.filters.UnitTypePD || item.UnitTypePD.toLowerCase().includes(this.filters.UnitTypePD.toLowerCase())) &&
               (!this.filters.PackSizePD || item.PackSizePD.toString().includes(this.filters.PackSizePD)) &&
               (!this.filters.SalesPrice || item.SalesPrice.toString().includes(this.filters.SalesPrice)) &&
               (!this.filters.Quantity || item.Quantity.toString().includes(this.filters.Quantity));
    });
  }
}

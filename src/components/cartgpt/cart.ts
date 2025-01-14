// types/cart.ts
export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string; // Optional: For product images
  }
  
//import { type } from 'os';

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type Product = {
    id: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
  };

export interface ProductCardProps {
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
  }
  
export interface ProductData {
    id: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export type CartItem = {
    product: Product;
    quantity: number;
  };
  
  export type Cart = {
    items: CartItem[];
  };
  
  export type Order = {
    id: string;
    items: CartItem[];
    total: number;
    status: "pending" | "completed";
  };
  
  export type OrderHistory = {
    orders: Order[];
  };
  
  export type State = {
    user: User | null;
    cart: Cart;
    orderHistory: OrderHistory;
  };
  
  export const initialState: State = {
    user: null,
    cart: {
      items: [],
    },
    orderHistory: {
      orders: [],
    },
  };
  
  export type Action =
    | { type: "login"; user: User }
    | { type: "logout" }
    | { type: "addToCart"; product: Product }
    | { type: "removeFromCart"; product: Product }
    | { type: "checkout" }
    | { type: "clearCart" }
    | { type: "placeOrder"; order: Order };
  
  export function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "login":
        return {
          ...state,
          user: action.user,
        };
      case "logout":
        return {
          ...state,
          user: null,
        };
      case "addToCart":
        return {
          ...state,
          cart: {
            items: [
              ...state.cart.items,
              {
                product: action.product,
                quantity: 1,
              },
            ],
          },
        };
      case "removeFromCart":
        return {
          ...state,
          cart: {
            items: state.cart.items.filter(
              (item) => item.product.id !== action.product.id
            ),
          },
        };
      case "checkout":
        return {
          ...state,
          orderHistory: {
            orders: [
              ...state.orderHistory.orders,
              {
                id: Math.random().toString(36).substr(2, 9),
                items: state.cart.items,
                total: state.cart.items.reduce(
                  (total, item) => total + item.product.price * item.quantity,
                    0 
                ),
                status: "pending",
                },
                ],
                },
                cart: {
                items: [],
                },
                };
                case "clearCart":
                return {
                ...state,
                cart: {
                items: [],
                },
                };
                case "placeOrder":
                  return {
                    ...state,
                    orderHistory: {
                      orders: [...state.orderHistory.orders, action.order],
                    },
                    cart: {
                      items: [],
                    },
                  };
                default:
                  return state;
              }
            }
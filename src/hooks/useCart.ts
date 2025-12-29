import { useReducer, useEffect } from 'react';
import { Product } from '../data/products';
import { CartItem } from '../components/Cart';

type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        const newQuantity = Math.min(20, existingItem.quantity + 1);
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    
    case 'UPDATE_QUANTITY': {
      const validQuantity = Math.max(0, Math.min(20, Math.floor(Math.abs(action.payload.quantity))));
      if (validQuantity <= 0) {
        return state.filter(item => item.id !== action.payload.id);
      }
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: validQuantity }
          : item
      );
    }
    
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload);
    
    case 'CLEAR_CART':
      return [];
    
    case 'LOAD_CART': {
      // Validar datos del localStorage
      if (!Array.isArray(action.payload)) return [];
      return action.payload.filter(item => 
        item && 
        typeof item.id === 'number' && 
        typeof item.name === 'string' && 
        typeof item.price === 'number' && 
        typeof item.quantity === 'number' &&
        item.quantity > 0 && 
        item.quantity <= 20
      );
    }
    
    default:
      return state;
  }
};

export const useCart = () => {
  const [items, dispatch] = useReducer(cartReducer, []);

  // Cargar carrito desde localStorage al inicializar
  useEffect(() => {
    const savedCart = localStorage.getItem('bulldog-cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          dispatch({ type: 'LOAD_CART', payload: parsedCart });
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        localStorage.removeItem('bulldog-cart');
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    try {
      localStorage.setItem('bulldog-cart', JSON.stringify(items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [items]);

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    total
  };
};
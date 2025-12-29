import { useState } from 'react';
import { Product } from '../data/products';

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

export const Cart = ({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Cart Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
        </svg>
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-dark-800 rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b border-dark-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-100">Carrito de Compras</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(80vh-80px)]">
              <CartContent 
                items={items}
                total={total}
                onUpdateQuantity={onUpdateQuantity}
                onRemoveItem={onRemoveItem}
                onCheckout={() => {
                  onCheckout();
                  setIsOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface CartContentProps {
  items: CartItem[];
  total: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

const CartContent = ({ items, total, onUpdateQuantity, onRemoveItem, onCheckout }: CartContentProps) => {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-gray-400 text-center py-8">
            Tu carrito está vacío
          </p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-dark-700 rounded-lg p-3">
                <h4 className="text-sm font-medium text-gray-100 mb-2">
                  {item.name}
                </h4>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary-400 font-semibold">
                    ${item.price.toLocaleString('es-AR')}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="w-6 h-6 bg-dark-600 hover:bg-dark-500 rounded text-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="text-gray-100 w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 bg-dark-600 hover:bg-dark-500 rounded text-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">
                    Subtotal: ${(item.price * item.quantity).toLocaleString('es-AR')}
                  </span>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {items.length > 0 && (
        <div className="border-t border-dark-700 pt-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-100">Total:</span>
            <span className="text-xl font-bold text-primary-400">
              ${total.toLocaleString('es-AR')}
            </span>
          </div>
          <button
            onClick={onCheckout}
            className="btn-primary w-full"
          >
            Confirmar Pedido
          </button>
        </div>
      )}
    </div>
  );
};
import { useState, useMemo, useEffect } from 'react';
import { products, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductFilter } from './ProductFilter';

interface ProductsProps {
  onAddToCart: (product: Product) => void;
}

export const Products = ({ onAddToCart }: ProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = useMemo(() => {
    return Array.from(new Set(products.map(product => product.category)));
  }, []);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    
    // Manejar categoría especial "Accesorios"
    if (selectedCategory === 'Accesorios') {
      return products.filter(product => 
        ['Sedas', 'Bandejas', 'Bongs', 'Macetas'].includes(product.category)
      );
    }
    
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  // Escuchar eventos de filtrado desde el footer
  useEffect(() => {
    const handleFilterProducts = (event: CustomEvent) => {
      const category = event.detail;
      setSelectedCategory(category);
    };

    window.addEventListener('filterProducts', handleFilterProducts as EventListener);
    
    return () => {
      window.removeEventListener('filterProducts', handleFilterProducts as EventListener);
    };
  }, []);

  return (
    <section id="productos" className="min-h-screen flex flex-col justify-center px-4 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-400 font-display">
          {selectedCategory === 'Accesorios' ? 'Accesorios' : 
           selectedCategory ? selectedCategory : 'Nuestros Productos'}
        </h2>
        
        <p className="text-center text-gray-300 mb-12 text-lg">
          Agregá productos al carrito y hacé tu pedido por WhatsApp
        </p>
        
        <ProductFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No se encontraron productos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
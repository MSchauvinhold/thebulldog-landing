import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const handleAddToCart = () => {
    try {
      // Validar que el producto tenga datos válidos
      if (!product || !product.id || !product.name || !product.price || product.price < 0) {
        console.error('Invalid product data:', product);
        return;
      }
      onAddToCart(product);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="card p-3 md:p-6 h-full flex flex-col">
      <div className="aspect-square mb-2 md:mb-4 bg-dark-700 rounded-lg overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
          }}
        />
      </div>
      
      <h3 className="text-sm md:text-lg font-semibold text-gray-100 mb-1 md:mb-2 leading-tight">
        {product.name}
      </h3>
      
      <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2 flex-grow">
        {product.description}
      </p>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-auto">
        <span className="text-lg md:text-2xl font-bold text-primary-400">
          ${product.price.toLocaleString('es-AR')}
        </span>
        
        <button 
          onClick={handleAddToCart}
          className="btn-primary text-xs md:text-sm px-3 md:px-4 py-2 w-full md:w-auto"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
import { config } from '../config';

export const Banner = () => {
  return (
    <div className="bg-primary-600 text-white py-2 overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm font-medium">
          🚚 Envíos gratis a partir de ${config.freeShippingMinAmount.toLocaleString('es-AR')}
        </span>
      </div>
    </div>
  );
};
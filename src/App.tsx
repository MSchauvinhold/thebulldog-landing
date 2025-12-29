import { useState } from 'react';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useCart } from './hooks/useCart';

function App() {
  const { items, addItem, updateQuantity, removeItem, total } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    if (items.length > 0) {
      setShowCheckout(true);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <Banner />
      <Header />
      
      <main>
        <Hero />
        <InfoSection />
        <Products onAddToCart={addItem} />
        <Contact />
      </main>

      <Cart 
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={handleCheckout}
      />

      {showCheckout && (
        <Checkout 
          items={items}
          total={total}
          onClose={() => setShowCheckout(false)}
        />
      )}
      
      <Footer />
    </div>
  );
}

export default App;
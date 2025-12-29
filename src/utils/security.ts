// Utilidades de seguridad para validación de datos

export const sanitizeString = (str: string, maxLength: number = 100): string => {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, maxLength);
};

export const validateQuantity = (quantity: number): number => {
  if (typeof quantity !== 'number' || isNaN(quantity)) return 1;
  return Math.max(1, Math.min(20, Math.floor(Math.abs(quantity))));
};

export const validatePrice = (price: number): boolean => {
  return typeof price === 'number' && !isNaN(price) && price >= 0;
};

export const validateProductId = (id: number): boolean => {
  return typeof id === 'number' && !isNaN(id) && id > 0;
};

export const isValidSectionId = (sectionId: string): boolean => {
  const validSections = ['inicio', 'guias', 'productos', 'contacto'];
  return validSections.includes(sectionId);
};

export const sanitizeLocalStorage = (key: string): any => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    const parsed = JSON.parse(item);
    return parsed;
  } catch (error) {
    console.error(`Error parsing localStorage item ${key}:`, error);
    localStorage.removeItem(key);
    return null;
  }
};

export const safeLocalStorageSet = (key: string, value: any): boolean => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Error setting localStorage item ${key}:`, error);
    return false;
  }
};
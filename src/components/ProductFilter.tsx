interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductFilter = ({ categories, selectedCategory, onCategoryChange }: ProductFilterProps) => {
  return (
    <div className="mb-8">
      <label htmlFor="category-filter" className="block text-sm font-medium text-gray-300 mb-2">
        Filtrar por categoría:
      </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="input-field max-w-xs"
      >
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
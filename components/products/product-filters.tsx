import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
}

interface ProductFiltersProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export default function ProductFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <div className="bg-card rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <div className="space-y-2">
        <Button
          variant="ghost"
          className={`w-full justify-start ${!activeCategory ? 'bg-[#ffc733]/10 text-[#ffc733] font-medium' : ''}`}
          onClick={() => onCategoryChange(null)}
        >
          All Products
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className={`w-full justify-start ${
              activeCategory === category.id ? 'bg-[#ffc733]/10 text-[#ffc733] font-medium' : ''
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
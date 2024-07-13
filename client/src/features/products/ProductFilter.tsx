import { useEffect, useState } from "react";
import { useCategories } from "../categories/useCategories";
import { ICategory } from "../../services/apiCategories";

interface ProductFilterProps {
  onFilter: (filters: {
    searchTerm: string;
    categoryFilter: string;
    minPrice: string;
    maxPrice: string;
    sortOrder: string;
  }) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilter }) => {
  const { categories } = useCategories();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    onFilter({
      searchTerm,
      categoryFilter,
      minPrice,
      maxPrice,
      sortOrder,
    });
  }, [categoryFilter, maxPrice, minPrice, onFilter, searchTerm, sortOrder]);

  const handleClearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setMinPrice("");
    setMaxPrice("");
    setSortOrder("");
    onFilter({
      searchTerm: "",
      categoryFilter: "",
      minPrice: "",
      maxPrice: "",
      sortOrder: "",
    });
  };

  return (
    <div className="my-10 px-6 py-8 bg-[#2d2e2f]  rounded-xl shadow-xl ">
      <div className="w-full">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories?.map((category: ICategory) => (
            <option value={category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <button
          onClick={handleClearFilters}
          className="p-2 bg-red-600 text-white font-semibold  rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-800"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;

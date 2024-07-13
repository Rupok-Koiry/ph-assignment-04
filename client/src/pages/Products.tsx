import { useState, useEffect, useCallback } from "react";
import ProductItem from "../features/products/ProductItem";
import ProductFilter from "../features/products/ProductFilter";
import { useProducts } from "../features/products/useProducts";
import { IProduct } from "../services/apiProducts";
import SectionTitle from "../components/SectionTitle";
import Spinner from "../components/Spinner";

const Products = () => {
  const { isLoading, error, products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = useCallback(
    (filters: {
      searchTerm: string;
      categoryFilter: string;
      minPrice: string;
      maxPrice: string;
      sortOrder: string;
    }) => {
      const { searchTerm, categoryFilter, minPrice, maxPrice, sortOrder } =
        filters;

      const filtered = products.filter((product: IProduct) => {
        const matchesSearch =
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter
          ? product.category._id === categoryFilter
          : true;
        const matchesPrice =
          (!minPrice || product.price >= parseFloat(minPrice)) &&
          (!maxPrice || product.price <= parseFloat(maxPrice));
        return matchesSearch && matchesCategory && matchesPrice;
      });

      const sorted = filtered.sort((a: IProduct, b: IProduct) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
      });

      setFilteredProducts(sorted);
    },
    [products]
  );

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <h2 className="text-center text-2xl font-bold text-red-500">
        {error.message}
      </h2>
    );

  return (
    <section className="border-b border-black py-10">
      <SectionTitle
        title="All Products"
        description="Explore our extensive range of top-quality camping gear and accessories, carefully curated to enhance your outdoor adventures."
        className="text-center"
      />

      <ProductFilter onFilter={handleFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts?.map((product: IProduct) => (
          <ProductItem product={product} key={product._id} />
        ))}
      </div>
    </section>
  );
};

export default Products;

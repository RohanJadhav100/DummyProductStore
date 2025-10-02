import { useEffect, useState } from "react";
import FilterSidebar from "./components/FilterSidebar";
import MainGridCard from "./components/MainGridCard";

function App() {
  const [productData, setProductData] = useState([]);
  const [filteredProduct, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFilterChange = (filters) => {
    let filteredData = [...productData];

    // Search Product Logic

    if (filters.searchQuery) {
      filteredData = filteredData.filter((product) => {
        return product?.title
          .toLowerCase()
          .includes(filters.searchQuery.toLowerCase());
      });
    }

    // Category Filter Logic

    if (filters.selectedCategory !== "all") {
      filteredData = filteredData.filter((product) => {
        return product?.category == filters.selectedCategory;
      });
    }

    // Price Filter Logic

    if (filters.minPrice !== null) {
      filteredData = filteredData.filter((product) => {
        return product.price >= filters.minPrice;
      });
    }
    if (filters.maxPrice !== null) {
      filteredData = filteredData.filter((product) => {
        return product.price <= filters.maxPrice;
      });
    }

    // Rating Filters
    if (filters.rating4Plus) {
      filteredData = filteredData.filter((product) => {
        return product?.rating.rate >= 4;
      });
    } else if (filters.rating3Plus) {
      filteredData = filteredData.filter((product) => {
        return product?.rating.rate >= 3;
      });
    }

    setFilteredProducts(filteredData);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed To Fetch Products");
        }
        const result = await response.json();

        setProductData(result);
        setFilteredProducts(result);
        setLoading(false);
      } catch (error) {
        console.log("Error --->", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex h-screen">
        <FilterSidebar
          onFilterChange={handleFilterChange}
          products={productData}
        />
        <MainGridCard loading={loading} products={filteredProduct} />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { CartDrawer } from "./components/CartDrawer";
import { ALLOWED_CATEGORIES } from "./configs/categories";
import { useProducts } from "./hooks/useProducts";

function App() {
  const LIMIT = 12;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const {
    products,
    hasMore,
    loading,
    fetchNextPage
  } = useProducts({
    limit: LIMIT,
    search,
    category
  });

  return (
    <>
      <Header
        onSearch={setSearch}
        categories={ALLOWED_CATEGORIES}
        selectedCategory={category}
        onCategorySelect={setCategory}
        onCartClick={() => setIsCartOpen(true)}
      />

      <Home
        products={products}
        loadMore={fetchNextPage}
        hasMore={hasMore}
        loading={loading}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default App;

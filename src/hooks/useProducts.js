import { useState, useEffect } from "react";
import { getProducts } from "../services/productsService";

export function useProducts({ limit, search, category }) {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  async function fetchFirstPage() {
    setLoading(true);
    setSkip(0);
    setHasMore(true);

    const data = await getProducts({
      limit,
      skip: 0,
      search,
      category
    });

    setProducts(data.products);
    setSkip(limit);
    setHasMore(limit < data.total);
    setLoading(false);
  }

  async function fetchNextPage() {
    if (loading || !hasMore) return;

    setLoading(true);

    const data = await getProducts({
      limit,
      skip,
      search,
      category
    });

    setProducts(prev => [...prev, ...data.products]);
    setSkip(prev => prev + limit);
    setHasMore(skip + limit < data.total);
    setLoading(false);
  }

  useEffect(() => {
    fetchFirstPage();
  }, [search, category]);

  return {
    products,
    hasMore,
    loading,
    fetchNextPage
  };
}

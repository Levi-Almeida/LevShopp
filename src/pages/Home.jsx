import { useEffect, useState, useRef } from "react";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { getProducts } from "../services/productsService";


export function Home({ products, loadMore, hasMore, loading }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading, loadMore]);

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>

      {hasMore && (
        <div ref={loaderRef} className="h-20 flex items-center justify-center">
          {loading && <span>Carregando mais produtos...</span>}
        </div>
      )}
    </>
  );
}

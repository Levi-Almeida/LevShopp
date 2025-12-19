import { useEffect, useState, useRef } from "react";
import { ProductCard } from "../components/ProductCard";
import { EmptyState } from "../components/emptyResult";


export function Home({ products, loadMore, hasMore, loading }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!hasMore || loading || products.length === 0) return;

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
  }, [hasMore, loading, products.length, loadMore]);

  console.log(products)

  return (

    <>
      {

        (products?.length > 0) ? (
          <main className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </main>
        ) : (
          <main className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <EmptyState
              title="Nenhum produto encontrado"
              description="Tente ajustar os filtros ou fazer uma nova busca."
              actionLabel="Limpar filtros"
            />
          </main>
        )
      }



      {hasMore && (
        <div ref={loaderRef} className="h-20 flex items-center justify-center">
          {loading && <span>Carregando mais produtos...</span>}
        </div>
      )}
    </>
  );
}

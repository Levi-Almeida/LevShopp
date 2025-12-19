import { useState, useEffect, useRef } from "react";
import { getProducts } from "../services/productsService";

export function useProducts({ limit, search, category }) {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const didInit = useRef(false);


  async function fetchFirstPage() {
    console.log("primeira busca -------------" + skip + " - " + limit)
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


useEffect(() => {
  if (didInit.current) return;
  didInit.current = true;
  fetchFirstPage();
}, [search, category]);

  

  async function fetchNextPage() {
    if (loading || !hasMore || skip === 0) return;
    console.log("proxima -------------" + skip + " - " + limit)
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

  export function calcDiscountedPrice(price, discountPercentage){
    let discountedPrice = (price) - (price * (discountPercentage / 100))

    return discountedPrice
  }

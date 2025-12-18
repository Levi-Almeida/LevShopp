import { useCart } from "../context/CartContext";
import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  const [added, setAdded] = useState(false);

  console.log(product.title)
  console.log(product.discountPercentage)

  let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100))

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 500);
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: "BRL"
    }).format(price);
  }

  return (
    <div className="relative bg-white rounded-lg shadow-[rgba(50,50,93,0.05)_0px_2px_5px_-1px,rgba(0,0,0,0.05)_0px_1px_3px_-1px] transition-all duration-300 hover:shadow-[rgba(50,50,93,0.1)_0px_2px_5px_-1px,rgba(0,0,0,0.1)_0px_1px_20px_-1px]">

      {/* Category */}
      <div className="absolute -left-1.25 top-6 bg-orange-500 text-white text-[13px] capitalize px-4 py-0.5 shadow-[rgba(0,0,0,0.05)_0px_1px_2px,rgba(0,0,0,0.24)_0px_1px_2px]">
        {product?.category}

        <span className="absolute left-0 top-full -translate-y-1.25 w-0 h-0 
      border-t-[5px] border-b-[5px] border-t-transparent border-b-transparent 
      border-r-[5px] border-r-orange-500" />
      </div>

      {/* Image */}
      <div className="relative h-62.5 overflow-hidden rounded-t-lg mb-3 pb-1">
        <img
          className="w-full h-full object-cover"
          src={product?.images[0]}
          alt={product?.title}
        />

        {/* Add to cart button */}
        <button
          onClick={handleAdd}
          className={`
      absolute bottom-3 right-3
      w-11 h-11 rounded-full
      flex items-center justify-center
      text-white shadow-lg
      transition-all duration-300
      ${added
              ? "bg-green-600 scale-110"
              : "bg-amber-600 hover:bg-amber-700 hover:scale-105"}
    `}
        >
          {added ?
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd" />
            </svg>
            :
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.268 6A2 2 0 0 0 14 9h1v1a2 2 0 0 0 3.04 1.708l-.311 1.496a1 1 0 0 1-.979.796H8.605l.208 1H16a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L4.686 5H4a1 1 0 0 1 0-2h1.5a1 1 0 0 1 .979.796L6.939 6h5.329Z" />
              <path d="M18 4a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8h2a1 1 0 1 0 0-2h-2V4Z" />
            </svg>
          }
        </button>
      </div>

      {/* Info */}
      <div className="px-3 pb-5 text-center font-manrope opacity-80 text-sm">

        {/* Brand */}
        <div className="border-b border-black/5 pb-2">
          <span className="mr-1">Brand:</span>
          <span className="font-bold">{product?.brand}</span>
        </div>

        {/* Title */}
        <div className="py-2 text-[14.5px] font-medium tracking-wide">
          {product?.title}
        </div>

        {/* Price */}
        <div className="relative flex items-center justify-center gap-4">

          <span className="text-xs opacity-70 line-through">
            {formatPrice(product?.price)}
          </span>

          <span className="text-base font-bold">
            {formatPrice(discountedPrice)}
          </span>

          <span className="text-[13px] font-semibold font-poppins text-orange-600">
            ({product.discountPercentage}% Off)
          </span>

          {/* underline */}
          <span className="absolute top-[calc(100%+6px)] h-px w-15 bg-orange-400" />


        </div>

      </div>
    </div>

  );
}


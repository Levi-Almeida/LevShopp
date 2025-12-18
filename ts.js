    <div className="relative bg-white rounded-lg shadow-[rgba(50,50,93,0.05)_0px_2px_5px_-1px,rgba(0,0,0,0.05)_0px_1px_3px_-1px] transition-all duration-300 hover:shadow-[rgba(50,50,93,0.1)_0px_2px_5px_-1px,rgba(0,0,0,0.1)_0px_1px_20px_-1px]">

      {/* Category */}
      <div className="absolute -left-1.25 top-6 bg-orange-500 text-white text-[13px] capitalize px-4 py-0.5 shadow-[rgba(0,0,0,0.05)_0px_1px_2px,rgba(0,0,0,0.24)_0px_1px_2px]">
        {product?.category}

        <span className="absolute left-0 top-full -translate-y-1.25 w-0 h-0 
      border-t-[5px] border-b-[5px] border-t-transparent border-b-transparent 
      border-r-[5px] border-r-orange-500" />
      </div>

      {/* Image */}
      <div className="h-62.5 overflow-hidden rounded-t-lg mb-3 pb-1">
        <img
          className="w-full h-full object-cover"
          src={product?.images[0]}
          alt={product?.title}
        />
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
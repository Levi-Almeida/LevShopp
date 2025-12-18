import { useCart } from "../context/CartContext";

export function CartDrawer({ isOpen, onClose }) {
  const { cartItems, totalPrice, removeFromCart, clearCart, addQuantity, removeQuantity } = useCart();

  return (
    <>

      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-96 bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col`}
      >
        {/* Header */}
        <div className="p-5 border-b flex justify-between items-center text-white bg-amber-600">
          <div className="flex items-center justify-center gap-1">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
          </svg>
          <h2 className="text-xl  font-semibold flex gap-">
            Meu carrinho</h2>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
          >
            ✕
          </button>
        </div>

        {/* Lista */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 && (
            <div className="text-center text-gray-500 mt-20">
              <p className="text-lg">🛒</p>
              <p>Seu carrinho está vazio</p>
            </div>
          )}

          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex gap-4 bg-gray-50 p-3 rounded-lg"
            >
              {/* Imagem */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />

              {/* Info */}
              <div className="flex-1">
                <p className="font-medium text-sm line-clamp-2">
                  {item.title}
                </p>

                {/* Controles */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => removeQuantity(item.id)}
                    className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-gray-200 transition"
                  >
                    −
                  </button>

                  <span className="text-sm font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => addQuantity(item.id)}
                    className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-600 hover:underline mt-1"
                >
                  Remover
                </button>
              </div>

              {/* Subtotal */}
              <div className="text-sm font-semibold">
                R$ {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-5">
            <div className="flex justify-between font-semibold mb-4">
              <span>Total</span>
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition font-medium">
              Finalizar compra
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-2 text-sm text-gray-500 hover:underline"
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

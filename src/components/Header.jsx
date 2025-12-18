import { useCart } from "../context/CartContext";



export function Header({
    onSearch,
    categories,
    selectedCategory,
    onCategorySelect,
    onCartClick }) {

    const { totalItems } = useCart()

    

    return (
        <header className="bg-amber-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between gap-3.5">


                <div className="flex items-center gap-3 cursor-pointer">
                    <div className="bg-white/20 p-2 rounded-lg">
                        <svg
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    <span className="text-xl tracking-tight">
                        <span className="font-extrabold">Levi</span>
                        <span className="font-light">Shop</span>
                    </span>
                </div>

                {/* Search */}
                <div className="flex-1 relative items-center justify-center">
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        onChange={e => onSearch(e.target.value)}
                        className="w-full py-3 pl-4 pr-12 rounded-md text-gray-800 focus:outline-none "
                    />
                    <span className="absolute right-4 top-6 -translate-y-1/2 text-gray-500">
                        <svg class="w-6 h-6 text-amber-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="1.9" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>


                    </span>

                    {/* Linha de categorias */}
                    <div className="bg-amber-600">
                        <div className="max-w-7xl  flex gap-6 overflow-x-auto">
                            <button
                                onClick={() => onCategorySelect("")}
                                className={`whitespace-nowrap font-medium ${selectedCategory === ""
                                    ? "text-white underline underline-offset-4"
                                    : "text-white/80 hover:text-white"
                                    }`}
                            >
                                Todas
                            </button>

                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => onCategorySelect(category)}
                                    className={`whitespace-nowrap font-medium ${selectedCategory === category
                                        ? "text-white underline underline-offset-4"
                                        : "text-white/80 hover:text-white"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>


                </div>


                <div className="flex items-center gap-4">
                    <button className="relative hover:bg-white/20 p-2 rounded-lg transition"
                        onClick={onCartClick}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                        </svg>

                        <span className="absolute -top-1 -right-1 bg-red-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {totalItems}
                        </span>
                    </button>
                </div>



            </div>


        </header>
    );
}

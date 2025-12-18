export function CategoryBar({ categories, selected, onSelect }) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex gap-6 overflow-x-auto">

        <button
          onClick={() => onSelect("")}
          className={`whitespace-nowrap font-medium ${
            selected === ""
              ? "text-amber-600"
              : "text-gray-600 hover:text-amber-600"
          }`}
        >
          Todas
        </button>

        {categories.map(category => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`whitespace-nowrap font-medium ${
              selected === category
                ? "text-amber-600"
                : "text-gray-600 hover:text-amber-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

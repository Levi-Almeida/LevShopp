export function Filters({
  search,
  setSearch,
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  minRating,
  setMinRating,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-wrap gap-4">

      {/* Busca por nome */}
      <input
        type="text"
        placeholder="Buscar produto..."
        className="border p-2 rounded w-full sm:w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Categoria */}
      <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Todas categorias</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrâncias</option>
        <option value="skincare">Skincare</option>
      </select>

      {/* Preço máximo */}
      <input
        type="number"
        placeholder="Preço máximo"
        className="border p-2 rounded w-40"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      {/* Rating mínimo */}
      <input
        type="number"
        step="0.1"
        min="0"
        max="5"
        placeholder="Rating mínimo"
        className="border p-2 rounded w-40"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
      />
    </div>
  );
}

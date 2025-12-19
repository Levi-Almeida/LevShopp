export function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
 
      <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7v4a1 1 0 001 1h3m10-6v4a1 1 0 01-1 1h-3M7 16h10M7 20h10"
          />
        </svg>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>
      <p className="text-gray-500 max-w-sm mb-6">
        {description}
      </p>

    </div>
  );
}

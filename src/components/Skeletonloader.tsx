export function SkeletonLoader() {
    return (
      <div className="animate-pulse bg-gray-100 rounded-lg shadow-md">
        <div className="aspect-square bg-gray-200 rounded-t-lg" />
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
    );
  }
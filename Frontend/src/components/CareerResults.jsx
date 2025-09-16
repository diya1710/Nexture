import CareerCard from './CareerCard';

const CareerResults = ({ 
  careers, 
  bookmarkedCareers, 
  onBookmark, 
  onFilter, 
  activeFilter, 
  onReset,
  formData 
}) => {
  const filters = [
    { key: 'all', label: 'All Results' },
    { key: 'bookmarked', label: 'Bookmarked' },
    { key: 'technology', label: 'Technology' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'business', label: 'Business' },
    { key: 'creative', label: 'Creative' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Career Matches</h2>
        <p className="text-gray-600">Based on your interests in {formData?.interests}</p>
        <button
          onClick={onReset}
          className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Start New Search
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => onFilter(filter.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter.key
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            {filter.label}
            {filter.key === 'bookmarked' && bookmarkedCareers.length > 0 && (
              <span className="ml-1 bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                {bookmarkedCareers.length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Results */}
      {careers.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-gray-600 mb-2">No careers found</h3>
          <p className="text-gray-500">Try adjusting your filters or start a new search</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map(career => (
            <CareerCard
              key={career.id}
              career={career}
              isBookmarked={bookmarkedCareers.includes(career.id)}
              onBookmark={() => onBookmark(career.id)}
            />
          ))}
        </div>
      )}

      {/* Results count */}
      <div className="text-center text-gray-500 text-sm">
        Showing {careers.length} career{careers.length !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default CareerResults;
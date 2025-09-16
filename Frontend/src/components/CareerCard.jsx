import { useState } from 'react';

const CareerCard = ({ career, isBookmarked, onBookmark }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getGrowthColor = (growth) => {
    if (growth >= 80) return 'text-green-600 bg-green-100';
    if (growth >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 leading-tight">
            {career.title}
          </h3>
          <button
            onClick={onBookmark}
            className={`p-2 rounded-full transition-colors ${
              isBookmarked 
                ? 'text-red-500 hover:text-red-600' 
                : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <svg className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Emotional fit tagline */}
        <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
          {career.emotionalFit}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {isExpanded ? career.description : `${career.description.substring(0, 120)}...`}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 ml-1 font-medium"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        </p>
      </div>

      {/* Skills */}
      <div className="px-6 pb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Required Skills</h4>
        <div className="flex flex-wrap gap-1">
          {career.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {skill}
            </span>
          ))}
          {career.skills.length > 3 && (
            <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs">
              +{career.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-500">Growth Potential</span>
            <div className="flex items-center mt-1">
              <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                <div
                  className={`h-2 rounded-full ${
                    career.growthPotential >= 80 ? 'bg-green-500' :
                    career.growthPotential >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${career.growthPotential}%` }}
                ></div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getGrowthColor(career.growthPotential)}`}>
                {career.growthPotential}%
              </span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-gray-500">Salary Range</div>
            <div className="text-sm font-semibold text-gray-800">{career.salaryRange}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
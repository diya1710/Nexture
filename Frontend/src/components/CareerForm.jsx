import { useState } from 'react';

const CareerForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    interests: '',
    skills: '',
    workStyle: '',
    goals: ''
  });

  const [errors, setErrors] = useState({});

  const workStyleOptions = [
    'Remote Work',
    'Office Environment',
    'Hybrid',
    'Travel Required',
    'Flexible Hours',
    'Team Collaboration',
    'Independent Work'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.interests.trim()) {
      newErrors.interests = 'Please share your interests';
    }
    if (!formData.skills.trim()) {
      newErrors.skills = 'Please list your skills';
    }
    if (!formData.workStyle) {
      newErrors.workStyle = 'Please select a work style';
    }
    if (!formData.goals.trim()) {
      newErrors.goals = 'Please describe your goals';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What are your interests? *
          </label>
          <textarea
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="e.g., technology, healthcare, creative arts, business..."
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.interests ? 'border-red-500' : 'border-gray-300'
            }`}
            rows="3"
          />
          {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What skills do you have? *
          </label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., programming, communication, problem-solving, leadership..."
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.skills ? 'border-red-500' : 'border-gray-300'
            }`}
            rows="3"
          />
          {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred work style *
          </label>
          <select
            name="workStyle"
            value={formData.workStyle}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.workStyle ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select your preferred work style</option>
            {workStyleOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.workStyle && <p className="text-red-500 text-sm mt-1">{errors.workStyle}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What are your long-term career goals? *
          </label>
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            placeholder="e.g., become a team leader, start my own business, make a social impact..."
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.goals ? 'border-red-500' : 'border-gray-300'
            }`}
            rows="3"
          />
          {errors.goals && <p className="text-red-500 text-sm mt-1">{errors.goals}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Finding Your Perfect Careers...
            </div>
          ) : (
            'Explore Career Options'
          )}
        </button>
      </form>
    </div>
  );
};

export default CareerForm;
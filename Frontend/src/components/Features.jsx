const features = [
  {
    icon: "🧠",
    title: "AI Bias Detection",
    description: "Advanced algorithms spot 20+ cognitive biases including confirmation bias, anchoring, and availability heuristic."
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    description: "Get detailed explanations with psychology-backed insights and personalized bias patterns analysis."
  },
  {
    icon: "🚀",
    title: "Decision Optimizer",
    description: "Receive actionable suggestions to reframe choices and make evidence-based, bias-free decisions."
  }
];

function Features() {
  return (
    <section
      id="features"
      className="py-32 px-8 rounded-t-3xl shadow-2xl border-t-4" 
      style={{background: 'linear-gradient(180deg, #ffffff, #f9fafb)', borderTopColor: '#c084fc'}}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full font-medium mb-4" style={{backgroundColor: '#f3e8ff', color: '#7c3aed'}}>
            ✨ Powerful Features
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Why Choose BiasDetector?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge AI to identify and overcome cognitive biases in your decision-making process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center border-2 hover:border-opacity-50 relative overflow-hidden min-h-[400px] flex flex-col justify-between"
              style={{
                background: index === 0 ? 'linear-gradient(135deg, #fdf2f8, #fce7f3)' : 
                          index === 1 ? 'linear-gradient(135deg, #eff6ff, #dbeafe)' : 
                          'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                borderColor: index === 0 ? '#e879f9' : index === 1 ? '#60a5fa' : '#4ade80'
              }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: index === 0 ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' :
                            index === 1 ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' :
                            'linear-gradient(135deg, #10b981, #059669)'
                }}
              >
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
              <div className="mt-6">
                <button 
                  className="px-6 py-2 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, #8b5cf6, #ec4899)' :
                              index === 1 ? 'linear-gradient(135deg, #3b82f6, #06b6d4)' :
                              'linear-gradient(135deg, #10b981, #059669)'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
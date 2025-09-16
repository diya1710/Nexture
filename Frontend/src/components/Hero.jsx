import React from "react";

const Hero = ({ onExploreCareer }) => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Moving background image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bgMove"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1677444209090-79a9d6d94c4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            KEIS-Powered Cognitive Bias Detector
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Make smarter decisions by detecting and overcoming hidden cognitive
            biases in real-time.
          </p>
          <div className="space-x-4 relative z-20">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-800 rounded-full text-lg shadow-lg transition duration-300">
              🚀 Get Started
            </button>
            <button 
              onClick={() => {
                alert('Button clicked!');
                onExploreCareer();
              }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-800 rounded-full text-lg shadow-lg transition duration-300"
            >
              🎯 Explore Career
            </button>
          </div>
        </div>
      </div>

      {/* Animation for background movement */}
      <style jsx>{`
        @keyframes bgMove {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 50px 50px;
          }
          100% {
            background-position: 0 0;
          }
        }
        .animate-bgMove {
          animation: bgMove 20s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Hero;

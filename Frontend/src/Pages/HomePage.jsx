import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 digital-grid opacity-30"></div>
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 animate-pulse"></div>
      
      {/* Floating Career Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating absolute top-20 left-10 text-6xl opacity-20">💼</div>
        <div className="floating absolute top-40 right-20 text-4xl opacity-20">🎓</div>
        <div className="floating absolute bottom-40 left-20 text-5xl opacity-20">🚀</div>
        <div className="floating absolute top-60 left-1/3 text-3xl opacity-20">💡</div>
        <div className="floating absolute bottom-60 right-1/3 text-4xl opacity-20">📈</div>
        <div className="floating absolute top-1/3 right-10 text-5xl opacity-20">🎯</div>
      </div>
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 pt-24 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-white">
            {/* Animated Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-10 drop-shadow-2xl text-glow responsive-text">
              <span className="inline-block animate-bounce" style={{animationDelay: '0s'}}>Find Your</span>
              <span className="text-yellow-300 inline-block animate-bounce glow-purple px-4 gradient-text" style={{animationDelay: '0.2s'}}>Dream</span>
              <br />
              <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>Career</span>
              <span className="text-green-300 inline-block animate-bounce glow-blue px-4 gradient-text" style={{animationDelay: '0.6s'}}>Path</span>
            </h1>
            
            {/* Enhanced Description */}
            <p className="text-2xl md:text-4xl mb-16 opacity-90 drop-shadow-lg max-w-5xl mx-auto leading-relaxed">
              <span className="text-cyan-300">AI-powered</span> career guidance platform to discover your 
              <span className="text-yellow-300"> perfect career</span> and build your professional future.
            </p>
            
            {/* Primary CTA */}
            <div className="flex justify-center items-center mt-4 mb-24">
              <button className="group px-12 py-6 border-2 border-white text-white font-bold rounded-full text-2xl hover:bg-white hover:text-green-700 transition-all duration-300 shadow-2xl glow-blue">
                <span className="flex items-center gap-3">
                  📚 Explore Careers
                  <span className="group-hover:rotate-12 transition-transform">💡</span>
                </span>
              </button>
            </div>
            
            {/* Sliding Carousel */}
            <Carousel />
          </div>
        </div>
      </div>
      

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;

function Carousel() {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop",
      alt: "Career assessment image",
      caption: "Discover career paths tailored to you",
      label: "Career Assessment",
      anchor: "#assessments",
    },
    {
      src: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1600&q=80&auto=format&fit=crop",
      alt: "Job matching image",
      caption: "Match with roles using AI insights",
      label: "Job Matching",
      anchor: "#careers",
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80&auto=format&fit=crop",
      alt: "Career growth collaboration image",
      caption: "Grow skills for your next promotion",
      label: "Career Growth",
      anchor: "#resources",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isPaused, slides.length]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'ArrowLeft') {
        setIndex((i) => (i - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setIndex((i) => (i + 1) % slides.length);
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [slides.length]);

  return (
    <div
      className="relative max-w-7xl mx-auto mt-20 px-4 md:px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl">
        {/* Sliding track */}
        <div className="relative w-full h-[50vh] md:h-[60vh] min-h-[320px] md:min-h-[480px] group">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.label} className="min-w-full h-full relative">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover block bg-gray-200"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            ))}
          </div>

          {/* Prev/Next Arrows */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
            className="z-20 absolute left-3 md:left-4 top-4 md:top-6 p-3 md:p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors shadow-lg"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="z-20 absolute left-3 md:left-4 top-14 md:top-20 p-3 md:p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors shadow-lg"
          >
            ›
          </button>

          {/* Overlay content on each slide */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <div className="pointer-events-auto bg-black/45 text-white text-sm md:text-base rounded-lg inline-block px-3 py-2 max-w-xl">
                {slides[index].caption}
              </div>
              <div className="pointer-events-auto flex flex-wrap gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.label}
                    onClick={() => setIndex(i)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                      i === index
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : "bg-white/90 text-emerald-700 border-emerald-200 hover:bg-white"
                    }`}
                    aria-label={`Show ${slide.label}`}
                  >
                    {slide.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

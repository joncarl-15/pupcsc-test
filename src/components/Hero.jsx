import React from 'react'
import backgroundImageSrc from '../Picture/csc-background.jpg'

const Hero = () => {
  const backgroundImage = `url('${backgroundImageSrc}')`

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Blurred Overlay (optional - can be adjusted or removed) */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl animate-scale-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-down">
            PUP Lopez Central Student Council
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 animate-fade-in-up stagger-1">
            TALINO, TAPANG, AT PANININDIGAN NG MGA ISKOLAR NG BAYAN.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            The official student governing body of the Polytechnic University of the Philippines Lopez, Quezon Campus
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up stagger-3">
            <a
              href="#about-csc"
              className="px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-orange-50 transition-all transform hover:scale-110 hover:shadow-xl shadow-lg smooth-transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


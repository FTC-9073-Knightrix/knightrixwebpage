import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/imgs/herobg.PNG"
          alt="Knightrix Team"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        {/* Hero section */}
        <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Main title with advanced effects */}
          <div className="relative mb-8">
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-white mb-4 animate-fade-in">
              <span className="gradient-text glow-effect">Knightrix</span>
            </h1>
            
            {/* Animated underline */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse-slow" />
            
            {/* Floating elements around title */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/30 rounded-full animate-bounce-slow" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/30 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }} />
          </div>

          {/* Subtitle section */}
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-shadow">
                Chantilly High School's
              </p>
              <div className="relative group">
                <img 
                  src="/imgs/FIRSTTech_iconHorz_RGB_reverse.png" 
                  className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto transition-transform duration-300 group-hover:scale-110" 
                  alt="FIRST Tech Challenge"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-shadow">
                Team
              </p>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white/90 text-shadow animate-pulse-slow">
              THE PURPLE CAPES OF CHANTILLY
            </p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 animate-scale-in" style={{ animationDelay: '1s' }}>
            <Link
              to="/about"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Learn More
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9pWy2A4rFca3SWCFqoHay91y2AfGpuWbQMFXGlXDJsOMjFw/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadTIwAmPWTpZiCgLM48x4KaIJSOq3G11iV-9P1AbjGs4JgWCgdZhS5_WrY22w_aem_0yoQ-7X1JkRfXRfun9YNhA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Join Our Team
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </div>
  )
}

export default Home 
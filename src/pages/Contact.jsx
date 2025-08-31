import { useEffect, useState } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: '0.3s' }}>
              Get in touch with Team 9073 Knightrix
            </p>
          </div>
        </div>
      </div>

      {/* Email Contact */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`glass rounded-3xl p-12 text-center border border-white/10 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-6xl mb-6">📧</div>
          <h2 className="text-3xl font-bold gradient-text mb-6">
            Email Us
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Have questions about our team? Want to learn more? Send us an email!
          </p>
          <a
            href="mailto:ftc9073robotics@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            ftc9073robotics@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact 
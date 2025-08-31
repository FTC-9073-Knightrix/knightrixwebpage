import { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: "🤖",
      title: "Robotics Excellence",
      description: "Building innovative robots that push the boundaries of technology and engineering."
    },
    {
      icon: "💡",
      title: "Innovation First",
      description: "Developing creative solutions to complex challenges in competitive robotics."
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Working together to achieve common goals through effective communication and cooperation."
    },
    {
      icon: "🎯",
      title: "Competitive Spirit",
      description: "Striving for excellence in every competition while maintaining gracious professionalism."
    }
  ]

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
              Who is 9073?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: '0.3s' }}>
              We are Chantilly High School's premier FIRST Tech Challenge team, 
              dedicated to innovation, teamwork, and excellence in robotics.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="glass rounded-3xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Team 9073 Knightrix was founded in 2014 with the mission to inspire the next generation 
                  of engineers, scientists, and innovators. We believe in the power of hands-on 
                  learning and real-world problem solving.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team consists of passionate students from Chantilly High School who work 
                  together to design, build, and program robots for the annual FIRST Tech 
                  Challenge competition.
                </p>
                <p className="text-lg leading-relaxed">
                  We embrace the core values of FIRST: Gracious Professionalism, 
                  Coopertition, and the importance of discovery and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="glass rounded-2xl p-6 text-center border border-white/10">
                <div className="text-4xl font-bold gradient-text mb-2">11</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center border border-white/10">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center border border-white/10">
                <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
                <div className="text-muted-foreground">Hours of Work</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center border border-white/10">
                <div className="text-4xl font-bold gradient-text mb-2">∞</div>
                <div className="text-muted-foreground">Innovation</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center gradient-text mb-12 animate-fade-in">
            What Makes Us Special
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`glass rounded-2xl p-6 text-center border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`mt-20 glass rounded-3xl p-12 text-center border border-white/10 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold gradient-text mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To inspire young people to be science and technology leaders and innovators, 
            by engaging them in exciting mentor-based programs that build science, 
            engineering, and technology skills, that inspire innovation, and that foster 
            well-rounded life capabilities including self-confidence, communication, and leadership.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About 
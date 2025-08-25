import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      name: "Utsav Das",
      role: "Software Lead",
      specialty: "Software",
      image: "/imgs/knightrixsymbol.jpg",
      description: "Works on the programming side of the robot"
    },
    {
      name: "Andrew Hu",
      role: "Software Lead",
      specialty: "Software",
      image: "/imgs/knightrixsymbol.jpg",
      description: "Works on the programming side of the robot"
    },
    {
      name: "Ben Kwon",
      role: "Mechanical Lead",
      specialty: "Mechanical",
      image: "/imgs/knightrixsymbol.jpg",
      description: "Works on the Mechanical side of the robot"
    },
    {
      name: "Sai Konagalla",
      role: "Mechanical and CAD Lead",
      specialty: "Mechanical and CAD",
      image: "/imgs/knightrixsymbol.jpg",
      description: "Works on the Mechanical and CAD side of the robot"
    },
    {
      name: "Jacob Silag",
      role: "Mechanical and CAD",
      specialty: "Mechanical and CAD",
      image: "/imgs/knightrixsymbol.jpg",
      description: "Stuff"
    },
    {
      name: "Hatim Ghadiali",
      role: "Mechanical and CAD",
      specialty: "Mechanical and CAD",
      image: "/imgs/knightrixsymbol.jpg",
      description: "Stuff"
    },
    {
      name: "Krishiv Chandra",
      role: "Mechanical and CAD",
      specialty: "Mechanical and CAD",
      image: "/imgs/knightrixsymbol.jpg",
      description: "Stuff"
    }
  ]

  const mentors = [
    {
      name: "Coach Bare",
      role: "Head Mentor",
      specialty: "Mechanical Engineering",
      image: "/imgs/knightrixsymbol.jpg"
    },
    {
      name: "Coach Das",
      role: "Programming Mentor",
      specialty: "Computer Science",
      image: "/imgs/knightrixsymbol.jpg"
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
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: '0.3s' }}>
              The passionate students and mentors who make Team 9073 Knightrix possible.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12 animate-fade-in">
          Student Leaders
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`glass rounded-3xl p-6 border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-lg font-semibold gradient-text mb-1">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {member.specialty}
                </p>
              </div>
              <p className="text-muted-foreground text-center leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mentors Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12 animate-fade-in">
          Our Mentors
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`glass rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="flex items-center space-x-6">
                <div className="relative w-20 h-20">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white/20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {mentor.name}
                  </h3>
                  <p className="text-lg font-semibold gradient-text mb-1">
                    {mentor.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {mentor.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`glass rounded-3xl p-12 border border-white/10 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Team Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">11</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">11</div>
              <div className="text-muted-foreground">Competition Seasons</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-muted-foreground">Hours Invested</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-muted-foreground">Learning Potential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`glass rounded-3xl p-12 text-center border border-white/10 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold gradient-text mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're always looking for passionate students who are interested in robotics, 
            engineering, and innovation. Apply in the link below!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9pWy2A4rFca3SWCFqoHay91y2AfGpuWbQMFXGlXDJsOMjFw/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadTIwAmPWTpZiCgLM48x4KaIJSOq3G11iV-9P1AbjGs4JgWCgdZhS5_WrY22w_aem_0yoQ-7X1JkRfXRfun9YNhA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Apply Now
            </a>
            <Link
              to="/about"
              className="px-8 py-4 glass text-foreground font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team 
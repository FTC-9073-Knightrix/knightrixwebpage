import { useEffect, useState } from 'react'

const Outreach = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const events = [
    {
      title: "Chantilly Pyramid’s Spotlight on Student Learning",
      date: "March 15, 2022",
      location: "Franklin Middle School",
      description: "A technology teacher at Chantilly High School invited students groups to go to Franklin Middle School and showcase our learning process to the Chantilly Pyramid",
      image: "/imgs/knightrixsymbol.jpg",
      attendees: "15+ Students"
    },
    {
      title: "STEM Workshops",
      date: "March 2023",
      location: "Chantilly Regional Library",
      description: "Our team hosted STEM sessions with middle schoolers for free at Chantilly Regional Library",
      image: "/imgs/knightrixsymbol.jpg",
      attendees: "15+ Students"
    },
    {
      title: "Elementary School Visit",
      date: "June 2025",
      location: "Elementary Schools",
      description: "Visited Lees Corner Elementary School to inspire future engineers in the grades of 5-6 to join FTC.",
      image: "/imgs/knightrixsymbol.jpg",
      attendees: "100+ Students"
    },
    {
      title: "9073 Knightrix x 15167 RoboTroopers Scrimmage",
      date: "October 2022",
      location: "Chantilly Highschool",
      description: "Friendly scrimmage with other teams that allowed us create meaningful connections and share ideas ",
      image: "/imgs/knightrixsymbol.jpg",
      attendees: "75+ Participants"
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
              Community Outreach
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: '0.3s' }}>
              Making a difference in our community through STEM education and robotics.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`glass rounded-3xl p-12 border border-white/10 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">25+</div>
              <div className="text-muted-foreground">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-muted-foreground">Volunteer Hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-muted-foreground">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12 animate-fade-in">
          Recent Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`glass rounded-3xl p-6 border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {event.date} • {event.location}
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {event.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold gradient-text">
                  {event.attendees}
                </span>
                <button className="px-4 py-2 glass text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Outreach 
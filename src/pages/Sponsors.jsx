import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Sponsorship tiers (edit amounts / benefits as needed)
  const tiers = [
    {
      name: 'Knight Champion',
      amount: '$5,000+',
      gradient: 'from-yellow-400 to-amber-500',
      benefits: [
        'Logo largest on robot & shirts',
        'Speaking opportunity at events',
        'Dedicated social media feature set',
        'Large logo & link on website',
        'Pit banner premium placement'
      ]
    },
    {
      name: 'Platinum',
      amount: '$2,500+',
      gradient: 'from-purple-500 to-pink-500',
      benefits: [
        'Large logo on robot & shirts',
        'Logo & link on website',
        'Social media spotlight',
        'Logo on pit banner'
      ]
    },
    {
      name: 'Gold',
      amount: '$1,000+',
      gradient: 'from-amber-400 to-orange-500',
      benefits: [
        'Medium logo on robot',
        'Logo on website',
        'Social media thank you',
        'Logo on pit banner'
      ]
    },
    {
      name: 'Silver',
      amount: '$500+',
      gradient: 'from-slate-300 to-slate-400',
      benefits: [
        'Small logo on robot',
        'Logo on website',
        'Social media thank you'
      ]
    },
    {
      name: 'Bronze',
      amount: '$250+',
      gradient: 'from-orange-300 to-rose-400',
      benefits: [
        'Name on website',
        'Social media thank you'
      ]
    }
  ]

  // Current sponsors (replace placeholders with real data/images)
  const currentSponsors = [
    {
      name: 'FIRST Tech Challenge',
      tier: 'Partner',
      image: '/imgs/FIRSTTech_iconHorz_RGB_reverse.png',
      url: 'https://www.firstinspires.org/'
    },
    {
      name: 'Your Company Here',
      tier: 'Platinum',
      image: '/imgs/knightrixsymbol.jpg',
      url: '#'
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
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Our Sponsors
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Thank you to the organizations and individuals who empower Team 9073 Knightrix to design, build, and compete.
            </p>
          </div>
        </div>
      </div>

      {/* Current Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12">
          Current Sponsors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentSponsors.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target={s.url === '#' ? undefined : '_blank'}
              rel={s.url === '#' ? undefined : 'noopener noreferrer'}
              className={`group glass rounded-2xl p-6 flex flex-col items-center justify-center border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${0.2 + i * 0.05}s` }}
            >
              <div className="relative w-28 h-20 flex items-center justify-center mb-4">
                <img
                  src={s.image}
                  alt={s.name}
                  className="max-h-16 max-w-full object-contain mix-blend-lighten"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition" />
              </div>
              <p className="font-semibold text-center text-sm md:text-base">
                {s.name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{s.tier}</p>
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Want to see your logo here? Become a sponsor below.
        </p>
      </div>

      {/* Tiers Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-4xl font-bold text-center gradient-text mb-12">
          Sponsorship Tiers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative glass overflow-hidden rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${0.3 + i * 0.07}s` }}
            >
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${tier.gradient} opacity-30 blur-2xl`} />
              <h3 className="text-2xl font-bold mb-2 gradient-text">
                {tier.name}
              </h3>
              <p className="text-lg font-semibold mb-4 text-foreground">
                {tier.amount}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {tier.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className={`glass rounded-3xl p-12 text-center border border-white/10 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl font-bold gradient-text mb-6">
            Support Our Mission
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your sponsorship helps us purchase parts, register for competitions, run outreach events, and inspire future engineers. Download our sponsorship packet or contact us to learn more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/Sponsorship_Packet.pdf"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              download
            >
              Download Packet
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 glass text-foreground font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
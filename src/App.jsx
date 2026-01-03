import React, { useState } from 'react';
import { ArrowRight, TrendingUp, BookOpen, Users, Mail, Linkedin, Calendar, MapPin, ExternalLink } from 'lucide-react';

const SAXLogo = ({ size = 40, color = "#0c1e3d" }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10, 20)">
      <path d="M0 0 L50 0 L60 5 L60 10 L50 5 L0 5 Z" fill={color} />
      <path d="M0 8 L50 8 L60 13 L60 18 L50 13 L0 13 Z" fill={color} opacity="0.9" />
      <path d="M0 16 L50 16 L60 21 L60 26 L50 21 L0 21 Z" fill={color} opacity="0.8" />
      <path d="M0 24 L50 24 L60 29 L60 34 L50 29 L0 29 Z" fill={color} opacity="0.7" />
      <path d="M0 32 L50 32 L60 37 L60 42 L50 37 L0 37 Z" fill={color} opacity="0.6" />
    </g>
  </svg>
);

export default function SAXCapitalLanding() {
  const [email, setEmail] = useState('');
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      phase: "Phase 1",
      period: "2025",
      status: "Current",
      title: "Deep Research & Network Building",
      description: "Conducting comprehensive analysis of semiconductor, AI infrastructure, and energy supply chains. Building relationships with manufacturers, understanding capital needs, and mapping the ecosystem."
    },
    {
      phase: "Phase 2",
      period: "Q3 2025",
      status: "Next",
      title: "Pilot Partnerships",
      description: "Selective partnerships with 2-3 manufacturers to test our financing frameworks and refine our approach. Learning what works in real-world applications."
    },
    {
      phase: "Phase 3",
      period: "2026",
      status: "Future",
      title: "Full Launch",
      description: "Scaling our patient capital approach with proven frameworks, established relationships, and deep market knowledge."
    }
  ];

  const researchAreas = [
    {
      title: "Small Business Private Capital",
      description: "Tracking alternative financing options, deal structures, and market trends for SMB manufacturers"
    },
    {
      title: "Exit Market Analysis",
      description: "Understanding valuation multiples, buyer appetite, and exit timing for industrial companies"
    },
    {
      title: "Government Financing Programs",
      description: "Navigating SBA, DFC, EXIM Bank, DOE loans, EDA grants, and state-level manufacturing incentives"
    },
    {
      title: "Supply Chain Deep Dives",
      description: "Mapping semiconductor, AI data center, and energy manufacturing ecosystems in the Southwest"
    }
  ];

  const handleSubscribe = () => {
    if (email) {
      window.open(`https://saxcapitalintel.substack.com/subscribe?email=${encodeURIComponent(email)}`, '_blank');
      setEmail('');
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SAXLogo size={40} color="#0c1e3d" />
            <span className="text-2xl font-bold" style={{ color: '#0c1e3d' }}>
              SAX Capital Intel
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#research" className="text-gray-700 hover:text-[#7bafd4] transition">Research</a>
            <a href="#journey" className="text-gray-700 hover:text-[#7bafd4] transition">Our Journey</a>
            <a href="#story" className="text-gray-700 hover:text-[#7bafd4] transition">Our Story</a>
            <a href="#connect" className="px-6 py-2 rounded-lg text-white transition" style={{ backgroundColor: '#0c1e3d' }}>
              Connect
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" style={{ backgroundColor: '#0c1e3d' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#7bafd4', color: '#0c1e3d' }}>
                Building Phase • 2026
              </div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Capital Research for America's Most Important Industries
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Semiconductor manufacturing, AI infrastructure, and advanced energy are experiencing once-in-a-generation momentum. The suppliers, manufacturers, and service providers in these ecosystems—and adjacent industries—need capital partners who understand the terrain.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                We're starting small: deep research, proprietary models, and building relationships with SMBs riding this wave of sustainable industrial growth.
              </p>
              <div className="flex gap-4">
                <a href="#research" className="px-8 py-4 rounded-lg font-semibold transition hover:opacity-90 flex items-center gap-2" style={{ backgroundColor: '#7bafd4', color: '#0c1e3d' }}>
                  Subscribe to Research <ArrowRight size={20} />
                </a>
                <a href="#story" className="px-8 py-4 rounded-lg border-2 text-white font-semibold hover:bg-white/10 transition">
                  Our Story
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Current Focus Areas</h3>
                <div className="space-y-4 text-gray-200 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#7bafd4' }}></div>
                    <div>
                      <p className="font-semibold">Semiconductor Supply Chain</p>
                      <p className="text-gray-300">Interviewing manufacturers in Phoenix metro area about capital needs and growth constraints</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#7bafd4' }}></div>
                    <div>
                      <p className="font-semibold">Exotic Financing Programs</p>
                      <p className="text-gray-300">Mapping DFC, EXIM, DOE, and state-level programs for manufacturing and energy projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#7bafd4' }}></div>
                    <div>
                      <p className="font-semibold">Exit Market Intelligence</p>
                      <p className="text-gray-300">Tracking valuation multiples and buyer activity in industrial manufacturing sectors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="research" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen size={48} className="mx-auto mb-6" style={{ color: '#7bafd4' }} />
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#0c1e3d' }}>
            Subscribe to Our Research
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Monthly insights on small business capital markets, exit analysis, government financing programs, and supply chain intelligence. Proprietary models, deep research, and actionable insights—no sales pitches.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-[#7bafd4] text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              onClick={handleSubscribe}
              className="px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition whitespace-nowrap"
              style={{ backgroundColor: '#0c1e3d' }}
            >
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">First issue: January 2025 • Frequency: Monthly</p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0c1e3d' }}>
              What We're Researching
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dives into the capital landscape for American manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#7bafd4] transition"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0c1e3d' }}>
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          {/* Resource Links */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#0c1e3d' }}>
              Useful Resources We're Tracking
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold mb-3" style={{ color: '#0c1e3d' }}>Government Programs</h4>
                <div className="space-y-2">
                  <a href="https://www.sba.gov/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#7bafd4] transition">
                    <ExternalLink size={14} /> SBA Lending Programs
                  </a>
                  <a href="https://www.dfc.gov/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#7bafd4] transition">
                    <ExternalLink size={14} /> U.S. DFC
                  </a>
                  <a href="https://www.energy.gov/lpo/loan-programs-office" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#7bafd4] transition">
                    <ExternalLink size={14} /> DOE Loan Programs
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3" style={{ color: '#0c1e3d' }}>Industry Data</h4>
                <div className="space-y-2">
                  <a href="https://www.semiconductors.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#7bafd4] transition">
                    <ExternalLink size={14} /> Semiconductor Industry Assoc.
                  </a>
                  <a href="https://www.eia.gov/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#7bafd4] transition">
                    <ExternalLink size={14} /> Energy Information Admin
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3" style={{ color: '#0c1e3d' }}>Market Intelligence</h4>
                <div className="space-y-2">
                  <a href="https://pitchbook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#7bafd4] transition">
                    <ExternalLink size={14} /> PitchBook (M&A Data)
                  </a>
                  <a href="https://www.census.gov/econ/currentdata/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#7bafd4] transition">
                    <ExternalLink size={14} /> Census Bureau Economic Data
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey/Roadmap Section */}
      <section id="journey" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0c1e3d' }}>
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building something meaningful takes time. Here's how we're approaching this work with patience and intentionality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl p-8 transition cursor-pointer ${
                  idx === activePhase 
                    ? 'bg-white shadow-xl border-2' 
                    : 'bg-white border-2 border-gray-200 hover:border-[#7bafd4]'
                }`}
                style={idx === activePhase ? { borderColor: '#7bafd4' } : {}}
                onMouseEnter={() => setActivePhase(idx)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ 
                    backgroundColor: idx === 0 ? '#7bafd4' : '#f0f0f0',
                    color: idx === 0 ? '#0c1e3d' : '#666'
                  }}>
                    {phase.status}
                  </span>
                  <span className="text-sm text-gray-500">{phase.period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#0c1e3d' }}>
                  {phase.phase}
                </h3>
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#7bafd4' }}>
                  {phase.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 italic">
              "The best time to plant a tree was 20 years ago. The second best time is now. We're planting this tree thoughtfully."
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#0c1e3d' }}>
              Why We're Building This
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0c1e3d' }}>The Opportunity</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                American manufacturing is experiencing a generational shift. TSMC and Intel are building massive semiconductor fabs in Phoenix. AI data centers are reshaping power infrastructure. Energy storage and advanced manufacturing are creating entirely new supply chains.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Behind every $20B fab are hundreds of small and mid-sized manufacturers providing components, equipment, services, and specialized capabilities. These companies need patient capital from partners who understand their industries, their growth trajectories, and their unique financing needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0c1e3d' }}>The Problem</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most capital providers operate on short timeframes and standardized products. Banks want clean balance sheets and predictable cash flows. Private equity wants exits in 3-5 years. Venture capital wants exponential growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                But manufacturing businesses operate differently. They require significant working capital. They have lumpy revenue cycles. They need equipment financing structured around project timelines. They benefit from relationships that span decades, not quarters.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#0c1e3d' }}>Our Approach</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SAX Capital Intel is being built on a foundation of proprietary intelligence models, deep research, and patient capital. We're spending 2026 understanding these markets at a granular level—interviewing manufacturers, mapping supply chains, building valuation models, and developing relationships.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're exploring creative financing solutions: SBA lending frameworks, asset-based structures, government programs like DFC and DOE loans, bridge capital for strategic equipment purchases, and hybrid debt-equity structures that align with manufacturing realities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Most importantly, we're building for the long term. Our goal isn't to close deals quickly—it's to become the trusted intelligence and capital partner for SMBs riding the most significant industrial momentum in decades.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold mb-6" style={{ color: '#0c1e3d' }}>
              Want to be part of this journey?
            </p>
            <a href="#connect" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{ backgroundColor: '#0c1e3d' }}>
              Let's Connect <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Where to Find Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0c1e3d' }}>
              Where to Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Building relationships starts with showing up. Here's where we're spending our time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <MapPin size={40} className="mx-auto mb-4" style={{ color: '#7bafd4' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0c1e3d' }}>Phoenix & Scottsdale</h3>
              <p className="text-gray-600 mb-4">Ground zero for semiconductor manufacturing. TSMC, Intel, and hundreds of suppliers building the future.</p>
              <p className="text-sm text-gray-500">Coffee meetings • Factory tours • Industry events</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <MapPin size={40} className="mx-auto mb-4" style={{ color: '#7bafd4' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0c1e3d' }}>Las Vegas</h3>
              <p className="text-gray-600 mb-4">Gaming, hospitality, and emerging tech infrastructure creating unique manufacturing opportunities.</p>
              <p className="text-sm text-gray-500">Industry conferences • Supplier networks</p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <MapPin size={40} className="mx-auto mb-4" style={{ color: '#7bafd4' }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: '#0c1e3d' }}>Mexico Cross-Border</h3>
              <p className="text-gray-600 mb-4">Nearshoring and supply chain integration creating opportunities for binational manufacturers.</p>
              <p className="text-sm text-gray-500">Trade missions • Supplier development</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Attending an industry event? Hosting a manufacturing roundtable? Let us know—we'd love to join.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-6" style={{ backgroundColor: '#0c1e3d' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Users size={48} className="mx-auto mb-6" style={{ color: '#7bafd4' }} />
            <h2 className="text-4xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-300">
              Building relationships is at the heart of what we do. Whether you're a manufacturer, industry expert, or fellow capital provider—we'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:fil@saxcapitalco.com"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition border border-white/20"
            >
              <Mail size={32} className="mx-auto mb-3" style={{ color: '#7bafd4' }} />
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-sm">Drop us a line anytime</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/philasgedom/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition border border-white/20"
            >
              <Linkedin size={32} className="mx-auto mb-3" style={{ color: '#7bafd4' }} />
              <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-sm">Follow our research updates</p>
            </a>

            <a 
              href="https://calendly.com/fil-dafb/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition border border-white/20"
            >
              <Calendar size={32} className="mx-auto mb-3" style={{ color: '#7bafd4' }} />
              <h3 className="text-lg font-bold text-white mb-2">Schedule</h3>
              <p className="text-gray-300 text-sm">Coffee in Phoenix or Vegas?</p>
            </a>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">What We'd Love to Hear About</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#7bafd4' }}></div>
                <p>Your manufacturing business and growth plans</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#7bafd4' }}></div>
                <p>Supply chain insights in our focus sectors</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#7bafd4' }}></div>
                <p>Capital challenges you're experiencing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#7bafd4' }}></div>
                <p>Interesting deal structures you've seen</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#7bafd4' }}></div>
                <p>Industry events we should attend</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#7bafd4' }}></div>
                <p>Collaborative research opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <SAXLogo size={48} color="#0c1e3d" />
              <div>
                <p className="text-2xl font-bold" style={{ color: '#0c1e3d' }}>SAX Capital Intel</p>
                <p className="text-gray-600">Patient capital for growing manufacturers</p>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#research" className="text-gray-600 hover:text-[#7bafd4] transition">Research</a>
              <a href="#journey" className="text-gray-600 hover:text-[#7bafd4] transition">Journey</a>
              <a href="#story" className="text-gray-600 hover:text-[#7bafd4] transition">Story</a>
              <a href="#connect" className="text-gray-600 hover:text-[#7bafd4] transition">Connect</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
            <p>© 2025 SAX Capital Intel. Building in public, one relationship at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

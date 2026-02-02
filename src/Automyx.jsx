import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Check, Sparkles, Code, Palette, Zap, Users, TrendingUp, Shield, Clock, Globe, MessageSquare, Database, Layers, Star } from 'lucide-react';

const Automyx = () => {
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Business websites and landing pages engineered for conversion. Custom dashboards that turn data into decisions. Built with modern frameworks for speed and scalability.",
      tech: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full-Stack Applications",
      description: "End-to-end solutions that handle real business complexity. From user authentication to database architecture, we build systems that grow with you.",
      tech: ["MERN Stack", "PostgreSQL", "REST APIs"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Automation",
      description: "Turn repetitive tasks into automated workflows. Intelligent chatbots that handle customer queries. CRM integrations that keep your team focused on what matters.",
      tech: ["Claude API", "Zapier", "n8n"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX & Branding",
      description: "Design systems that create consistency across every touchpoint. User experiences backed by research and refined through testing. Brands that communicate authority.",
      tech: ["Figma", "Design Systems", "User Testing"]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and competitive landscape. Every project begins with clarity."
    },
    {
      number: "02",
      title: "Design",
      description: "Our design team creates wireframes and prototypes that balance aesthetics with functionality. You'll see the vision before we write a line of code."
    },
    {
      number: "03",
      title: "Build",
      description: "Our developers bring designs to life with clean, maintainable code. Regular updates keep you informed as your project takes shape."
    },
    {
      number: "04",
      title: "Launch",
      description: "We handle deployment, testing, and optimization. Your launch day is just the beginning of our commitment to your success."
    },
    {
      number: "05",
      title: "Support",
      description: "Ongoing maintenance, updates, and improvements ensure your digital presence stays competitive and secure."
    }
  ];

  const pricingPlans = [
    {
      name: "Foundation",
      tagline: "Essential digital presence for growing businesses",
      bestFor: "Startups and small businesses establishing their digital foundation",
      features: [
        "Professional website or landing page",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "48-hour support response",
        "Monthly performance reports"
      ],
      support: "Standard support with 48-hour response time",
      cta: "Start Building"
    },
    {
      name: "Accelerate",
      tagline: "Advanced solutions for ambitious companies",
      bestFor: "Growing businesses ready to scale their digital operations",
      features: [
        "Everything in Foundation",
        "Custom web application development",
        "AI chatbot integration",
        "Workflow automation setup",
        "Priority 24-hour support",
        "Bi-weekly strategy calls",
        "A/B testing & optimization"
      ],
      support: "Priority support with 24-hour response time",
      cta: "Scale Your Business",
      popular: true
    },
    {
      name: "Enterprise",
      tagline: "White-glove partnership for serious growth",
      bestFor: "Established businesses demanding excellence and rapid execution",
      features: [
        "Everything in Accelerate",
        "Dedicated project manager",
        "Custom full-stack applications",
        "Advanced AI & automation systems",
        "Complete brand & design overhaul",
        "4-hour critical support response",
        "Weekly strategy sessions",
        "Unlimited revisions during development"
      ],
      support: "White-glove support with 4-hour critical response",
      cta: "Partner With Us"
    }
  ];

  const team = [
    {
      role: "Frontend Engineers",
      description: "Specialists in React, Next.js, and modern JavaScript frameworks who craft interfaces users love."
    },
    {
      role: "Backend Developers",
      description: "Database architects and API designers who build the foundation your business runs on."
    },
    {
      role: "AI Engineers",
      description: "Automation specialists who transform manual processes into intelligent, scalable systems."
    },
    {
      role: "UX Designers",
      description: "Strategic thinkers who merge user psychology with business objectives to create compelling experiences."
    },
    {
      role: "Project Managers",
      description: "Your dedicated point of contact who ensures deadlines are met and communication stays clear."
    }
  ];

  const testimonials = [
    {
      quote: "Automyx Digital transformed our booking system from a manual nightmare into an automated process. We're saving 15 hours per week.",
      author: "Sarah Mitchell",
      company: "Wellness Studio Co."
    },
    {
      quote: "Their team didn't just build us a website—they gave us a digital strategy that's increased our leads by 240%.",
      author: "Marcus Chen",
      company: "TechFlow Solutions"
    },
    {
      quote: "The AI chatbot they developed handles 70% of our customer inquiries. Our support team can finally focus on complex issues.",
      author: "Jennifer Park",
      company: "RetailEdge"
    }
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS",
    "Claude AI", "Figma", "TypeScript", "AWS", "Vercel", "Stripe"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Automyx Digital
            </span>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
            Start a Project
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-full text-sm text-cyan-400 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 inline mr-2" />
            A team dedicated to your digital success
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Build Digital Products
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              That Drive Real Growth
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're a full-service digital agency specializing in web development, AI automation, and brand design. 
            Our team turns complex business challenges into elegant digital solutions.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Partner With <span className="text-cyan-400">Automyx Digital</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "True Team Collaboration",
                description: "You work with specialists—not a single person wearing multiple hats. Our developers, designers, and strategists collaborate on every project."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Results-Focused Process",
                description: "We don't just deliver projects—we deliver measurable business outcomes. Every decision is tied to your growth objectives."
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Crystal-Clear Communication",
                description: "Regular updates, transparent timelines, and no technical jargon unless you want it. You always know where your project stands."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise-Grade Quality",
                description: "Code reviews, security audits, and performance optimization are standard. We build for the long term, not quick wins."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Reliable Delivery",
                description: "We respect deadlines because we respect your business. Our project management keeps everything on track without the chaos."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "International Experience",
                description: "We've delivered projects across time zones and industries, bringing global best practices to every client."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-100">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services That <span className="text-cyan-400">Scale Your Business</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From initial concept to ongoing optimization, our team covers every aspect of your digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                className={`p-8 border rounded-2xl transition-all duration-500 cursor-pointer ${
                  activeService === index
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border-cyan-500/50 shadow-xl shadow-cyan-500/20'
                    : 'bg-slate-800/30 border-slate-700/50 hover:border-slate-600'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white scale-110'
                    : 'bg-slate-800 text-cyan-400'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-cyan-400">Proven Process</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A systematic approach refined through hundreds of successful projects.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block"></div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="relative flex gap-8 items-start group">
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible Plans for <span className="text-cyan-400">Every Stage</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the partnership level that matches your ambition. All plans include our commitment to quality and clear communication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20 transform scale-105'
                    : 'bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <p className="text-cyan-400 mb-2">{plan.tagline}</p>
                <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-700">
                  Best for: {plan.bestFor}
                </p>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                  <p className="text-sm text-slate-300">
                    <Clock className="w-4 h-4 inline mr-2 text-cyan-400" />
                    {plan.support}
                  </p>
                </div>

                <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}>
                  {plan.cta}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">Need something custom? We build solutions tailored to your specific requirements.</p>
            <button className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              Schedule a Strategy Call →
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Your <span className="text-cyan-400">Expert Team</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every Automyx Digital project benefits from our collective expertise. You're not hiring a freelancer—you're partnering with a team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mb-6"></div>
                <h3 className="text-2xl font-bold mb-4">{member.role}</h3>
                <p className="text-slate-300 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl text-center">
            <p className="text-lg text-slate-300">
              <Users className="w-6 h-6 inline mr-2 text-cyan-400" />
              Our collaborative approach means you get the best of each discipline, working in harmony to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Results/Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results for <span className="text-cyan-400">Real Businesses</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "240%", label: "Average Lead Increase", description: "For clients in their first 6 months" },
              { metric: "15hrs", label: "Weekly Time Saved", description: "Through automation solutions" },
              { metric: "70%", label: "Support Queries Automated", description: "With intelligent chatbot systems" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                  {stat.metric}
                </div>
                <div className="text-xl font-semibold mb-2 text-slate-100">{stat.label}</div>
                <p className="text-slate-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-cyan-400">Growing Businesses</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-slate-100">{testimonial.author}</p>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Built With <span className="text-cyan-400">Modern Technology</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage cutting-edge tools to deliver fast, secure, and scalable solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <span className="font-semibold text-slate-200">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 border-y border-cyan-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Let's discuss how Automyx Digital can help you achieve your business goals. 
            Our team is ready to bring your vision to life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2 text-lg">
              Schedule Your Free Consultation
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          <p className="mt-8 text-slate-400">
            No pressure. No obligations. Just a conversation about your goals.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Automyx Digital
                </span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                A full-service digital agency specializing in web development, AI automation, and strategic design. 
                We transform business challenges into elegant digital solutions.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-slate-100">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Full-Stack Apps</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">AI Automation</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">UI/UX Design</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-slate-100">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Our Process</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Case Studies</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Automyx Digital. Built for businesses ready to grow.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Automyx;
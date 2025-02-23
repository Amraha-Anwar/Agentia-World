"use client";

import { useState, useRef, useEffect } from "react";
import {
  Bot,
  Sparkles,
  Brain,
  ChevronRight,
  X,
  Mail,
  Shield,
  Cpu,
  Zap,
  Database,
  Cloud,
  Globe,
  Award,
  CircuitBoard,
  Phone,
  MapPin,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  const [message, setMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "assistant", content: "How can I assist you today?" },
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: message }]);

    // Simulate AI response
    const responses = [
      "I'd be happy to help you with that! What specific aspects of AI technology are you interested in?",
      "That's an interesting question about our services. Let me provide more details.",
      "We have extensive experience in that area. Would you like to know more about our approach?",
      "I understand your requirements. Our team has worked on similar projects successfully.",
    ];

    setTimeout(() => {
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [
        ...prev,
        { type: "assistant", content: randomResponse },
      ]);
    }, 1000);

    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Architect",
      image: "/images/team-member1.avif",
      description: "Pioneer in neural architecture development",
    },
    {
      name: "Alex Rodriguez",
      role: "ML Engineering Lead",
      image: "/images/team-member2.avif",
      description: "Expert in deep learning systems",
    },
    {
      name: "Dr. James Wilson",
      role: "Research Director",
      image: "/images/team-member3.avif",
      description: "Leading cognitive AI research",
    },
    {
      name: "Maya Patel",
      role: "Systems Architect",
      image: "/images/team-member4.avif",
      description: "Specialist in AI infrastructure",
    },
    {
      name: "David Kim",
      role: "AI Ethics Lead",
      image: "/images/team-member5.jpg",
      description: "Ensuring responsible AI development",
    },
    {
      name: "Dr. Emily Zhang",
      role: "NLP Specialist",
      image: "/images/team-member6.avif",
      description: "Leading natural language processing innovations",
    },
  ];

  const services = [
    {
      icon: Brain,
      title: "Neural Architecture Design",
      description:
        "Custom neural networks optimized for your specific use case",
    },
    {
      icon: Shield,
      title: "Secure AI Integration",
      description: "Enterprise-grade security for AI implementations",
    },
    {
      icon: Cpu,
      title: "Edge AI Solutions",
      description: "Efficient AI deployment on edge devices",
    },
    {
      icon: Cloud,
      title: "Cloud AI Infrastructure",
      description: "Scalable cloud-based AI systems",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast inference and decision making",
    },
    {
      icon: Database,
      title: "Advanced Data Analysis",
      description: "Deep insights from complex datasets",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "AI solutions that scale worldwide",
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Recognized excellence in AI innovation",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "per month",
      description: "Perfect for small businesses starting with AI",
      features: [
        "Basic AI Model Integration",
        "5 Custom Workflows",
        "Standard Support",
        "Weekly Reports",
      ],
    },
    {
      name: "Professional",
      price: "$999",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Advanced AI Models",
        "Unlimited Workflows",
        "Priority Support",
        "Real-time Analytics",
        "Custom Integration",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "custom plan",
      description: "For large-scale AI operations",
      features: [
        "Custom AI Development",
        "Dedicated Support Team",
        "24/7 Monitoring",
        "Full Infrastructure Access",
        "Security Compliance",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Starry Background */}
      <div className="fixed inset-0 z-0">
        <div className="starry-night"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/50 border-b border-emerald-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <CircuitBoard className="w-8 h-8 text-emerald-400" />
              <span className="text-xl logo-text">Agentia</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`nav-link ${
                  activeSection === "home"
                    ? "text-emerald-400"
                    : "text-gray-300"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className={`nav-link ${
                  activeSection === "features"
                    ? "text-emerald-400"
                    : "text-gray-300"
                }`}
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`nav-link ${
                  activeSection === "services"
                    ? "text-emerald-400"
                    : "text-gray-300"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className={`nav-link ${
                  activeSection === "pricing"
                    ? "text-emerald-400"
                    : "text-gray-300"
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`nav-link ${
                  activeSection === "team"
                    ? "text-emerald-400"
                    : "text-gray-300"
                }`}
              >
                Team
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-4">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-300">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="bg-black/95 border-emerald-500/20"
                >
                  <SheetHeader>
                    <SheetTitle className="text-emerald-400">
                      Navigation
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-8">
                    <button
                      onClick={() => {
                        scrollToSection("home");
                        setIsSheetOpen(false);
                      }}
                      className={`text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === "home"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "text-gray-300 hover:bg-emerald-500/10"
                      }`}
                    >
                      Home
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("features");
                        setIsSheetOpen(false);
                      }}
                      className={`text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === "features"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "text-gray-300 hover:bg-emerald-500/10"
                      }`}
                    >
                      Features
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("services");
                        setIsSheetOpen(false);
                      }}
                      className={`text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === "services"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "text-gray-300 hover:bg-emerald-500/10"
                      }`}
                    >
                      Services
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("pricing");
                        setIsSheetOpen(false);
                      }}
                      className={`text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === "pricing"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "text-gray-300 hover:bg-emerald-500/10"
                      }`}
                    >
                      Pricing
                    </button>
                    <button
                      onClick={() => {
                        scrollToSection("team");
                        setIsSheetOpen(false);
                      }}
                      className={`text-left px-4 py-2 rounded-lg transition-colors ${
                        activeSection === "team"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "text-gray-300 hover:bg-emerald-500/10"
                      }`}
                    >
                      Team
                    </button>
                  </div>
                </SheetContent>
              </Sheet>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-emerald-600 hover:bg-emerald-500"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Chat Interface */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
      >
        {isChatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 chat-interface p-6 rounded-2xl backdrop-blur-lg bg-black/50 border border-emerald-500/20">
          <div className="flex items-center gap-3 mb-6">
            <Bot className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-semibold">Agentia Assistant</h3>
          </div>
          <div className="h-[300px] mb-4 space-y-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  msg.type === "assistant"
                    ? "bg-emerald-900/30 assistant-message"
                    : "user-message"
                }`}
              >
                {msg.content}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="flex gap-3">
            <Input
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="bg-black/30 border-emerald-500/20 focus:border-emerald-400"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-emerald-600 hover:bg-emerald-500"
            >
              Send
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="container mx-auto text-center z-10">
          <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-green-500 mb-6 floating-animation">
            Agentia World
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
            Pioneering the future of agentic AI systems with advanced cognitive
            architectures
          </p>
          <div className="flex justify-center gap-6">
            <Button className="group bg-emerald-600 hover:bg-emerald-500 transition-all duration-300">
              Get Started
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-emerald-500/50 hover:border-emerald-500 text-black"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Advanced Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card p-6 rounded-xl backdrop-blur-lg bg-black/20 border border-emerald-500/20"
              >
                <feature.icon className="w-12 h-12 mb-4 text-emerald-400" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card gradient-border p-8 backdrop-blur-lg bg-black/20 border border-emerald-500/20"
              >
                <service.icon className="service-icon w-12 h-12 mb-4 text-emerald-400" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="pricing-card p-8 rounded-xl backdrop-blur-lg bg-black/20 border border-emerald-500/20"
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-emerald-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-500">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card p-6 rounded-xl backdrop-blur-lg bg-black/20 border border-emerald-500/20"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-2 border-emerald-500/20"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-emerald-400 text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-center">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="feature-card p-6 rounded-xl backdrop-blur-lg bg-black/20 border border-emerald-500/20">
                <Mail className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-400">contact@agentia.world</p>
              </div>
              <div className="feature-card p-6 rounded-xl backdrop-blur-lg bg-black/20 border border-emerald-500/20">
                <Phone className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="feature-card p-6 rounded-xl backdrop-blur-lg bg-black/20 border border-emerald-500/20">
                <MapPin className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-400">
                  123 AI Boulevard, Innovation District
                </p>
                <p className="text-gray-400">Silicon Valley, CA 94025</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-black/30 border-emerald-500/20 focus:border-emerald-400"
                />
                <Input
                  placeholder="Your Email"
                  className="bg-black/30 border-emerald-500/20 focus:border-emerald-400"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full h-32 px-3 py-2 rounded-md bg-black/30 border border-emerald-500/20 focus:border-emerald-400 focus:outline-none text-white"
                />
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-500">
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/40 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-400">
                Agentia World
              </h3>
              <p className="text-gray-400">
                Shaping the future of AI technology
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Services</li>
                <li>Team</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>AI Development</li>
                <li>Machine Learning</li>
                <li>Consulting</li>
                <li>Integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Mail className="w-4 h-4" />
                <span>contact@agentia.world</span>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-emerald-500/20 text-center text-gray-400">
            <p>&copy; 2025 Agentia World. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

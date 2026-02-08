import { useState, useEffect } from "react";
import "@/App.css";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  BookOpen, 
  Calculator, 
  Brain, 
  Sparkles,
  Heart,
  Star,
  CheckCircle,
  MessageCircle,
  Clock,
  Users,
  Smile,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Card, CardContent } from "./components/ui/card";
import { Toaster, toast } from "sonner";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#problemy", label: "Wyzwania" },
    { href: "#oferta", label: "Oferta" },
    { href: "#o-mnie", label: "O mnie" },
    { href: "#kontakt", label: "Kontakt" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-sticky shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="logo-text text-2xl md:text-3xl" data-testid="logo">
          <span className="logo-primary">Uczy</span>
          <span className="logo-secondary">dełko</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-[#023047] hover:text-[#FB8500] transition-colors font-medium"
              data-testid={`nav-${link.href.slice(1)}`}
            >
              {link.label}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("#kontakt")}
            className="bg-[#FB8500] hover:bg-[#FFB703] text-white rounded-full px-6 btn-bounce"
            data-testid="nav-cta-button"
          >
            Umów rozmowę
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#023047]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-[#023047] hover:text-[#FB8500] transition-colors font-medium text-left py-2"
                data-testid={`mobile-nav-${link.href.slice(1)}`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#kontakt")}
              className="bg-[#FB8500] hover:bg-[#FFB703] text-white rounded-full w-full"
              data-testid="mobile-nav-cta-button"
            >
              Umów rozmowę
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-pattern min-h-screen pt-24 md:pt-32 pb-16 relative overflow-hidden" data-testid="hero-section">
      {/* Decorative elements */}
      <div className="deco-circle w-64 h-64 bg-[#FFB703] top-20 -left-32 animate-blob" />
      <div className="deco-circle w-48 h-48 bg-[#8ECAE6] bottom-40 -right-24 animate-blob" style={{ animationDelay: "2s" }} />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left"
          >
            <motion.p 
              variants={fadeInUp}
              className="font-handwritten text-2xl md:text-3xl text-[#FB8500] mb-4"
            >
              Dla dzieci z Kaszub
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#023047] leading-tight mb-6"
            >
              Twoje dziecko 
              <span className="text-gradient block">może więcej</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-[#023047]/80 mb-8 max-w-lg"
            >
              Indywidualne zajęcia edukacyjne dla dzieci w wieku 4-10 lat. 
              Bez stresu, w przyjaznej atmosferze, we własnym tempie.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-[#FB8500] hover:bg-[#FFB703] text-white rounded-full px-8 py-6 text-lg btn-bounce shadow-lg"
                data-testid="hero-cta-primary"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.querySelector("#oferta")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-[#023047] text-[#023047] hover:bg-[#023047] hover:text-white rounded-full px-8 py-6 text-lg"
                data-testid="hero-cta-secondary"
              >
                Zobacz ofertę
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-6 mt-10 justify-center md:justify-start"
            >
              <div className="flex items-center gap-2 text-[#023047]/70">
                <CheckCircle size={20} className="text-[#FFB703]" />
                <span>Indywidualne podejście</span>
              </div>
              <div className="flex items-center gap-2 text-[#023047]/70">
                <CheckCircle size={20} className="text-[#FFB703]" />
                <span>Bez presji i stresu</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="image-container aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1760113762872-631f32c7fab0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwzfHxjaGlsZCUyMHBsYXlpbmclMjB3aXRoJTIwd29vZGVuJTIwYmxvY2tzfGVufDB8fHx8MTc3MDU2MTE4Nnww&ixlib=rb-4.1.0&q=85"
                alt="Szczęśliwe dziecko podczas nauki przez zabawę"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#023047]">100%</p>
                  <p className="text-sm text-[#023047]/70">Zadowolonych rodziców</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={32} className="text-[#FB8500]" />
      </motion.div>
    </section>
  );
};

// Problems Section
const ProblemsSection = () => {
  const problems = [
    {
      icon: BookOpen,
      title: "Trudności w czytaniu i pisaniu",
      description: "Dziecko unika książek, myli litery, pisze powoli i nieczytelnie?"
    },
    {
      icon: Calculator,
      title: "Matematyka to koszmar",
      description: "Liczenie sprawia problemy, tabliczka mnożenia nie wchodzi do głowy?"
    },
    {
      icon: Brain,
      title: "Brak koncentracji",
      description: "Trudno usiedzieć w jednym miejscu, ciągłe rozpraszanie się?"
    },
    {
      icon: Heart,
      title: "Stres i niechęć do nauki",
      description: "Dziecko nie chce iść do szkoły, jest zestresowane ocenami?"
    }
  ];

  return (
    <section id="problemy" className="py-20 md:py-28 bg-white relative" data-testid="problems-section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="font-handwritten text-2xl text-[#FB8500] mb-4">
            Rozumiem Twoje obawy
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023047] mb-6">
            Czy Twoje dziecko zmaga się z...?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#023047]/70 max-w-2xl mx-auto">
            Wiele dzieci przechodzi przez podobne trudności. To nie wina dziecka – 
            czasem potrzebują po prostu innego podejścia.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card className="problem-card h-full p-6 hover:shadow-xl transition-shadow duration-300" data-testid={`problem-card-${index}`}>
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFB703] to-[#FB8500] rounded-2xl flex items-center justify-center mb-5">
                    <problem.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#023047] mb-3">{problem.title}</h3>
                  <p className="text-[#023047]/70">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empathy message */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#FEFAE0] px-6 py-4 rounded-full">
            <Sparkles className="text-[#FFB703]" size={24} />
            <p className="text-[#023047] font-medium">
              Każde dziecko ma swoje tempo – i to jest w porządku
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Solution Section
const SolutionSection = () => {
  const features = [
    {
      icon: Users,
      title: "Indywidualne podejście",
      description: "Każde dziecko jest inne. Dostosowuję metody do jego potrzeb i stylu uczenia się."
    },
    {
      icon: Smile,
      title: "Nauka przez zabawę",
      description: "Gry, zabawy i aktywności, które angażują i motywują do dalszej nauki."
    },
    {
      icon: Clock,
      title: "Własne tempo",
      description: "Bez pośpiechu i presji. Dziecko uczy się w swoim rytmie, bez stresu."
    },
    {
      icon: Brain,
      title: "Multisensoryka",
      description: "Angażuję wszystkie zmysły, by nauka była skuteczniejsza i ciekawsza."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FEFAE0] relative paper-texture" data-testid="solution-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="image-container aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1758598737529-3b326b4c8a55?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NjZ8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBhbmQlMjBjaGlsZCUyMHJlYWRpbmclMjBib29rJTIwdG9nZXRoZXJ8ZW58MHx8fHwxNzcwNTYxMTk0fDA&ixlib=rb-4.1.0&q=85"
                alt="Wspólna nauka w przyjaznej atmosferze"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-[#8ECAE6] rounded-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="order-1 md:order-2"
          >
            <motion.p variants={fadeInUp} className="font-handwritten text-2xl text-[#FB8500] mb-4">
              Metoda Uczydełko
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023047] mb-6">
              Jak pracuję z dziećmi?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#023047]/80 mb-10">
              Wierzę, że każde dziecko może się uczyć z radością. Moja metoda łączy 
              sprawdzone techniki pedagogiczne z indywidualnym podejściem do każdego ucznia.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                    <feature.icon className="text-[#FB8500]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#023047] mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#023047]/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Nauka matematyki",
      description: "Od podstaw po bardziej zaawansowane zagadnienia. Liczenie, tabliczka mnożenia, geometria – wszystko przez zabawę i praktyczne przykłady.",
      benefits: ["Zrozumienie zamiast wkuwania", "Praktyczne zadania", "Budowanie pewności siebie"],
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBsYXlpbmclMjB3aXRoJTIwd29vZGVuJTIwYmxvY2tzfGVufDB8fHx8MTc3MDU2MTE4Nnww&ixlib=rb-4.1.0&q=85",
      color: "#FFB703"
    },
    {
      icon: BookOpen,
      title: "Pisanie i czytanie",
      description: "Nauka liter, sylab, płynnego czytania i poprawnego pisania. Ćwiczenia grafomotoryczne i zabawy słowne.",
      benefits: ["Pewność w pisaniu", "Płynne czytanie", "Radość z książek"],
      image: "https://images.unsplash.com/photo-1544773088-d142e38f5793?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxwcmVzY2hvb2wlMjBjaGlsZCUyMGRyYXdpbmclMjBoYXBweXxlbnwwfHx8fDE3NzA1NjExODJ8MA&ixlib=rb-4.1.0&q=85",
      color: "#FB8500"
    },
    {
      icon: Brain,
      title: "Siłownia pamięci",
      description: "Ćwiczenia koncentracji, techniki zapamiętywania, relaksacja i motywacja. Multisensoryczne podejście do nauki.",
      benefits: ["Lepsza koncentracja", "Skuteczne zapamiętywanie", "Radzenie sobie ze stresem"],
      image: "https://images.unsplash.com/photo-1555448049-67b919120e75?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxjaGlsZCUyMHBsYXlpbmclMjB3aXRoJTIwd29vZGVuJTIwYmxvY2tzfGVufDB8fHx8MTc3MDU2MTE4Nnww&ixlib=rb-4.1.0&q=85",
      color: "#8ECAE6"
    },
    {
      icon: Sparkles,
      title: "Zajęcia wyrównawcze",
      description: "Indywidualny program dla dzieci z trudnościami. Nadrabianie zaległości w bezpiecznym środowisku bez oceniania.",
      benefits: ["Wypełnienie luk w wiedzy", "Odbudowa pewności siebie", "Lepsze wyniki w szkole"],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      color: "#E9C46A"
    }
  ];

  return (
    <section id="oferta" className="py-20 md:py-28 bg-white" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="font-handwritten text-2xl text-[#FB8500] mb-4">
            Czego nauczymy się razem?
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023047] mb-6">
            Oferta zajęć
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#023047]/70 max-w-2xl mx-auto">
            Zajęcia indywidualne lub w małych grupach, dostosowane do wieku i potrzeb dziecka.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card 
                className="service-card overflow-hidden h-full bg-white border-0 shadow-lg"
                data-testid={`service-card-${index}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${service.color}40, transparent)` }}
                  />
                  <div 
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#023047] mb-3">{service.title}</h3>
                  <p className="text-[#023047]/70 mb-5">{service.description}</p>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-[#FFB703] flex-shrink-0" />
                        <span className="text-sm text-[#023047]/80">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="o-mnie" className="py-20 md:py-28 bg-[#FEFAE0] relative paper-texture" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="font-handwritten text-2xl text-[#FB8500] mb-4">
              Poznajmy się
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023047] mb-6">
              Cześć, jestem Julia!
            </motion.h2>
            <motion.div variants={fadeInUp} className="space-y-4 text-[#023047]/80 text-lg">
              <p>
                Od lat pracuję z dziećmi i wiem, jak ważne jest, by każde dziecko 
                poczuło się bezpieczne i zrozumiane. Uczydełko powstało z mojej 
                pasji do nauczania i przekonania, że każdy uczeń może osiągnąć sukces.
              </p>
              <p>
                Wierzę w naukę bez stresu, w tempo dostosowane do dziecka i w 
                metodę, która angażuje wszystkie zmysły. Pracuję na Kaszubach, 
                bo tu jest mój dom i tu chcę wspierać lokalnych rodziców.
              </p>
              <p>
                <span className="font-bold text-[#023047]">Moje podejście?</span> Spokój, 
                cierpliwość i radość z każdego, nawet najmniejszego sukcesu Twojego dziecka.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="text-[#FFB703]" size={18} />
                <span className="text-[#023047] font-medium">Wykwalifikowany pedagog</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Heart className="text-[#FB8500]" size={18} />
                <span className="text-[#023047] font-medium">Pasja do nauczania</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <MapPin className="text-[#8ECAE6]" size={18} />
                <span className="text-[#023047] font-medium">Kaszuby</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="image-container aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHx3b21hbiUyMHRlYWNoZXIlMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzcwNTYxMTg5fDA&ixlib=rb-4.1.0&q=85"
                alt="Julia Plichta - nauczycielka Uczydełko"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-[#FFB703] rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Pierwszy kontakt",
      description: "Napisz lub zadzwoń. Porozmawiamy o potrzebach Twojego dziecka bez żadnych zobowiązań.",
      icon: MessageCircle
    },
    {
      number: "02",
      title: "Diagnoza potrzeb",
      description: "Spotykamy się, poznaję dziecko, oceniam jego poziom i razem ustalamy plan działania.",
      icon: Brain
    },
    {
      number: "03",
      title: "Regularne zajęcia",
      description: "Rozpoczynamy pracę! Spotkania w przyjaznej atmosferze, w tempie dopasowanym do dziecka.",
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white" data-testid="how-it-works-section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="font-handwritten text-2xl text-[#FB8500] mb-4">
            Prosty proces
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023047] mb-6">
            Jak zaczynamy współpracę?
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-[#FFB703] to-[#8ECAE6] rounded-full" />
              )}
              
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-28 h-28 bg-gradient-to-br from-[#FFB703] to-[#FB8500] rounded-full flex items-center justify-center shadow-xl">
                  <step.icon className="text-white" size={40} />
                </div>
                <span className="absolute -top-2 -right-2 w-10 h-10 bg-[#023047] rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#023047] mb-3">{step.title}</h3>
              <p className="text-[#023047]/70 max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Julia ma niesamowite podejście do dzieci. Mój syn wreszcie polubił matematykę i sam sięga po książki!",
      author: "Agnieszka",
      role: "Mama 7-latka"
    },
    {
      quote: "Córka miała duże problemy z koncentracją. Po kilku miesiącach zajęć widać ogromną różnicę w jej skupieniu i pewności siebie.",
      author: "Tomasz",
      role: "Tata 6-latki"
    },
    {
      quote: "Atmosfera na zajęciach jest fantastyczna. Dziecko idzie na Uczydełko z radością, a nie ze stresem jak do szkoły.",
      author: "Marta",
      role: "Mama 9-latka"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FEFAE0] relative paper-texture" data-testid="testimonials-section">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="font-handwritten text-2xl text-[#FB8500] mb-4">
            Co mówią rodzice?
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023047] mb-6">
            Opinie rodziców
          </motion.h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card 
                className="testimonial-card h-full bg-white border-0 shadow-lg p-8 rounded-3xl"
                data-testid={`testimonial-card-${index}`}
              >
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-[#FFB703] fill-[#FFB703]" size={20} />
                    ))}
                  </div>
                  <p className="text-[#023047]/80 text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8ECAE6] to-[#FFB703] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-[#023047]">{testimonial.author}</p>
                      <p className="text-sm text-[#023047]/60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success("Wiadomość wysłana! Odezwę się wkrótce.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast.error("Ups! Coś poszło nie tak. Spróbuj ponownie lub zadzwoń.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-white relative" data-testid="contact-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side - CTA */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="font-handwritten text-2xl text-[#FB8500] mb-4">
              Porozmawiajmy
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#023047] mb-6">
              Pierwszy krok? 
              <span className="block text-gradient">Napisz do mnie</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#023047]/80 mb-8">
              Nie musisz się do niczego zobowiązywać. Porozmawiajmy o Twoim dziecku 
              i zobaczmy, czy mogę pomóc. Pierwszy kontakt jest zawsze bezpłatny.
            </motion.p>

            {/* Direct contact buttons */}
            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              <a 
                href="tel:+48516760656"
                className="flex items-center gap-4 p-4 bg-[#FEFAE0] rounded-2xl hover:shadow-md transition-shadow group"
                data-testid="contact-phone-button"
              >
                <div className="w-14 h-14 bg-[#FFB703] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#023047]">Zadzwoń</p>
                  <p className="text-[#023047]/70">516 760 656</p>
                </div>
              </a>

              <a 
                href="mailto:plichtajulia1@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#FEFAE0] rounded-2xl hover:shadow-md transition-shadow group"
                data-testid="contact-email-button"
              >
                <div className="w-14 h-14 bg-[#FB8500] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#023047]">Napisz email</p>
                  <p className="text-[#023047]/70">plichtajulia1@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://wa.me/48516760656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#FEFAE0] rounded-2xl hover:shadow-md transition-shadow group"
                data-testid="contact-whatsapp-button"
              >
                <div className="w-14 h-14 bg-[#25D366] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform relative whatsapp-pulse">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#023047]">WhatsApp</p>
                  <p className="text-[#023047]/70">Szybka wiadomość</p>
                </div>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-2 text-[#023047]/60">
              <MapPin size={18} />
              <span>Kaszuby, Polska</span>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-[#FEFAE0] border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#023047] mb-6">Zostaw wiadomość</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#023047] mb-2">Imię</label>
                    <Input
                      type="text"
                      placeholder="Twoje imię"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white border-[#E9C46A] rounded-xl p-4 focus:ring-2 focus:ring-[#FB8500] focus:border-transparent"
                      data-testid="contact-form-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#023047] mb-2">Telefon</label>
                    <Input
                      type="tel"
                      placeholder="Numer telefonu"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white border-[#E9C46A] rounded-xl p-4 focus:ring-2 focus:ring-[#FB8500] focus:border-transparent"
                      data-testid="contact-form-phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#023047] mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="Twój email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white border-[#E9C46A] rounded-xl p-4 focus:ring-2 focus:ring-[#FB8500] focus:border-transparent"
                      data-testid="contact-form-email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#023047] mb-2">Wiadomość</label>
                    <Textarea
                      placeholder="O czym chciałbyś porozmawiać?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-white border-[#E9C46A] rounded-xl p-4 focus:ring-2 focus:ring-[#FB8500] focus:border-transparent resize-none"
                      data-testid="contact-form-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FB8500] hover:bg-[#FFB703] text-white rounded-full py-6 text-lg btn-bounce shadow-lg"
                    data-testid="contact-form-submit"
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                  </Button>
                </form>
                <p className="text-sm text-[#023047]/60 mt-4 text-center">
                  Odpowiadam zwykle w ciągu 24 godzin
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 bg-[#023047] text-white" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & description */}
          <div>
            <a href="#" className="logo-text text-3xl inline-block mb-4">
              <span className="text-[#FFB703]">Uczy</span>
              <span className="text-[#FB8500]">dełko</span>
            </a>
            <p className="text-white/70">
              Indywidualne zajęcia edukacyjne dla dzieci na Kaszubach. 
              Nauka bez stresu, we własnym tempie.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li><a href="#oferta" className="text-white/70 hover:text-[#FFB703] transition-colors">Oferta</a></li>
              <li><a href="#o-mnie" className="text-white/70 hover:text-[#FFB703] transition-colors">O mnie</a></li>
              <li><a href="#kontakt" className="text-white/70 hover:text-[#FFB703] transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#FFB703]" />
                <a href="mailto:plichtajulia1@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  plichtajulia1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#FFB703]" />
                <a href="tel:+48516760656" className="text-white/70 hover:text-white transition-colors">
                  516 760 656
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#FFB703]" />
                <span className="text-white/70">Kaszuby, Polska</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Uczydełko - Julia Plichta. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="App">
      <Toaster position="top-center" richColors />
      <Navigation />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <ServicesSection />
        <AboutSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

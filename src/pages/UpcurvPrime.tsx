import { LandingNavbar } from '@/components/landing/LandingNavbar';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { DemoRequestForm } from '@/components/landing/DemoRequestForm';
import { AnimatedSection, AnimatedCard } from '@/components/landing/AnimatedSection';
import { ChatBot } from '@/components/landing/ChatBot';
import { SEOHead } from '@/components/SEOHead';
import { PageViewTracker } from '@/components/landing/PageViewTracker';
import {
  CheckCircle2, ChevronRight, Star, QrCode, Receipt, Wallet, ShieldCheck,
  MapPin, Zap, Gift, Tag, Utensils, Scissors, Store, Dribbble, MoreHorizontal,
  ArrowRight, TrendingUp, BadgePercent, Smartphone, CreditCard
} from 'lucide-react';
import primeHero from '@/assets/prime-hero.png';
import { UpcurvLogo } from '@/components/landing/UpcurvLogo';

const BRAND = '#F9423A';

const highlights = [
  { icon: Tag, title: 'Instant Discounts', desc: 'No coupons needed', bg: '#FEE2E2', iconColor: BRAND },
  { icon: Gift, title: 'Cashback Rewards', desc: 'Earn on every payment', bg: '#DCFCE7', iconColor: '#16A34A' },
  { icon: MapPin, title: 'Nearby Stores', desc: 'Use it where you go', bg: '#DBEAFE', iconColor: '#2563EB' },
  { icon: ShieldCheck, title: 'Secure Payments', desc: 'UPI powered, 100% safe', bg: '#FEF3C7', iconColor: '#D97706' },
];

const howItWorks = [
  { icon: QrCode, title: 'Scan QR', desc: 'at any partner store', color: '#1A1A2E' },
  { icon: Receipt, title: 'Enter Bill', desc: 'amount', color: '#3B82F6' },
  { icon: BadgePercent, title: 'See Savings', desc: 'instantly', color: '#16A34A' },
  { icon: ShieldCheck, title: 'Pay Securely', desc: 'via UPI', color: '#D97706' },
  { icon: Gift, title: 'Get Cashback', desc: 'for next time', color: BRAND },
];

const categories = [
  { icon: Utensils, label: 'Restaurants' },
  { icon: Scissors, label: 'Salons' },
  { icon: Store, label: 'Retail Stores' },
  { icon: Dribbble, label: 'Turfs' },
  { icon: MoreHorizontal, label: 'More' },
];

const trustPoints = [
  { icon: ShieldCheck, title: 'Secure UPI Payments', desc: 'Bank-level security', color: BRAND },
  { icon: CheckCircle2, title: 'No Hidden Charges', desc: 'What you see is what you pay', color: '#16A34A' },
  { icon: Zap, title: 'Instant Confirmations', desc: 'Always, in real time', color: '#3B82F6' },
];

const stats = [
  { value: '100K+', label: 'Users Saving Smarter' },
  { value: '500+', label: 'Partner Stores' },
  { value: '₹10L+', label: 'Cashback Given' },
  { value: '99.9%', label: 'Uptime' },
];

const offers = [
  { name: 'Cafe Delight', tag: '20% OFF', tagColor: BRAND, desc: 'Up to ₹100 off', distance: '0.3 km away' },
  { name: 'Style Studio', tag: '₹50 OFF', tagColor: '#3B82F6', desc: 'on bills above ₹300', distance: '0.5 km away' },
  { name: 'Mart Fresh', tag: '₹100 CASHBACK', tagColor: '#22C55E', desc: 'on bills above ₹500', distance: '0.7 km away' },
];

const UpcurvPrime = () => (
  <div className="min-h-screen bg-white">
    <SEOHead
      title="Upcurv Prime - Smarter Payments, Real Savings"
      description="Scan a QR, unlock instant discounts, pay easily, and earn cashback for your next visit. Upcurv Prime — smarter payments for everyday shopping."
      path="/upcurv-prime"
    />
    <PageViewTracker title="Upcurv Prime" />
    <LandingNavbar />

    {/* HERO — matching reference image */}
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%)' }}>
      {/* Decorative stars */}
      <div className="absolute top-8 right-[15%] hidden lg:block">
        <Star className="h-6 w-6 fill-current" style={{ color: `${BRAND}30` }} />
      </div>
      <div className="absolute top-20 right-[8%] hidden lg:block">
        <Star className="h-4 w-4 fill-current" style={{ color: `${BRAND}20` }} />
      </div>
      <div className="absolute bottom-20 right-[25%] hidden lg:block">
        <Star className="h-5 w-5 fill-current" style={{ color: `${BRAND}25` }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 border" style={{ color: BRAND, borderColor: `${BRAND}40`, backgroundColor: `${BRAND}08` }}>
              <Star className="h-4 w-4" fill={BRAND} /> Smarter Payments. Real Savings.
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight" style={{ color: '#1A1A2E' }}>
              Pay Less.<br />
              <span style={{ color: BRAND }}>Every Time</span> You Shop.
            </h1>
            <p className="mt-5 text-base sm:text-lg max-w-xl leading-relaxed" style={{ color: '#555' }}>
              Scan a QR, unlock instant discounts, pay easily, and earn cashback for your next visit.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#demo" className="inline-flex items-center gap-2 text-white px-6 sm:px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl" style={{ backgroundColor: '#1A1A2E' }}>
                Start Saving <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 border-2 px-6 sm:px-8 py-3.5 rounded-lg font-semibold transition-colors hover:bg-gray-50" style={{ borderColor: '#ddd', color: '#333' }}>
                See How It Works <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'].map((bg, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center`}>
                    <span className="text-white text-[10px] font-bold">{String.fromCharCode(65 + i)}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: '#888' }}>100K+ users saving smarter every day</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Red accent background */}
              <div className="absolute -top-6 -right-6 w-[70%] h-[60%] rounded-3xl" style={{ backgroundColor: BRAND, zIndex: 0 }} />
              
              <img src={primeHero} alt="Upcurv Prime - Smart Payments" className="w-full drop-shadow-2xl relative z-10 rounded-2xl" />
              
              {/* Floating card: Scan & Pay */}
              <div className="absolute top-4 -right-2 sm:right-0 bg-white rounded-xl shadow-lg border p-3 z-20" style={{ borderColor: '#eee' }}>
                <p className="text-[10px] font-semibold" style={{ color: BRAND }}>Scan & Pay</p>
                <p className="text-[9px]" style={{ color: '#888' }}>at any store</p>
              </div>

              {/* Floating card: Instant Savings */}
              <div className="absolute -top-2 -right-2 sm:right-16 bg-white rounded-xl shadow-lg border p-3 z-20 animate-bounce-slow" style={{ borderColor: '#eee' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                    <CheckCircle2 className="h-4 w-4" style={{ color: '#16a34a' }} />
                  </div>
                  <div>
                    <p className="text-[10px]" style={{ color: '#888' }}>Instant Savings</p>
                    <p className="text-sm font-bold" style={{ color: BRAND }}>₹80</p>
                  </div>
                </div>
              </div>

              {/* Floating card: Total Savings */}
              <div className="absolute bottom-8 -left-2 sm:-left-4 bg-white rounded-xl shadow-lg border p-3 z-20" style={{ borderColor: '#eee' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${BRAND}15` }}>
                    <Wallet className="h-4 w-4" style={{ color: BRAND }} />
                  </div>
                  <div>
                    <p className="text-[10px]" style={{ color: '#888' }}>Total Savings</p>
                    <p className="text-sm font-bold" style={{ color: '#1A1A2E' }}>₹2,450</p>
                  </div>
                </div>
              </div>

              {/* Floating card: Cashback Balance */}
              <div className="absolute bottom-24 -right-2 sm:right-0 bg-white rounded-xl shadow-lg border p-3 z-20" style={{ borderColor: '#eee' }}>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-[10px]" style={{ color: '#888' }}>Cashback Balance</p>
                    <p className="text-sm font-bold" style={{ color: '#1A1A2E' }}>₹320</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                    <Gift className="h-4 w-4" style={{ color: '#D97706' }} />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* HIGHLIGHTS BAR */}
    <section className="py-6 sm:py-8 border-y" style={{ borderColor: '#f0f0f0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((h, i) => (
            <AnimatedSection key={h.title} delay={i * 0.1}>
              <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white border" style={{ borderColor: '#f5f5f5' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: h.bg }}>
                  <h.icon className="h-5 w-5" style={{ color: h.iconColor }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1A1A2E' }}>{h.title}</p>
                  <p className="text-xs" style={{ color: '#888' }}>{h.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: '#1A1A2E' }}>How It Works</h2>
          <p className="mt-2 text-sm sm:text-base" style={{ color: '#888' }}>5 simple steps to smarter payments</p>
        </AnimatedSection>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {howItWorks.map((step, i) => (
            <AnimatedCard key={step.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl border p-5 sm:p-6 text-center h-full relative" style={{ borderColor: '#eee' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `${step.color}10` }}>
                  <step.icon className="h-6 w-6" style={{ color: step.color }} />
                </div>
                <h3 className="font-bold text-sm sm:text-base" style={{ color: '#1A1A2E' }}>{step.title}</h3>
                <p className="text-xs mt-1" style={{ color: '#888' }}>{step.desc}</p>
                {i < howItWorks.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40" />
                )}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>

    {/* OFFERS + CATEGORIES */}
    <section className="py-16 sm:py-24" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Today's Top Offers */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl border p-6 sm:p-8 h-full" style={{ borderColor: '#eee' }}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#1A1A2E' }}>Today's Top Offers</h3>
                  <p className="text-xs mt-1" style={{ color: '#888' }}>Explore exciting deals near you</p>
                </div>
                <a href="#demo" className="text-xs font-semibold" style={{ color: BRAND }}>View All</a>
              </div>
              <div className="space-y-3">
                {offers.map((offer) => (
                  <div key={offer.name} className="flex items-center gap-4 p-3 rounded-xl border" style={{ borderColor: '#f0f0f0' }}>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#FFF8F0' }}>
                      <Store className="h-6 w-6" style={{ color: BRAND }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded text-white" style={{ backgroundColor: offer.tagColor }}>{offer.tag}</span>
                      </div>
                      <p className="text-sm font-semibold truncate" style={{ color: '#1A1A2E' }}>{offer.name}</p>
                      <p className="text-xs" style={{ color: '#888' }}>{offer.desc} · {offer.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Use It Anywhere */}
          <AnimatedSection delay={0.15}>
            <div className="bg-white rounded-2xl border p-6 sm:p-8 h-full" style={{ borderColor: '#eee' }}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#1A1A2E' }}>Use It Anywhere Near You</h3>
                  <p className="text-xs mt-1" style={{ color: '#888' }}>From cafes to salons, save everywhere</p>
                </div>
                <a href="#demo" className="text-xs font-semibold" style={{ color: BRAND }}>View All</a>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mt-6">
                {categories.map((cat) => (
                  <div key={cat.label} className="flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: '#FFF8F0' }}>
                      <cat.icon className="h-6 w-6" style={{ color: BRAND }} />
                    </div>
                    <p className="text-xs font-medium text-center" style={{ color: '#555' }}>{cat.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.slice(0, 2).map((s) => (
                  <div key={s.label} className="p-4 rounded-xl text-center" style={{ backgroundColor: '#FFF8F0' }}>
                    <p className="text-2xl font-bold" style={{ color: BRAND }}>{s.value}</p>
                    <p className="text-xs mt-1" style={{ color: '#888' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* TRUST POINTS */}
    <section className="py-10 sm:py-12 border-y bg-white" style={{ borderColor: '#f0f0f0' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {trustPoints.map((t, i) => (
            <AnimatedSection key={t.title} delay={i * 0.1}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${t.color}15` }}>
                  <t.icon className="h-5 w-5" style={{ color: t.color }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#1A1A2E' }}>{t.title}</p>
                  <p className="text-xs" style={{ color: '#888' }}>{t.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA BANNER */}
    <section className="py-14 sm:py-20" style={{ backgroundColor: BRAND }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Stop paying full price.<br />Start saving today.
            </h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base">
              Join 100K+ users who save smarter with every payment.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#demo" className="inline-flex items-center gap-2 bg-white font-bold px-6 py-3 rounded-lg transition-colors hover:bg-gray-50" style={{ color: BRAND }}>
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <UpcurvLogo size={28} color={BRAND} />
                <span className="text-xl font-bold text-white">upcurv</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded text-white" style={{ backgroundColor: BRAND }}>prime</span>
              </div>
              <p className="text-white/90 text-sm font-medium">Smarter Payments<br />Better Savings</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* STATS */}
    <section className="py-14 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <div className="text-3xl sm:text-4xl font-black" style={{ color: BRAND }}>{s.value}</div>
              <div className="text-xs sm:text-sm mt-1 font-medium" style={{ color: '#888' }}>{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* DEMO */}
    <section id="demo" className="py-16 sm:py-24" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: '#1A1A2E' }}>Get Started with Upcurv Prime</h2>
          <p className="mt-2 text-sm sm:text-base" style={{ color: '#888' }}>Request a free demo or register your store as a partner</p>
        </AnimatedSection>
        <div className="rounded-2xl shadow-sm border p-6 sm:p-8 max-w-xl mx-auto bg-white" style={{ borderColor: '#eee' }}>
          <DemoRequestForm product="upcurv_prime" accentColor={BRAND} />
        </div>
      </div>
    </section>

    <LandingFooter />
    <ChatBot />
  </div>
);

export default UpcurvPrime;

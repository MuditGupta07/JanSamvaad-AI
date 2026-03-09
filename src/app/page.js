'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Avatar from '@/components/Avatar';
import styles from './page.module.css';

export default function LandingPage() {
  const [lang, setLang] = useState('en');
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState({ projects: 0, schemes: 0, beneficiaries: 0, budget: 0 });

  useEffect(() => {
    setIsVisible(true);
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const targets = { projects: 48, schemes: 24, beneficiaries: 218, budget: 285 };
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setCounter({
        projects: Math.round(targets.projects * eased),
        schemes: Math.round(targets.schemes * eased),
        beneficiaries: Math.round(targets.beneficiaries * eased),
        budget: Math.round(targets.budget * eased),
      });
      if (step >= steps) clearInterval(interval);
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  const en = lang === 'en';

  const features = [
    {
      icon: '🤖', title: en ? 'AI Avatar Interaction' : 'AI अवतार इंटरैक्शन',
      desc: en ? 'Speak naturally with a digital representative that understands your queries and responds with accurate governance data.' : 'एक डिजिटल प्रतिनिधि से स्वाभाविक रूप से बात करें जो आपके प्रश्नों को समझता है।'
    },
    {
      icon: '🎙️', title: en ? 'Voice-First Experience' : 'वॉइस-फर्स्ट अनुभव',
      desc: en ? 'Ask questions using your voice in English or Hindi. The AI listens, understands, and responds naturally.' : 'अंग्रेजी या हिंदी में अपनी आवाज़ से प्रश्न पूछें।'
    },
    {
      icon: '📊', title: en ? 'Real-Time Insights' : 'रीयल-टाइम इनसाइट्स',
      desc: en ? 'Get instant visual dashboards showing project progress, budgets, and development statistics.' : 'परियोजना प्रगति और विकास आंकड़े दिखाने वाले तत्काल विज़ुअल डैशबोर्ड।'
    },
    {
      icon: '✅', title: en ? 'Verified Information' : 'सत्यापित जानकारी',
      desc: en ? 'Every response is backed by verified governance data ensuring accuracy and transparency.' : 'प्रत्येक प्रतिक्रिया सत्यापित शासन डेटा द्वारा समर्थित है।'
    },
    {
      icon: '🌐', title: en ? 'Multilingual Support' : 'बहुभाषी समर्थन',
      desc: en ? 'Interact seamlessly in English and Hindi with automatic language detection and switching.' : 'अंग्रेजी और हिंदी में स्वचालित भाषा पहचान के साथ बातचीत।'
    },
    {
      icon: '🏛️', title: en ? 'Smart Governance' : 'स्मार्ट गवर्नेंस',
      desc: en ? 'AI-powered analysis of development projects, government schemes, and public infrastructure progress.' : 'विकास परियोजनाओं और सरकारी योजनाओं का AI-संचालित विश्लेषण।'
    },
  ];

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={`${styles.hero} bg-grid`}>
          <div className={styles.heroGlow} />
          <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              {en ? '🇮🇳 Next-Gen Digital Governance' : '🇮🇳 अगली पीढ़ी का डिजिटल गवर्नेंस'}
            </div>
            <h1 className={styles.heroTitle}>
              {en ? (
                <><span className="gradient-text">Your Voice,</span><br />Their Answer</>
              ) : (
                <><span className="gradient-text">आपकी आवाज़,</span><br />उनका जवाब</>
              )}
            </h1>
            <p className={styles.heroSubtitle}>
              {en
                ? 'Experience the future of citizen-government interaction. Talk directly with AI-powered governance avatars for instant, transparent answers about development, schemes, and public services.'
                : 'नागरिक-सरकार संवाद के भविष्य का अनुभव करें। विकास, योजनाओं और सार्वजनिक सेवाओं के बारे में तुरंत, पारदर्शी उत्तर पाने के लिए AI-संचालित अवतार से बात करें।'
              }
            </p>
            <div className={styles.heroActions}>
              <Link href="/dashboard" className="glow-btn">
                {en ? '💬 Talk to AI Representative' : '💬 AI प्रतिनिधि से बात करें'}
              </Link>
              <Link href="/dashboard" className="glow-btn glow-btn-outline">
                {en ? '▶ Watch Demo' : '▶ डेमो देखें'}
              </Link>
            </div>
          </div>
          <div className={`${styles.heroAvatar} ${isVisible ? styles.visible : ''}`}>
            <Avatar state="idle" size={260} />
            <div className={styles.avatarLabel}>
              <strong>{en ? 'AI Governance Assistant' : 'AI गवर्नेंस सहायक'}</strong>
              <span>{en ? 'Always ready to help' : 'हमेशा मदद के लिए तैयार'}</span>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className={styles.statsStrip}>
          <div className={styles.statsInner}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>{counter.projects}+</span>
              <span className={styles.statDesc}>{en ? 'Projects Tracked' : 'ट्रैक की गई परियोजनाएं'}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>{counter.schemes}+</span>
              <span className={styles.statDesc}>{en ? 'Active Schemes' : 'सक्रिय योजनाएं'}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>{counter.beneficiaries}K+</span>
              <span className={styles.statDesc}>{en ? 'Beneficiaries' : 'लाभार्थी'}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>₹{counter.budget}Cr</span>
              <span className={styles.statDesc}>{en ? 'Budget Managed' : 'प्रबंधित बजट'}</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.features}>
          <div className={styles.featuresHeader}>
            <h2 className="section-title">
              {en ? (
                <><span className="gradient-text">Transforming</span> Governance Through AI</>
              ) : (
                <><span className="gradient-text">AI</span> के माध्यम से गवर्नेंस में बदलाव</>
              )}
            </h2>
            <p className="section-subtitle">
              {en
                ? 'Bridging the gap between citizens and governance with intelligent, transparent, and accessible AI communication.'
                : 'बुद्धिमान, पारदर्शी और सुलभ AI संचार के साथ नागरिकों और शासन के बीच की दूरी को पाटना।'
              }
            </p>
          </div>
          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <div key={i} className={`glass-card ${styles.featureCard}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className={styles.trust}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            {en ? (
              <><span className="gradient-text">Built on</span> Trust & Transparency</>
            ) : (
              <><span className="gradient-text">विश्वास</span> और पारदर्शिता पर निर्मित</>
            )}
          </h2>
          <div className={styles.trustGrid}>
            {[
              { icon: '🛡️', label: en ? 'AI Generated Response' : 'AI जनित प्रतिक्रिया' },
              { icon: '✅', label: en ? 'Verified Governance Data' : 'सत्यापित शासन डेटा' },
              { icon: '🔒', label: en ? 'Encrypted Communication' : 'एन्क्रिप्टेड संचार' },
              { icon: '🌍', label: en ? 'Open Source Platform' : 'ओपन सोर्स प्लेटफॉर्म' },
            ].map((t, i) => (
              <div key={i} className={styles.trustCard}>
                <span className={styles.trustIcon}>{t.icon}</span>
                <span className={styles.trustLabel}>{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              {en ? 'Ready to experience the future of governance?' : 'गवर्नेंस के भविष्य का अनुभव करने के लिए तैयार?'}
            </h2>
            <p className={styles.ctaSubtitle}>
              {en ? 'Start a conversation with our AI governance assistant now.' : 'अभी हमारे AI गवर्नेंस सहायक से बातचीत शुरू करें।'}
            </p>
            <Link href="/dashboard" className="glow-btn" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              {en ? '🚀 Launch Dashboard' : '🚀 डैशबोर्ड लॉन्च करें'}
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p>{en ? '© 2025 JanSamvaad AI. Empowering citizens through intelligent governance.' : '© 2025 जनसंवाद AI। बुद्धिमान शासन के माध्यम से नागरिकों को सशक्त बनाना।'}</p>
            <p className={styles.footerHeart}>{en ? 'Made with' : 'बनाया गया'} ❤️ {en ? 'for India' : 'भारत के लिए'} 🇮🇳</p>
          </div>
        </footer>
      </main>
    </>
  );
}

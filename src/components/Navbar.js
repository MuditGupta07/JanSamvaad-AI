'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ lang = 'en', onLangChange }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const labels = {
    en: { home: 'Home', dashboard: 'Dashboard', admin: 'Admin', name: 'JanSamvaad AI' },
    hi: { home: 'होम', dashboard: 'डैशबोर्ड', admin: 'एडमिन', name: 'जनसंवाद AI' },
  };
  const l = labels[lang] || labels.en;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#10B981" strokeWidth="2" />
              <circle cx="16" cy="12" r="5" fill="#10B981" />
              <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#10B981" strokeWidth="2" fill="none" />
              <circle cx="16" cy="16" r="15.5" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>{l.name}</span>
            <span className={styles.logoTag}>Digital Governance</span>
          </div>
        </Link>

        <div className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}
            onClick={() => setMobileOpen(false)}>
            {l.home}
          </Link>
          <Link href="/dashboard" className={`${styles.navLink} ${pathname === '/dashboard' ? styles.active : ''}`}
            onClick={() => setMobileOpen(false)}>
            {l.dashboard}
          </Link>
          <Link href="/admin" className={`${styles.navLink} ${pathname === '/admin' ? styles.active : ''}`}
            onClick={() => setMobileOpen(false)}>
            {l.admin}
          </Link>
        </div>

        <div className={styles.navActions}>
          <button
            className={styles.langToggle}
            onClick={() => onLangChange?.(lang === 'en' ? 'hi' : 'en')}
            title="Switch language"
          >
            {lang === 'en' ? 'हिंदी' : 'EN'}
          </button>
          <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}

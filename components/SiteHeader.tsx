"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import styles from "./SiteHeader.module.css";
import { languageOptions, dictionary, localizePath, type Locale } from "@/app/i18n";

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const ChevronIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

interface SiteHeaderProps {
  locale: Locale;
}

export default function SiteHeader({ locale }: SiteHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Lấy bộ từ điển dịch tương ứng với ngôn ngữ hiện tại
  const t = dictionary[locale] || dictionary.ja;

  // Bản đồ hoá danh mục menu dịch theo ngôn ngữ hiện tại
  const navItems = [
    { href: "/", label: t.home },
    { href: "/menu", label: t.menu },
    { href: "/store", label: t.store },
    { href: "/about", label: t.about },
    { href: "/news", label: t.news },
    { href: "/contact", label: t.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Xử lý chuyển đổi link ngôn ngữ
  const handleLangChange = (targetLocale: Locale) => {
    const nextPath = localizePath(pathname, targetLocale);
    setIsLangDropdownOpen(false);
    setIsMenuOpen(false);
    router.push(nextPath);
  };

  return (
    <header className={`${styles.siteHeader} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.container}>
        
        {/* LOGO */}
        <Link href={localizePath("/", locale)} aria-label={`${t.siteName} ${t.home}`} className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo.png" 
              alt={`${t.siteName} Tonkatsu Dining`}
              fill
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>

        {/* NAVIGATION - DESKTOP */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link href={localizePath(item.href, locale)} key={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className={styles.rightActions}>
          <div className={styles.langContainer} ref={dropdownRef}>
            <button 
              className={`${styles.customLangBtn} ${isLangDropdownOpen ? styles.customLangBtnActive : ""}`}
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              aria-label="Select Language"
            >
              <GlobeIcon className={styles.langIcon} />
              <span className={styles.langLabelText}>
                {languageOptions.find(l => l.code === locale)?.label}
              </span>
              <ChevronIcon className={`${styles.chevronIcon} ${isLangDropdownOpen ? styles.chevronIconRotated : ""}`} />
            </button>
            {isLangDropdownOpen && (
              <div className={styles.langDropdownList}>
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    className={`${styles.langDropdownItem} ${locale === lang.code ? styles.langActive : ""}`}
                    onClick={() => handleLangChange(lang.code)}
                  >
                    <span className={styles.bulletActive}>•</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href={localizePath("/delivery", locale)} className={styles.btnDelivery}>
            <div className={styles.deliveryContent}>
              <div className={styles.deliveryIconWrapper}>
                <Image 
                  src="https://free-icons.net/wp-content/uploads/svg/vehicle017.svg"
                  alt={t.delivery}
                  width={22}
                  height={22}
                  className={styles.deliveryIcon}
                />
              </div>
              <div className={styles.deliveryTextGoup}>
                <span className={styles.textTakeout}>{t.delivery}</span>
                <span className={styles.textDelivery}>{t.deliveryAlt}</span>
              </div>
            </div>
          </Link>

          <Link href={localizePath("/reservation", locale)} className={styles.btnReservation}>
            <span>{t.reservation}</span>
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className={styles.mobileControls}>
          <Link href={localizePath("/reservation", locale)} className={styles.btnMobileReserve}>
            {t.reservation}
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`}
            aria-label="Toggle Menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileMenuContainer}>
            
            <div className={styles.mobileFeaturedActions}>
              <Link 
                href={localizePath("/menu", locale)} 
                onClick={() => setIsMenuOpen(false)} 
                className={styles.featuredActionBtn}
                style={{ animationDelay: "0s" }}
              >
                <Image 
                  src="https://free-icons.net/wp-content/uploads/svg/food022.svg"
                  alt={t.menu}
                  width={42}
                  height={42}
                  className={styles.featuredActionIcon}
                />
                <span>{t.menu}</span>
              </Link>
              <Link 
                href={localizePath("/store", locale)} 
                onClick={() => setIsMenuOpen(false)} 
                className={styles.featuredActionBtn}
                style={{ animationDelay: "0.04s" }}
              >
                <Image 
                  src="https://free-icons.net/wp-content/uploads/svg/build017.svg"
                  alt={t.store}
                  width={42}
                  height={42}
                  className={styles.featuredActionIcon}
                />
                <span>{t.store}</span>
              </Link>
            </div>

            <div className={styles.mobileLinksGrid}>
              {navItems
                .filter(item => item.href !== "/menu" && item.href !== "/store")
                .map((item, index) => (
                  <Link
                    href={localizePath(item.href, locale)}
                    key={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={styles.mobileNavLink}
                    style={{ animationDelay: `${(index + 2) * 0.04}s` }}
                  >
                    <span className={styles.mobileNavLabel}>{item.label}</span>
                    <svg 
                      className={styles.mobileNavArrow} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
            </div>
            
            <div className={styles.mobileMenuFooter}>
              <Link href={localizePath("/delivery", locale)} onClick={() => setIsMenuOpen(false)} className={styles.menuInDeliveryBtn}>
                <div className={styles.deliveryContent}>
                  <div className={styles.deliveryIconWrapper}>
                    <Image 
                      src="https://free-icons.net/wp-content/uploads/svg/vehicle017.svg"
                      alt={t.delivery}
                      width={22}
                      height={22}
                      className={styles.deliveryIcon}
                    />
                  </div>
                  <div className={styles.deliveryTextGoup}>
                    <span className={styles.textTakeout}>{t.delivery}</span>
                    <span className={styles.textDelivery}>{t.deliveryAlt}</span>
                  </div>
                </div>
              </Link>
              
              <div className={styles.mobileLangSection}>
                <div className={styles.mobileLangTrack}>
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      className={`${styles.mobileLangTab} ${locale === lang.code ? styles.mobileLangTabActive : ""}`}
                      onClick={() => handleLangChange(lang.code)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
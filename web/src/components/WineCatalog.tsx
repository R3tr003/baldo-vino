'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import type { Wine, WineCategory } from '@/types/wine';
import { CATEGORY_LABELS } from '@/types/wine';
import WineCard from '@/components/WineCard';
import styles from './WineCatalog.module.css';
import clsx from 'clsx';

interface WineCatalogProps {
  wines: Wine[];
  isKiosk?: boolean;
  kioskLogo?: string;
}

const CATEGORY_KEYS = Object.keys(CATEGORY_LABELS) as (WineCategory | 'tutti')[];

export default function WineCatalog({
  wines,
  isKiosk = false,
  kioskLogo,
}: WineCatalogProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<WineCategory | 'tutti'>('tutti');
  const [country, setCountry] = useState<string>('tutti');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const availableCountries = useMemo(() => {
    const countries = new Set(wines.map((w) => w.paese).filter(Boolean));
    return Array.from(countries).sort();
  }, [wines]);

  const filtered = useMemo(() => {
    let result = wines;

    if (category !== 'tutti') {
      result = result.filter((w) => w.categoria === category);
    }

    if (country !== 'tutti') {
      result = result.filter((w) => w.paese === country);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (w) =>
          w.nome.toLowerCase().includes(q) ||
          w.produttore.toLowerCase().includes(q) ||
          w.regione.toLowerCase().includes(q) ||
          (w.paese && w.paese.toLowerCase().includes(q)),
      );
    }

    return result;
  }, [wines, category, country, search]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSelect = useCallback((wine: Wine) => {
    setSelectedId((prev) => (prev === wine.id ? null : wine.id));
  }, []);

  const resetFilters = () => {
    setSearch('');
    setCategory('tutti');
    setCountry('tutti');
  };

  return (
    <section
      className={clsx(styles.catalog, isKiosk && styles.kiosk)}
      aria-label="Catalogo vini"
    >
      {isKiosk && kioskLogo && (
        <div className={styles.kioskHeader}>
          <img
            src={kioskLogo}
            alt="Baldo Vino"
            className={styles.kioskLogo}
            width="42"
            height="42"
          />
          <span className={styles.kioskTitle}>Baldo Vino</span>
        </div>
      )}

      <div className={styles.toolbar}>
        <div className={styles.searchWrap}>
          <label htmlFor="wine-search" className="sr-only">
            Cerca vini
          </label>
          <input
            id="wine-search"
            type="search"
            className={styles.searchInput}
            placeholder="Cerca per nome, produttore, regione, paese…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div
          className={styles.filters}
          role="group"
          aria-label="Filtra per categoria"
        >
          {CATEGORY_KEYS.map((key) => (
            <button
              key={key}
              type="button"
              className={clsx(
                styles.chip,
                category === key && styles.chipActive,
              )}
              onClick={() => setCategory(key)}
              aria-pressed={category === key}
            >
              {CATEGORY_LABELS[key]}
            </button>
          ))}
        </div>

        {availableCountries.length > 0 && (
          <div
            className={styles.filters}
            role="group"
            aria-label="Filtra per paese"
          >
            <button
              type="button"
              className={clsx(
                styles.chip,
                country === 'tutti' && styles.chipActive,
              )}
              onClick={() => setCountry('tutti')}
              aria-pressed={country === 'tutti'}
            >
              Tutti i Paesi
            </button>
            {availableCountries.map((c) => (
              <button
                key={c}
                type="button"
                className={clsx(
                  styles.chip,
                  country === c && styles.chipActive,
                )}
                onClick={() => setCountry(c)}
                aria-pressed={country === c}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className={styles.risultati} aria-live="polite">
        {filtered.length === 1
          ? '1 etichetta trovata'
          : `${filtered.length} etichette trovate`}
      </p>

      {filtered.length > 0 ? (
        <div className={clsx(styles.grid, isKiosk && styles.gridKiosk)}>
          {filtered.map((wine) => (
            <WineCard
              key={wine.id}
              wine={wine}
              isSelected={selectedId === wine.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>Nessun vino trovato per la ricerca corrente.</p>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={resetFilters}
          >
            Mostra tutti i vini
          </button>
        </div>
      )}

      <button
        type="button"
        className={clsx(
          styles.scrollTop,
          showScrollTop && styles.scrollTopVisible,
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Torna su"
      >
        ↑
      </button>
    </section>
  );
}

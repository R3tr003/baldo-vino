'use client';

import type { Wine } from '@/types/wine';
import styles from './WineCard.module.css';
import clsx from 'clsx';

export interface WineCardProps {
  wine: Wine;
  onSelect: (wine: Wine) => void;
  isSelected: boolean;
}

export default function WineCard({ wine, onSelect, isSelected }: WineCardProps) {
  return (
    <article
      className={clsx(styles.card, isSelected && styles.cardOpen)}
      onClick={() => onSelect(wine)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(wine);
        }
      }}
      aria-expanded={isSelected}
    >
      <div className={styles.header}>
        <h3 className={styles.nome}>{wine.nome}</h3>
        {wine.inEvidenza && (
          <span className={styles.badge} aria-label="In evidenza">
            In evidenza
          </span>
        )}
      </div>

      <p className={styles.produttore}>{wine.produttore}</p>

      <div className={styles.meta}>
        <span>
          {wine.regione}, {wine.paese}
        </span>
        {wine.annata !== '—' && (
          <span className={styles.annata}>{wine.annata}</span>
        )}
      </div>

      <p className={styles.prezzo}>
        {wine.prezzo.toLocaleString('it-IT', {
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}
      </p>

      {isSelected && (
        <div className={styles.detail}>
          <div className={styles.divider} aria-hidden="true" />
          <p className={styles.descrizione}>{wine.descrizione}</p>
        </div>
      )}
    </article>
  );
}

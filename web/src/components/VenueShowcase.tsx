import clsx from 'clsx';
import type { VenueChapter } from '@/types/venue';
import styles from './VenueShowcase.module.css';

export type VenueShowcaseProps = VenueChapter;

export default function VenueShowcase({
  kicker,
  title,
  paragraphs,
  highlights,
  image,
  imageAlt,
  reverse = false,
  tone = 'light',
  cta,
}: VenueShowcaseProps) {
  return (
    <section
      className={clsx(
        'editorial',
        `editorial--${tone}`,
        { 'editorial--reverse': reverse },
        'reveal',
      )}
      aria-label={`${kicker}. ${title}`}
    >
      <div
        className={clsx(
          'editorial__visual',
          reverse ? 'reveal--right' : 'reveal--left',
        )}
      >
        <img
          src={image}
          alt={imageAlt}
          width={1600}
          height={1060}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div
        className={clsx(
          'editorial__copy',
          reverse ? 'reveal--left' : 'reveal--right',
        )}
      >
        <div className="editorial-line" aria-hidden="true" />
        <p className="editorial__kicker">{kicker}</p>
        <h2 className="editorial__title">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={`${kicker}-${title}-p-${i}`} className="editorial__body">
            {p}
          </p>
        ))}
        {highlights && highlights.length > 0 && (
          <ul
            className={clsx(
              styles.highlights,
              tone === 'dark' && styles.highlightsDark,
            )}
          >
            {highlights.map((line, i) => (
              <li key={`${kicker}-${title}-h-${i}`}>{line}</li>
            ))}
          </ul>
        )}
        {cta && (
          <a
            className={clsx('btn', { 'btn--primary': tone === 'dark' })}
            href={cta.href}
          >
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
}

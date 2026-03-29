import { images } from '@/data/assets';
import { home } from '@/data/home';

export default function HomeHero() {
  return (
    <>
      <section className="hero" aria-label="Introduzione">
      	<div className="hero__media">
      		<img src={images.heroBaldo} alt="Baldo Vino nel Palazzo Cancellieri" width="1920" height="1080" loading="eager" />
      		<div className="hero__veil" aria-hidden="true" />
      	</div>
      	<div className="hero__content section__inner animate-in">
      		<p className="hero__eyebrow animate-in">{home.eyebrow}</p>
      		<h1 className="hero__title animate-in delay-1">{home.heroTitle}</h1>
      		<p className="hero__subtitle animate-in delay-2">{home.heroSubtitle}</p>
      		<p className="hero__lead animate-in delay-3">{home.heroLead}</p>
      		<div className="hero__actions animate-in delay-4">
      			<a className="btn btn--primary" href="#prenota">Prenota</a>
      			<a className="btn" href="/it/menu/">Scopri il menu</a>
      		</div>
      	</div>
      </section>
    </>
  );
}

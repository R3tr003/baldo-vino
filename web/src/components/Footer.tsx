import { venues } from '@/data/venues';
const v = venues;
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
      	<div className="site-footer__grid section__inner">
      		<div className="site-footer__block">
      			<h2 className="site-footer__title">{v.baldo.name}</h2>
      			<p className="site-footer__subtitle">{v.baldo.subtitle}</p>
      			<p className="site-footer__meta">{v.baldo.address}</p>
      			<p className="site-footer__meta">
      				<a href={v.baldo.phoneHref}>{v.baldo.phone}</a>
      			</p>
      			<p className="site-footer__hours">
      				<strong>{v.baldo.hoursWeek}</strong><br />
      				{v.baldo.hoursWeekText}
      			</p>
      			<p className="site-footer__hours">
      				<strong>{v.baldo.hoursSunTitle}</strong><br />
      				{v.baldo.hoursSunText}
      			</p>
      			<p className="site-footer__social">
      				<a href={v.baldo.facebook} rel="noopener noreferrer" target="_blank">Facebook</a>
      				<span aria-hidden="true"> · </span>
      				<a href={v.baldo.instagram} rel="noopener noreferrer" target="_blank">Instagram</a>
      			</p>
      		</div>
      
      		<div className="site-footer__block">
      			<h2 className="site-footer__title">{v.bibendum.name}</h2>
      			<p className="site-footer__subtitle">{v.bibendum.subtitle}</p>
      			<p className="site-footer__meta">{v.bibendum.address}</p>
      			<p className="site-footer__meta">
      				<a href={v.bibendum.phoneHref}>{v.bibendum.phone}</a>
      				<br />
      				<a href={v.bibendum.phoneMobileHref}>{v.bibendum.phoneMobile}</a>
      			</p>
      			<p className="site-footer__hours">
      				<strong>{v.bibendum.hoursWeek}</strong><br />
      				{v.bibendum.hoursWeekText}
      			</p>
      			<p className="site-footer__hours">
      				<strong>{v.bibendum.hoursWeekendTitle}</strong><br />
      				{v.bibendum.hoursWeekendText}
      			</p>
      			<p className="site-footer__social">
      				<a href={v.bibendum.facebook} rel="noopener noreferrer" target="_blank">Facebook</a>
      				<span aria-hidden="true"> · </span>
      				<a href={v.bibendum.instagram} rel="noopener noreferrer" target="_blank">Instagram</a>
      			</p>
      		</div>
      
      		<div className="site-footer__block site-footer__newsletter">
      			<h2 className="site-footer__title">Newsletter</h2>
      			<p className="site-footer__subtitle">Novità, degustazioni, nuovo menù? Lasciaci la tua email.</p>
      			<form className="site-footer__form" action="#" method="post" aria-label="Iscrizione newsletter">
      				<label className="sr-only" htmlFor="newsletter-email-footer">Email</label>
      				<input
      					id="newsletter-email-footer"
      					className="site-footer__input"
      					type="email"
      					name="email"
      					placeholder="La tua email"
      					autoComplete="email"
      					disabled
      				/>
      				<label className="site-footer__check">
      					<input type="checkbox" name="privacy" disabled />
      					<span>Ho letto l’informativa privacy (modulo attivabile nella prossima fase)</span>
      				</label>
      				<button type="button" className="btn btn--primary" disabled>Invia</button>
      			</form>
      		</div>
      	</div>
      
      	<div className="site-footer__bottom section__inner">
      		<p className="site-footer__legal">
      			© {year} BALDO VINO S.R.L. società unipersonale · P.IVA 01370050476
      		</p>
      		<p className="site-footer__links">
      			<a href="/it/privacy/cookie/">Cookie</a>
      			<span aria-hidden="true"> · </span>
      			<a href="/it/privacy/privacy/">Privacy</a>
      		</p>
      	</div>
      </footer>
    </>
  );
}

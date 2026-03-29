const lunchSlots = ['12:30', '12:45', '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30'];
const dinnerSlots = ['19:30', '19:45', '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45', '22:00'];

export default function BookingShell() {
  return (
    <>
      <section className="booking section reveal" id="prenota" aria-labelledby="prenota-heading">
      	<div className="section__inner booking__shell">
      		<div className="booking__intro">
      			<h2 className="booking__title" id="prenota-heading">Prenota un tavolo</h2>
      			<p className="booking__lead">
      				Modulo in fase di attivazione: nel prossimo step verra' collegato al motore prenotazioni ufficiale.
      			</p>
      		</div>
      		<details className="booking__panel">
      			<summary>
      				<span>Apri il pannello prenotazione</span>
      				<span className="booking__summary-note">Baldo Vino · Bibendum</span>
      			</summary>
      			<form className="booking__form" action="#" method="post">
      			<div className="booking__row">
      				<label className="booking__label" htmlFor="venue">Locale</label>
      				<select className="booking__control" id="venue" name="venue">
      					<option value="baldo">Baldo Vino — Ristorante</option>
      					<option value="bibendum">Bibendum — Bistrot</option>
      				</select>
      			</div>
      			<div className="booking__row">
      				<label className="booking__label" htmlFor="guests">Persone</label>
      				<select className="booking__control" id="guests" name="guests">
					{Array.from({ length: 6 }, (_, i) => (
     						<option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'persona' : 'persone'}</option>
     					))}
      				</select>
      			</div>
      			<div className="booking__row">
      				<label className="booking__label" htmlFor="date">Data</label>
      				<input className="booking__control" type="date" id="date" name="date" />
      			</div>
      			<div className="booking__row booking__row--split">
      				<div>
      					<span className="booking__label" id="slot-lunch">Pranzo</span>
      					<select className="booking__control" name="time_lunch" aria-labelledby="slot-lunch">
      						<option value="">—</option>
						{lunchSlots.map((t) => (
     							<option key={t} value={t}>{t}</option>
     						))}
      					</select>
      				</div>
      				<div>
      					<span className="booking__label" id="slot-dinner">Cena</span>
      					<select className="booking__control" name="time_dinner" aria-labelledby="slot-dinner">
      						<option value="">—</option>
						{dinnerSlots.map((t) => (
     							<option key={t} value={t}>{t}</option>
     						))}
      					</select>
      				</div>
      			</div>
      			<p className="booking__hint">
      				Se l’orario è vicino all’inizio del servizio, vi preghiamo di contattarci telefonicamente.
      			</p>
      			<label className="booking__check">
      				<input type="checkbox" name="privacy" required />
      				<span>Ho letto e accetto il trattamento dei dati personali</span>
      			</label>
      			<button type="button" className="btn btn--primary booking__submit" disabled>
      				Richiedi prenotazione
      			</button>
      			</form>
      		</details>
      	</div>
      </section>
    </>
  );
}

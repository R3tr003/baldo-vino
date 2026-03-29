interface Props {
	quote: string;
	author: string;
}
export default function SectionQuote(props: Props) {
  const { quote, author } = props;
  return (
    <>
      <section className="quote-section section reveal" aria-label="Citazione">
      	<div className="section__inner">
      		<blockquote className="quote-section__block">
      			<p className="quote-section__text">{quote}</p>
      			<footer className="quote-section__author">— {author}</footer>
      		</blockquote>
      	</div>
      </section>
    </>
  );
}

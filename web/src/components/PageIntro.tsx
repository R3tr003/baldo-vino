interface Props {
	title: string;
	subtitle?: string;
	lead?: string;
	image?: string;
	imageAlt?: string;
}
export default function PageIntro(props: Props) {
  const { title, subtitle, lead, image, imageAlt = "" } = props;
  return (
    <>
      <header className="page-intro">
      	{
      		image && (
      			<div className="page-intro__visual">
      				<img src={image} alt={imageAlt} width="1600" height="640" loading="eager" />
      				<div className="page-intro__veil" aria-hidden="true" />
      			</div>
      		)
      	}
      	<div className="page-intro__text section__inner animate-in">
      		<div className="editorial-line" aria-hidden="true"></div>
      		{subtitle && <p className="page-intro__kicker animate-in delay-1">{subtitle}</p>}
      		<h1 className="page-intro__title animate-in delay-2">{title}</h1>
      		{lead && <p className="page-intro__lead animate-in delay-3">{lead}</p>}
      	</div>
      </header>
    </>
  );
}

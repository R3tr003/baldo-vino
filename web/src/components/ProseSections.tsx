export interface Section {
	heading: string;
	body: string[];
}

interface Props {
	sections: Section[];
}

export default function ProseSections(props: Props) {
  const { sections } = props;
  return (
    <>
      <div className="prose-blocks section__inner">
      	{
      		sections.map((s) => (
      			<section key={s.heading} className="prose-block">
      				<h2 className="prose-block__h">{s.heading}</h2>
      				{s.body.map((p, i) => (
      					<p key={i}>{p}</p>
      				))}
      			</section>
      		))
      	}
      </div>
    </>
  );
}

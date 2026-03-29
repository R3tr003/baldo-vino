import clsx from "clsx";


interface Props {
  kicker: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tone?: "light" | "dark";
}

export default function EditorialSplit({
  kicker,
  title,
  body,
  href,
  linkLabel,
  image,
  imageAlt,
  reverse = false,
  tone = "light",
}: Props) {
  return (
    <section className={clsx("editorial", `editorial--${tone}`, { "editorial--reverse": reverse })}>
      <div className={clsx("editorial__visual", reverse ? "reveal--right" : "reveal--left")}>
        <img src={image} alt={imageAlt} width="1600" height="1060" loading="lazy" />
      </div>
      <div className={clsx("editorial__copy", reverse ? "reveal--left" : "reveal--right")}>
        <div className="editorial-line" aria-hidden="true"></div>
        <p className="editorial__kicker">{kicker}</p>
        <h2 className="editorial__title">{title}</h2>
        <p className="editorial__body">{body}</p>
        <a className={clsx("btn", { "btn--primary": tone === "dark" })} href={href}>
          {linkLabel}
        </a>
      </div>
    </section>
  );
}

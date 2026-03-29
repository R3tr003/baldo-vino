import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollReveal from "@/components/ScrollReveal";


interface Props {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <a className="skip-link" href="#main">
        Vai al contenuto
      </a>
      <Header />
      <div className="page-wrap">{children}</div>
      <Footer />
      <CookieBanner />
      <ScrollReveal />
    </>
  );
}

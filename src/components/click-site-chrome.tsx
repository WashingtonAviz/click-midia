import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, CircleCheck, Mail, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import clickpartsLogo from "@/assets/clickparts-logo.png.asset.json";
import { Button } from "@/components/ui/button";

type ClickHeaderProps = {
  onLead: () => void;
  sectionBase?: string;
  label?: "CLICK MÍDIA" | "CLICK PARTS BRASIL";
};

export function ClickHeader({ onLead, sectionBase = "", label = "CLICK MÍDIA" }: ClickHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchor = (id: string) => `${sectionBase}#${id}`;
  const closeMenu = () => setMenuOpen(false);
  const openLead = () => {
    closeMenu();
    onLead();
  };

  return (
    <header className="media-header shell">
      <Link className="brand-lockup" to="/click-midia" aria-label="Click Parts - página Click Mídia">
        <img src={clickpartsLogo.url} alt="Click Parts" />
        <b>{label === "CLICK MÍDIA" ? "CLICK" : "CLICK PARTS"}</b>
        {label === "CLICK MÍDIA" ? " MÍDIA" : " BRASIL"}
      </Link>
      <nav id="primary-navigation" className={menuOpen ? "is-open" : ""} aria-label="Navegação principal">
        <Link className="desktop-header-about" to="/quem-somos" onClick={closeMenu}>Quem somos</Link>
        <a href={anchor("audiencia")} onClick={closeMenu}>Audiência</a>
        <a href={anchor("inventario")} onClick={closeMenu}>Inventário</a>
        <a href={anchor("formatos")} onClick={closeMenu}>Formatos</a>
        <a href={anchor("pacotes")} onClick={closeMenu}>Pacotes</a>
      </nav>
      <div className="media-header-actions">
        <Link className="mobile-header-about" to="/quem-somos" onClick={closeMenu}>Quem somos</Link>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <Button className="header-cta" type="button" onClick={openLead}>Anunciar <ArrowRight /></Button>
      </div>
    </header>
  );
}

const WHATSAPP_URL =
  "https://wa.me/5521984231098?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Click%20Parts%20Brasil%20e%20gostaria%20de%20falar%20com%20o%20comercial.";

export function WhatsAppFloat() {
  const trackClick = () => {
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: "whatsapp_click", location: "floating_button", destination: "comercial" });
  };

  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o comercial da Click Parts pelo WhatsApp"
      title="Fale com nosso comercial"
      onClick={trackClick}
    >
      <span className="whatsapp-float-tip" aria-hidden="true">Fale com nosso comercial</span>
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.06 8.06 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.16-8.11 4.47 0 8.11 3.64 8.11 8.11 0 4.52-3.64 8.12-8.11 8.12Zm4.45-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}

export function ClickFooter() {
  return (
    <footer className="media-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand-lockup" to="/click-midia"><img src={clickpartsLogo.url} alt="Click Parts"/><b>Click Mídia</b></Link>
          <p>Retail media para o aftermarket automotivo.</p>
          <span className="footer-brand-badge"><ShieldCheck/> Ecossistema digital Click Parts Brasil</span>
        </div>
        <nav><b>ECOSSISTEMA</b><a href="/">Marketplace</a><a href="/servicos">Serviços</a><a href="/click-midia#formatos">Formatos de mídia</a></nav>
        <nav><b>TRANSPARÊNCIA</b><a href="/privacidade">Privacidade</a><a href="/termos">Termos de uso</a><a href="mailto:contato@clickpartsbrasil.app">Contato</a></nav>
        <div className="footer-contact"><b>COMERCIAL CLICK PARTS</b><a href="tel:+5521984231098"><Phone aria-hidden="true"/><span><small>Telefone comercial</small>(21) 98423-1098</span></a><a href="mailto:contato@clickpartsbrasil.app"><Mail aria-hidden="true"/><span><small>E-mail comercial</small>contato@clickpartsbrasil.app</span></a></div>
      </div>
      <div className="footer-bottom shell"><span>© 2026 Click Parts Brasil. Todos os direitos reservados.</span><span><ShieldCheck/> Ambiente oficial Click Parts</span></div>
    </footer>
  );
}

export function LeadDialog({ onClose }: { onClose: () => void }) {
  const [choice, setChoice] = useState("Ainda não sei");
  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="lead-dialog" role="dialog" aria-modal="true" aria-labelledby="lead-title" onMouseDown={(event) => event.stopPropagation()}>
        <Button className="dialog-close" variant="ghost" size="icon" type="button" onClick={onClose} aria-label="Fechar"><X /></Button>
        <Kicker>Atendimento e comercial</Kicker>
        <h2 id="lead-title">Vamos posicionar sua marca</h2>
        <p>Quatro dados e uma confirmação. Resposta direta do time Click Mídia.</p>
        <div className="dialog-progress"><span>Pergunta 1 de 5</span><b>20%</b><i><em/></i></div>
        <div className="dialog-question"><small>CLICK MÍDIA</small><h3>Qual formato mais combina com o que sua marca procura?</h3><p>Se ainda estiver avaliando, nosso comercial ajuda a escolher.</p></div>
        {["Logo Apenas", "Destaque de Marca", "Ainda não sei"].map((option) => (
          <Button className={`dialog-option ${choice === option ? "selected" : ""}`} variant="outline" type="button" key={option} onClick={() => setChoice(option)}>
            <span><b>{option}</b><small>{option === "Logo Apenas" ? "Presença recorrente nos carrosséis de marcas." : option === "Destaque de Marca" ? "Card visual para ampliar impacto e autoridade." : "Quero orientação do time comercial."}</small></span>
            {choice === option ? <CircleCheck/> : <ChevronRight/>}
          </Button>
        ))}
        <div className="dialog-footer"><a href={`mailto:contato@clickpartsbrasil.app?subject=${encodeURIComponent(`Click Mídia — ${choice}`)}`}>Continuar <ArrowRight/></a></div>
      </section>
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <span className="section-kicker">{children}</span>;
}

import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  Bell,
  Check,
  ChevronRight,
  GalleryHorizontal,
  MapPin,
  Megaphone,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { ClickFooter, ClickHeader, Kicker, LeadDialog, WhatsAppFloat } from "@/components/click-site-chrome";

import banner12x from "../assets/banner-12x.webp.asset.json";
import offersScreen from "../assets/offers-screen.png.asset.json";

import brazilMapImg from "../assets/brazil-map-intent.png.asset.json";
import bateria from "../assets/bateria.webp.asset.json";
import bomba from "../assets/bomba.webp.asset.json";
import bosch from "../assets/bosch.webp.asset.json";
import clickpartsLogo from "../assets/clickparts-logo.png.asset.json";
import cofapFeature from "../assets/cofap-feature.webp.asset.json";
import cofap from "../assets/cofap.webp.asset.json";
import correia from "../assets/correia.png.asset.json";
import embreagem from "../assets/embreagem.webp.asset.json";
import fremax from "../assets/fremax.webp.asset.json";
import mobilFeature from "../assets/mobil-feature.webp.asset.json";
import nakataFeature from "../assets/nakata-feature.webp.asset.json";
import nakata from "../assets/nakata.webp.asset.json";
import ngk from "../assets/ngk.webp.asset.json";
import sensor from "../assets/sensor.png.asset.json";
import skf from "../assets/skf.webp.asset.json";
import vela from "../assets/vela.webp.asset.json";

export const Route = createFileRoute("/click-midia")({
  head: () => ({
    meta: [
      { title: "Click Mídia | Decisão de compra" },
      { name: "description", content: "Retail media para o aftermarket automotivo dentro de jornadas reais de busca e compra." },
      { property: "og:title", content: "Click Mídia | Decisão de compra" },
      { property: "og:description", content: "Sua marca presente no momento da decisão de compra no ecossistema Click Parts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ClickMidiaPage,
});

const brands = [
  { name: "Bosch", src: bosch.url }, { name: "Cofap", src: cofap.url },
  { name: "Nakata", src: nakata.url }, { name: "Fremax", src: fremax.url },
  { name: "SKF", src: skf.url }, { name: "NGK", src: ngk.url },
];

const products = [
  { tag: "IGNIÇÃO", name: "Vela NGK alta performance", price: "R$ 29,90", stock: "12 disponíveis", src: vela.url },
  { tag: "INJEÇÃO", name: "Sensor de oxigênio", price: "R$ 189,90", stock: "7 disponíveis", src: sensor.url },
  { tag: "TRANSMISSÃO", name: "Kit de embreagem completo", price: "R$ 649,90", stock: "4 disponíveis", src: embreagem.url },
];

const offerProducts = [
  { tag: "MOTOR", name: "Correia dentada", price: "R$ 84,90", stock: "19 disponíveis", src: correia.url },
  { tag: "ELÉTRICA", name: "Bateria automotiva 60Ah", price: "R$ 459,90", stock: "8 disponíveis", src: bateria.url },
  { tag: "INJEÇÃO", name: "Bomba de combustível", price: "R$ 219,90", stock: "6 disponíveis", src: bomba.url },
];

function ClickMidiaPage() {
  const [leadOpen, setLeadOpen] = useState(false);
  const openLead = () => setLeadOpen(true);
  return (
    <div className="media-page">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <ClickHeader onLead={openLead} />
      <main id="conteudo">
        <Hero onLead={openLead} />
        <Audience />
        <Inventory />
        <Pricing onLead={openLead} />
        <FinalCta onLead={openLead} />
      </main>
      <ClickFooter />
      <WhatsAppFloat />
      <button className="mobile-sticky" type="button" onClick={openLead}><span>✣</span> Anunciar no Click Mídia <ArrowRight /></button>
      {leadOpen && <LeadDialog onClose={() => setLeadOpen(false)} />}
    </div>
  );
}

function Hero({ onLead }: { onLead: () => void }) {
  return <section className="hero shell" aria-labelledby="page-title">
    <div className="hero-copy">
      <Kicker>Click Media</Kicker>
      <h1 id="page-title">Sua marca<br />no momento<br /><span>da decisão de compra.</span></h1>
      <p>Retail media para o aftermarket automotivo, dentro do ambiente onde o cliente busca, compara e compra peças e serviços.</p>
      <div className="audience-chips" aria-label="Públicos alcançados"><b>B2B</b><i>+</i><b>B2C</b><i>+</i><b>Prestadores</b></div>
      <div className="hero-actions"><button className="primary-cta" type="button" onClick={onLead}>Anuncie no Click Mídia <ArrowRight /></button><a className="text-cta" href="#inventario">Conhecer inventário <ArrowDown /></a></div>
    </div>
    <figure className="hero-offers-image">
      <img src={offersScreen.url} alt="Tela de ofertas do marketplace Click Parts: banner de autopeças em até 12x sem juros, marcas disponíveis e destaque de produtos, em desktop e celular" loading="eager" />
    </figure>

  </section>;
}

function Audience() {
  const categories = [["Suspensão e Direção", "21%"], ["Freios", "17%"], ["Motor e Reposição", "14%"], ["Elétrica e Ignição", "12%"], ["Filtros", "11%"]];
  const locations = [["Rio de Janeiro", "37 municípios"], ["São Paulo", "29 municípios"], ["Minas Gerais", "14 municípios"], ["Espírito Santo", "9 municípios"], ["Outros estados", "18 municípios"]];
  return <section id="audiencia" className="audience-section section-band">
    <div className="shell">
      <header className="section-heading audience-heading"><Kicker>Audiência</Kicker><h2>Não é audiência genérica.<br /><span>É intenção de compra.</span></h2><p>A Click Parts conecta sua marca a oficinas, prestadores, autopeças e consumidores dentro de jornadas reais de busca e compra.</p><p>Sua marca não aparece para qualquer pessoa. Ela aparece dentro de um ecossistema onde peças estão sendo pesquisadas, comparadas e compradas.</p></header>
      <div className="intent-grid">
        <article className="intent-card">
          <div className="card-label"><Search /> Intenção de compra</div>
          <div className="intent-stat"><div><strong>32.186</strong><b>BUSCAS POR PEÇAS</b><span>nos últimos 30 dias</span></div><div className="growth"><strong>+61%</strong><span>NO PERÍODO</span></div></div>
          <LineChart />
          <h3>ISSO NÃO É APENAS TRÁFEGO.<br /><span>É INTENÇÃO.</span></h3>
        </article>
        <article className="category-card"><div className="card-label">Categorias mais buscadas</div><div className="category-list">{categories.map(([name, pct]) => <div className="category-row" key={name}><div><span>{name}</span><b>{pct}</b></div><i><em style={{ width: pct }} /></i></div>)}</div></article>
      </div>
      <div className="geo-grid">
        <article className="geo-copy"><Kicker>Geolocalização</Kicker><h2>A intenção tem endereço.</h2><div className="municipal"><strong>107</strong><span>MUNICÍPIOS<br />ALCANÇADOS</span></div><div className="location-list">{locations.map(([state, count]) => <div key={state}><span>{state}</span><b>{count}</b></div>)}</div></article>
        <BrazilMap />
      </div>
      <div className="intelligence"><span>INTELIGÊNCIA DO ECOSSISTEMA</span><div className="signal-flow">{["ESTADO", "CIDADE", "CATEGORIA", "VEÍCULO", "PEÇA", "MARCA", "INTENÇÃO"].map((item, i) => <div key={item}><b>{item}</b>{i < 6 && <ArrowRight />}</div>)}</div></div>
      <div className="audience-close"><span>MARCA CERTA.</span><span>PÚBLICO CERTO.</span><span>MOMENTO CERTO.</span></div>
    </div>
  </section>;
}

function LineChart() {
  return <svg className="line-chart" viewBox="0 0 640 190" role="img" aria-label="Gráfico conceitual de crescimento da intenção de compra">
    <defs><linearGradient id="line" x1="0" x2="1"><stop stopColor="currentColor" /><stop offset="1" stopColor="var(--media-gold)" /></linearGradient><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="var(--media-red)" stopOpacity=".34"/><stop offset="1" stopColor="var(--media-red)" stopOpacity="0"/></linearGradient></defs>
    <g className="chart-grid"><path d="M0 30H640M0 80H640M0 130H640M0 180H640" /></g><path className="chart-area" d="M0 166 C70 158 88 145 145 150 S230 120 286 126 S350 104 405 112 S485 75 526 83 S588 42 640 28 V190H0Z"/><path className="chart-line" d="M0 166 C70 158 88 145 145 150 S230 120 286 126 S350 104 405 112 S485 75 526 83 S588 42 640 28"/><circle cx="640" cy="28" r="6" />
  </svg>;
}

function BrazilMap() {
  return <article className="map-card map-card--image" aria-label="Mapa do Brasil com concentração de intenção de compra">
    <img src={brazilMapImg.url} alt="Mapa do Brasil — Inteligência geográfica: onde a intenção acontece. Maior concentração em vermelho e intenção identificada em amarelo, concentradas no Sudeste e Sul. A Click sabe onde a intenção de compra está acontecendo." loading="lazy" />
  </article>;
}

function Inventory() {
  const experiences = [
    { n:"01", phase:"DESCOBERTA", title:"MARKETPLACE", copy:"Sua marca presente na experiência de descoberta, pesquisa e compra.", mock:<MarketplaceMockup variant="compact" /> },
    { n:"02", phase:"ROTINA PROFISSIONAL", title:"SISTEMA DE GESTÃO DA OFICINA", copy:"Sua marca dentro da rotina de quem compra peças todos os dias.", mock:<WorkshopMockup /> },
    { n:"03", phase:"DECISÃO", title:"PÁGINA DE COMPRA DA OFICINA", copy:"Sua marca logo abaixo do buscador, próxima aos produtos no momento da decisão.", mock:<SearchMockup /> },
  ];
  return <section id="inventario" className="inventory-section section-band"><span id="formatos" className="anchor-offset" />
    <div className="shell"><header className="section-heading inventory-heading"><Kicker>Onde sua marca aparece</Kicker><h2>Sua marca presente durante a jornada de compra.</h2><p>Do primeiro contato à decisão, a marca permanece presente dentro do ecossistema Click Parts.</p></header>
      <div className="journey-line" aria-hidden="true"><span>DESCOBERTA</span><i/><span>ROTINA PROFISSIONAL</span><i/><span>DECISÃO</span></div>
      <div className="experience-grid">{experiences.map((e)=><article className="experience" key={e.n}><div className="experience-number">{e.n}</div><span className="experience-phase">{e.phase}</span>{e.mock}<div className="experience-copy"><h3>{e.title}</h3><p>{e.copy}</p></div></article>)}</div>
    </div>
  </section>;
}

function BrowserFrame({ children, label }: { children: ReactNode; label: string }) { return <div className="browser-frame"><div className="browser-chrome"><i/><i/><i/><span>{label}</span></div>{children}</div>; }
function BrandStrip({ compact=false }: { compact?: boolean }) { return <div className={compact?"brand-strip brand-strip--compact":"brand-strip"}><span><b>CLICK MÍDIA</b> Marcas disponíveis</span><div>{brands.map(b=><figure key={b.name}><img src={b.src} alt={b.name}/></figure>)}</div></div>; }
function ProductGrid({ offers=false }: { offers?: boolean }) { return <div className="product-grid">{(offers?offerProducts:products).map(p=><article key={p.name}><img src={p.src} alt={p.name}/><small>{p.tag}</small><b>{p.name}</b><strong>{p.price}</strong><span>{p.stock}</span></article>)}</div>; }

function MarketplaceMockup({ variant }: { variant: "hero"|"compact" }) { return <div className={`marketplace-mockup marketplace-mockup--${variant}`}><BrowserFrame label="Marketplace"><div className="market-search"><img src={clickpartsLogo.url} alt=""/><span><MapPin/> Digite seu CEP</span><span className="wide"><Search/> Buscar inteligente: peças, placas, códigos, aplicações e marcas</span><ShoppingCart/><User/></div><div className="market-banner" style={{backgroundImage:`url(${banner12x.url})`}}><small>FACILIDADE DE PAGAMENTO</small><b>Autopeças em até<br/><em>12X SEM JUROS</em></b><span>Qualidade garantida, pós-venda especializado e peças para todos os modelos.</span></div><BrandStrip compact /><div className="feature-grid"><figure><img src={cofapFeature.url} alt="Suspensão para todos os caminhos"/><b>COFAP</b></figure><figure><img src={nakataFeature.url} alt="Confiança em cada movimento"/><b>NAKATA</b></figure><figure><img src={mobilFeature.url} alt="Proteção que leva mais longe"/><b>MOBIL</b></figure></div><ProductGrid/></BrowserFrame></div>; }

function WorkshopMockup() { return <BrowserFrame label="Área do prestador"><div className="dashboard"><aside><img src={clickpartsLogo.url} alt=""/><b>Prestador</b>{[1,2,3,4,5].map(i=><i key={i}/>)}</aside><div className="dashboard-main"><header><span>Dashboard<br/><b>Visão geral</b></span><Bell/></header><BrandStrip compact/><small>Produtos em destaque</small><ProductGrid/><small>Produtos em oferta</small><ProductGrid offers/><div className="dashboard-stats"><span>Serviços ativos<b>156</b></span><span>Solicitações<b>345</b></span><span>Avaliação<b>4,9</b></span><span>Entradas<b>+18%</b></span></div></div></div></BrowserFrame>; }
function SearchMockup() { return <BrowserFrame label="Busca de produtos"><div className="search-page"><div className="search-bar"><Search/><span>Buscar produtos, códigos e marcas</span><User/></div><div className="breadcrumbs">Início <ChevronRight/> Produtos</div><BrandStrip compact/><h4>Produtos disponíveis</h4><ProductGrid/><div className="decision-badge"><ShoppingCart/> <span><b>Decisão de compra</b>presença integrada</span></div></div></BrowserFrame>; }

function Pricing({ onLead }: { onLead: () => void }) { return <section id="pacotes" className="pricing-section section-band"><div className="shell"><header className="section-heading inventory-heading"><Kicker>Pacotes</Kicker><h2>Oferta comercial simples<br/>para ocupar categoria.</h2><p>Dois formatos. Três períodos. Quanto maior o tempo, melhor o custo de presença diária.</p></header><div className="pricing-grid"><PriceCard accent="gold" badge="ALTA VISIBILIDADE" title="Logo Apenas" description="Presença em carrosséis de logos." prices={["R$ 999,00","R$ 1.799,00","R$ 3.199,00"]} onLead={onLead}/><PriceCard accent="red" badge="MAIS IMPACTO" title="Destaque de Marca" description="Card visual com maior impacto." prices={["R$ 1.699,00","R$ 2.999,00","R$ 5.499,00"]} onLead={onLead}/></div><p className="pricing-note"><span>●</span> Valores da oferta comercial de referência. Vagas, posições, categorias e condições estão sujeitas à disponibilidade do inventário.</p></div></section>; }
function PriceCard({accent,badge,title,description,prices,onLead}:{accent:"gold"|"red";badge:string;title:string;description:string;prices:string[];onLead:()=>void}) { const periods=["3 meses","6 meses","1 ano"]; const FormatIcon=accent==="gold"?GalleryHorizontal:Megaphone; return <article className={`price-card price-card--${accent}`}><div className="price-badge">✦ {badge}</div><header><div className="price-icon"><FormatIcon aria-hidden="true" /></div><span><small>FORMATO</small><h3>{title}</h3></span></header><p>{description}</p><div className="prices">{periods.map((p,i)=><div key={p}><span><b>{p}</b>{i===1&&<small>MAIS ESCOLHIDO</small>}{i===2&&<small>MELHOR CUSTO/DIA</small>}</span><strong>{prices[i]}</strong></div>)}</div><button type="button" onClick={onLead}>Quero este formato <ArrowRight/></button></article>; }

function FinalCta({onLead}:{onLead:()=>void}) { return <section className="final-cta shell"><div><Kicker>Próximo passo</Kicker><h2>Sua marca dentro da Click, perto da compra e do consumidor.</h2><p>Campanha com presença no B2C, no ambiente do prestador e nas jornadas de busca. A mídia acompanha a intenção certa, o público certo e o momento certo.</p><div className="footer-chips"><span>B2C</span><span>Prestador</span><span>Busca</span><span>Produto</span></div></div><aside><h3>ANUNCIE AGORA</h3><p>Retail media para o aftermarket automotivo</p><button type="button" onClick={onLead}>Falar com o comercial <ArrowRight/></button></aside></section>; }

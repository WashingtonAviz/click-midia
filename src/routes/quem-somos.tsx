import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Box,
  Building2,
  Car,
  Check,
  CircleDollarSign,
  Database,
  Factory,
  MapPin,
  Network,
  PackageCheck,
  Search,
  Store,
  Truck,
  UserRound,
  Warehouse,
  Wrench,
} from "lucide-react";
import { Fragment, useRef, useState, type CSSProperties } from "react";

import {
  ClickFooter,
  ClickHeader,
  Kicker,
  LeadDialog,
  WhatsAppFloat,
} from "@/components/click-site-chrome";
import { assetUrl } from "@/lib/asset-url";
import type { ClickMidiaPlan } from "@/services/click-midia-lead";
import { Button } from "@/components/ui/button";
import marketplaceMockup from "@/assets/marketplace-mockup.png.asset.json";
import journeyCustomerPhoto from "@/assets/journey-customer-keys.png.asset.json";
import journeyWorkshopPhoto from "@/assets/journey-workshop-os.png.asset.json";
import journeySearchPhoto from "@/assets/journey-search-parts.png.asset.json";
import journeyGeolocationPhoto from "@/assets/journey-geolocation-map.png.asset.json";
import journeyPartsStorePhoto from "@/assets/journey-parts-store.png.asset.json";
import journeySalePhoto from "@/assets/journey-sale.png.asset.json";
import journeyLogisticsPhoto from "@/assets/journey-logistics-motoboy.png.asset.json";
import journeyPickupPhoto from "@/assets/journey-pickup-moto.png.asset.json";
import journeyDeliveryPhoto from "@/assets/journey-delivery.png.asset.json";
import journeyServicePhoto from "@/assets/journey-service-keys.png.asset.json";
import ecosystemMarketplaceB2c from "@/assets/ecosystem-marketplace-b2c.png.asset.json";
import ecosystemMarketplaceB2b from "@/assets/ecosystem-marketplace-b2b.png.asset.json";
import ecosystemWorkshop from "@/assets/ecosystem-workshop-management.png.asset.json";
import ecosystemFiscal from "@/assets/ecosystem-fiscal-manager.png.asset.json";
import ecosystemPos from "@/assets/ecosystem-pos-sales.png.asset.json";
import ecosystemWallet from "@/assets/ecosystem-digital-wallet.png.asset.json";
import ecosystemShipping from "@/assets/ecosystem-shipping.png.asset.json";
import ecosystemCatalog from "@/assets/ecosystem-parts-catalog.png.asset.json";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos | Click Parts Brasil" },
      {
        name: "description",
        content:
          "Conheça o ecossistema tecnológico que conecta empresas, profissionais, consumidores, operações e dados do aftermarket automotivo.",
      },
      { property: "og:title", content: "Quem Somos | Click Parts Brasil" },
      {
        property: "og:description",
        content:
          "Um ecossistema tecnológico criado para conectar todos os elos do aftermarket automotivo.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://clickpartsbrasil.com/click-midia/quem-somos",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://clickpartsbrasil.com/click-midia/quem-somos" }],
  }),
  component: AboutPage,
});

const journey = [
  { title: "CONSUMIDOR", text: "O cliente chega à oficina.", icon: UserRound, scene: "arrival" },
  {
    title: "OFICINA",
    text: "A oficina inicia o atendimento e gera a Ordem de Serviço.",
    icon: Wrench,
    scene: "order",
  },
  {
    title: "BUSCA DE PEÇAS",
    text: "A peça necessária é pesquisada sem sair da operação.",
    icon: Search,
    scene: "search",
  },
  {
    title: "GEOLOCALIZAÇÃO",
    text: "A Click identifica disponibilidade e fornecedores por geolocalização.",
    icon: MapPin,
    scene: "map",
  },
  {
    title: "AUTOPEÇA",
    text: "A autopeça conectada recebe a demanda.",
    icon: Store,
    scene: "request",
  },
  {
    title: "VENDA",
    text: "A venda acontece e o estoque acompanha a operação.",
    icon: PackageCheck,
    scene: "sale",
  },
  {
    title: "CLICK DRIVE / LOGÍSTICA",
    text: "A logística é acionada.",
    icon: Truck,
    scene: "dispatch",
  },
  { title: "COLETA", text: "A peça é coletada na autopeça.", icon: Box, scene: "pickup" },
  { title: "ENTREGA", text: "A peça chega à oficina.", icon: Truck, scene: "delivery" },
  { title: "SERVIÇO", text: "O serviço continua.", icon: Car, scene: "service" },
];
const signals = [
  "O QUE É BUSCADO",
  "QUEM BUSCA",
  "ONDE BUSCA",
  "O QUE COMPRA",
  "QUEM COMPRA",
  "ONDE COMPRA",
  "QUAL VEÍCULO",
  "QUAL PEÇA",
  "QUAL MARCA",
  "QUAL REGIÃO",
  "QUAL DISPONIBILIDADE",
  "QUAL DEMANDA",
];
const ecosystemSolutions = [
  {
    title: "Marketplace B2C",
    text: "O primeiro do Brasil a conectar peças e serviços via geolocalização.",
    image: ecosystemMarketplaceB2c,
    alt: "Marketplace B2C Click Parts em telas de computador e celular",
  },
  {
    title: "Marketplace B2B",
    text: "Conectando e respeitando todos os elos do setor.",
    image: ecosystemMarketplaceB2b,
    alt: "Marketplace B2B Click Parts em telas de computador e celular",
  },
  {
    title: "Gestão de Oficinas",
    text: "Conectando gestão e busca de peças no mesmo ambiente.",
    image: ecosystemWorkshop,
    alt: "Sistema Click Parts para gestão de oficinas",
  },
  {
    title: "Gestor Fiscal",
    text: "Gestor fiscal para suporte em todo o B2B multicanal: físico + digital.",
    image: ecosystemFiscal,
    alt: "Gestor fiscal Click Parts em telas de computador e celular",
  },
  {
    title: "PDV de Vendas",
    text: "Sistema PDV de vendas B2B multicanal: físico + digital.",
    image: ecosystemPos,
    alt: "PDV de vendas Click Parts em telas de computador e celular",
  },
  {
    title: "Carteira Digital Click",
    text: "Gerencie todos os recebíveis de forma interligada em todos os canais Click.",
    image: ecosystemWallet,
    alt: "Carteira Digital Click em telas de computador e celular",
  },
  {
    title: "Click Envios",
    text: "Logística integrada em todo o sistema possibilitando dinamismo a todos os elos do ecossistema.",
    image: ecosystemShipping,
    alt: "Sistema Click Envios em telas de computador e celular",
  },
  {
    title: "Catálogo de Peças Click",
    text: "Base de catálogo proprietário, curado e enriquecido para suporte de nossos parceiros.",
    image: ecosystemCatalog,
    alt: "Catálogo de peças Click em telas de computador e celular",
  },
];
const values = [
  ["CONEXÃO", "A tecnologia só gera valor quando aproxima pessoas, empresas e oportunidades."],
  ["EFICIÊNCIA", "Menos atrito. Menos etapas. Mais resultado."],
  ["INTELIGÊNCIA", "Dados precisam gerar entendimento e melhores decisões."],
  ["RESPEITO À CADEIA", "Transformamos o mercado fortalecendo seus elos, não eliminando-os."],
  [
    "ACESSIBILIDADE",
    "A transformação digital precisa chegar também aos pequenos e médios negócios.",
  ],
  ["EVOLUÇÃO", "Construímos, aprendemos, medimos e evoluímos continuamente."],
];

function AboutPage() {
  const [leadOpen, setLeadOpen] = useState(false);
  const openLead = (_source = "quem-somos", _plan: ClickMidiaPlan = "orientacao") =>
    setLeadOpen(true);
  return (
    <div className="media-page about-page">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <ClickHeader onLead={openLead} sectionBase="/click-midia" label="CLICK PARTS BRASIL" />
      <main id="conteudo">
        <AboutHero />
        <ConnectedEcosystem />
        <DigitalThesis />
        <OperationalJourney />
        <DataIntelligence />
        <WholeEcosystem />
        <Purpose />
        <Values />
        <AboutClosing />
      </main>
      <ClickFooter />
      <WhatsAppFloat />
      {leadOpen && <LeadDialog ctaSource="quem-somos-header" onClose={() => setLeadOpen(false)} />}
    </div>
  );
}

function AboutHero() {
  return (
    <section className="about-hero shell" aria-labelledby="about-title">
      <div className="about-hero-copy">
        <Kicker>Click Parts Brasil</Kicker>
        <h1 id="about-title">
          SOMOS O MAIS COMPLETO
          <br />
          <span>ECOSSISTEMA DIGITAL</span>
          <br />
          DO SETOR AUTOMOTIVO
          <br />
          DO BRASIL E DA AMÉRICA LATINA.
        </h1>
        <p>
          A Click Parts nasceu para conectar, com inteligência, os diferentes elos do aftermarket
          automotivo em um único ecossistema digital.
        </p>
        <strong>
          Da indústria ao consumidor. Da busca à compra. Do estoque à entrega. Da operação ao dado.
        </strong>
      </div>
      <figure className="about-hero-image">
        <img
          src={assetUrl(marketplaceMockup)}
          alt="Tela do marketplace Click Parts: autopeças em até 12x sem juros, marcas disponíveis e destaque de produtos, em desktop e celular"
          loading="eager"
        />
      </figure>
    </section>
  );
}

const chain = [
  { title: "INDÚSTRIA", role: "Tem produto.", icon: Factory },
  { title: "DISTRIBUIDORA", role: "Tem estoque e distribuição.", icon: Warehouse },
  { title: "AUTOPEÇA", role: "Tem relacionamento local.", icon: Store },
  { title: "OFICINA / PRESTADOR", role: "Tem demanda.", icon: Car },
  { title: "CONSUMIDOR", role: "Tem necessidade.", icon: UserRound },
];

function ChainCard({ elo, index }: { elo: (typeof chain)[number]; index: number }) {
  const Icon = elo.icon;
  return (
    <div className="chain-card">
      <span className="chain-num">0{index + 1}</span>
      <Icon aria-hidden="true" />
      <b>{elo.title}</b>
      <small>{elo.role}</small>
    </div>
  );
}

function ConnectedEcosystem() {
  return (
    <section id="ecossistema" className="about-section ecosystem-section">
      <div className="shell">
        <header className="about-heading">
          <Kicker>Um ecossistema conectado</Kicker>
          <h2>
            CADA ELO TEM SEU PAPEL.
            <br />A CLICK CONECTA <span>TODOS ELES.</span>
          </h2>
          <p>O aftermarket funciona em camadas. A Click respeita cada uma delas.</p>
        </header>
        <div className="chain-network">
          <div className="chain-row chain-row--top">
            {chain.slice(0, 3).map((elo, index, list) => (
              <Fragment key={elo.title}>
                <ChainCard elo={elo} index={index} />
                {index < list.length - 1 && (
                  <div className="chain-bridge" aria-hidden="true">
                    <i />
                    <ArrowRight />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          <div className="chain-row chain-row--bottom">
            {chain.slice(3).map((elo, index, list) => (
              <Fragment key={elo.title}>
                <ChainCard elo={elo} index={index + 3} />
                {index < list.length - 1 && (
                  <div className="chain-bridge" aria-hidden="true">
                    <i />
                    <ArrowRight />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
          <div className="chain-digital">
            <Network />
            <span>CONEXÃO DIGITAL</span>
            <b>A Click conecta cada elo por tecnologia.</b>
          </div>
        </div>
        <div className="chain-statements">
          <p>Fabricantes negociam com distribuidoras.</p>
          <p>Distribuidoras abastecem autopeças.</p>
          <p>Autopeças atendem oficinas e consumidores.</p>
          <p>Oficinas prestam o serviço ao cliente.</p>
        </div>
        <div className="chain-close">
          <p>A Click conecta essas relações sem romper a cadeia.</p>
          <h3>
            CONECTAR.
            <br />
            <span>NÃO SUBSTITUIR.</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

function DigitalThesis() {
  return (
    <section className="about-section thesis-section">
      <div className="shell thesis-grid">
        <div>
          <Kicker>Nossa tese sobre digitalização</Kicker>
          <h2>
            DIGITALIZAR NÃO É APENAS
            <br />
            ENTREGAR TECNOLOGIA.
          </h2>
          <h3>
            É FAZER A TECNOLOGIA
            <br />
            CONECTAR A OPERAÇÃO.
          </h3>
        </div>
        <div className="thesis-copy">
          <p>
            Não acreditamos em digitalização baseada apenas em colocar processos tradicionais dentro
            de uma tela.
          </p>
          <p>
            Acreditamos em tecnologia capaz de conectar empresas, pessoas, estoque, demanda,
            logística, pagamentos e dados dentro de uma mesma jornada.
          </p>
          <strong>
            Quando cada ferramenta conversa com a próxima etapa da operação, tecnologia deixa de ser
            apenas software e passa a ser infraestrutura para o negócio.
          </strong>
        </div>
      </div>
    </section>
  );
}

function OperationalJourney() {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) =>
    rail.current?.scrollBy({ left: direction * 390, behavior: "smooth" });
  return (
    <section className="about-section journey-section">
      <div className="shell">
        <header className="about-heading journey-heading">
          <div>
            <Kicker>Uma jornada. Um ecossistema.</Kicker>
            <h2>
              DO CLIENTE À PEÇA.
              <br />
              DA PEÇA À ENTREGA.
              <br />
              <span>TUDO CONECTADO.</span>
            </h2>
          </div>
          <div className="journey-controls">
            <Button
              variant="outline"
              size="icon"
              aria-label="Ver etapa anterior"
              onClick={() => scroll(-1)}
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Ver próxima etapa"
              onClick={() => scroll(1)}
            >
              <ArrowRight />
            </Button>
          </div>
          <span className="journey-swipe-hint">
            Deslize para explorar <ArrowRight aria-hidden="true" />
          </span>
        </header>
      </div>
      <div ref={rail} className="journey-rail" aria-label="Jornada operacional conectada">
        {journey.map((item, index) => (
          <JourneyCard key={item.title} item={item} index={index} />
        ))}
      </div>
      <div className="shell journey-summary">
        <div className="journey-sequence">
          {[
            "CONSUMIDOR",
            "OFICINA",
            "O.S.",
            "BUSCA",
            "GEOLOCALIZAÇÃO",
            "AUTOPEÇA",
            "COMPRA",
            "LOGÍSTICA",
            "ENTREGA",
            "SERVIÇO",
          ].map((item, index, list) => (
            <span key={item}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              <b>{item}</b>
              {index < list.length - 1 && <ArrowRight />}
            </span>
          ))}
        </div>
        <h3>
          ISSO É <span>CONECTAR.</span>
        </h3>
        <p>
          Uma operação que antes acontecia em sistemas, mensagens, ligações e processos separados
          passa a fazer parte de uma jornada conectada.
        </p>
      </div>
    </section>
  );
}

function JourneyCard({ item, index }: { item: (typeof journey)[number]; index: number }) {
  const Icon = item.icon;
  return (
    <article className="journey-card">
      <header>
        <span>0{index + 1}</span>
        <b>{item.title}</b>
      </header>
      <div className={`journey-scene journey-scene--${item.scene}`}>
        {item.scene === "arrival" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeyCustomerPhoto)}
            alt="Cliente recebendo as chaves do veículo na oficina"
            loading="lazy"
          />
        ) : item.scene === "order" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeyWorkshopPhoto)}
            alt="Oficina usando o sistema Click Parts no balcão enquanto o cliente recebe no celular a notificação de Ordem de Serviço aberta"
            loading="lazy"
          />
        ) : item.scene === "search" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeySearchPhoto)}
            alt="Oficina pesquisando pastilha de freio no sistema Click Parts, com resultados de fornecedores, preços e disponibilidade em estoque"
            loading="lazy"
          />
        ) : item.scene === "map" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeyGeolocationPhoto)}
            alt="Mapa de geolocalização do sistema Click Parts mostrando oficinas e autopeças próximas, com a pastilha de freio em estoque na Peçauto Autopeças a 1,0 km"
            loading="lazy"
          />
        ) : item.scene === "request" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeyPartsStorePhoto)}
            alt="Atendente de autopeça recebendo no sistema Click Parts a solicitação de pedido de peça, com status de preparação e transporte"
            loading="lazy"
          />
        ) : item.scene === "sale" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeySalePhoto)}
            alt="Venda confirmada no sistema Click Parts na autopeça, com pedido em preparação e motoboy recebendo no celular a nova coleta do filtro de cabine"
            loading="lazy"
          />
        ) : item.scene === "dispatch" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeyLogisticsPhoto)}
            alt="Motoboy Click Drive recebendo a caixa de pastilhas de freio Bosch no balcão da autopeça, com o sistema de vendas Click Parts ao lado"
            loading="lazy"
          />
        ) : item.scene === "pickup" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeyPickupPhoto)}
            alt="Motoboy Click Parts em rota de entrega, com o app exibindo a rota no celular e o entregador de costas com o baú Click Parts"
            loading="lazy"
          />
        ) : item.scene === "delivery" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeyDeliveryPhoto)}
            alt="Motoboy Click Parts entregando a caixa de pastilhas de freio Bosch ao mecânico na oficina, com o veículo no elevador ao fundo"
            loading="lazy"
          />
        ) : item.scene === "service" ? (
          <img
            className="scene-photo"
            src={assetUrl(journeyServicePhoto)}
            alt="Mecânico entregando as chaves do veículo ao cliente na oficina, com o serviço concluído"
            loading="lazy"
          />
        ) : (
          <div className="scene-stage">
            <Icon />
            <div className="scene-screen">
              <i />
              <i />
              <i />
              <strong>
                {item.scene === "search"
                  ? "BUSCAR PEÇA"
                  : item.scene === "sale"
                    ? "PEDIDO CONFIRMADO"
                    : item.scene === "request"
                      ? "NOVA SOLICITAÇÃO"
                      : "CLICK PARTS"}
              </strong>
              <span />
            </div>
          </div>
        )}
        <div className="scene-status">
          <i />
          <span>{index < 9 ? "ETAPA CONECTADA" : "JORNADA CONCLUÍDA"}</span>
        </div>
      </div>
      <p>{item.text}</p>
    </article>
  );
}

function DataIntelligence() {
  return (
    <section className="about-section data-section">
      <div className="shell">
        <header className="about-heading">
          <Kicker>Inteligência de dados</Kicker>
          <h2>
            A OPERAÇÃO GERA DADOS.
            <br />
            <span>OS DADOS GERAM INTELIGÊNCIA.</span>
          </h2>
        </header>
        <div className="data-hub">
          <div className="signal-cloud">
            {signals.map((signal, index) => (
              <span key={signal} style={{ "--signal-index": index } as CSSProperties}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {signal}
              </span>
            ))}
          </div>
          <div className="hub-core">
            <Database />
            <small>CLICK PARTS</small>
            <b>DATA HUB</b>
            <i />
          </div>
        </div>
        <div className="data-output">
          {["INTELIGÊNCIA", "DEMANDA", "COMPORTAMENTO", "OPORTUNIDADE", "DECISÃO"].map(
            (item, index, list) => (
              <span key={item}>
                <b>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  {item}
                </b>
                {index < list.length - 1 && <ArrowDown />}
              </span>
            ),
          )}
        </div>
        <div className="data-copy">
          <p>A cada interação, o ecossistema aprende mais sobre o comportamento do mercado.</p>
          <p>
            Transformamos sinais operacionais em inteligência capaz de ajudar empresas a entender
            demanda, disponibilidade, comportamento e oportunidades.
          </p>
          <h3>
            A CLICK NÃO CONECTA APENAS TRANSAÇÕES.
            <br />
            <span>CONECTA INFORMAÇÃO.</span>
          </h3>
        </div>
      </div>
    </section>
  );
}

function WholeEcosystem() {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) =>
    rail.current?.scrollBy({ left: direction * 384, behavior: "smooth" });
  return (
    <section className="about-section whole-section">
      <div className="shell">
        <header className="about-heading centered">
          <Kicker>Todo o ecossistema</Kicker>
          <h2>
            UM ECOSSISTEMA.
            <br />
            MÚLTIPLOS NEGÓCIOS.
            <br />
            <span>TODOS CONECTADOS.</span>
          </h2>
        </header>
        <div className="ecosystem-solutions">
          <div className="ecosystem-core">
            <Network aria-hidden="true" />
            <small>ECOSSISTEMA</small>
            <b>CLICK PARTS BRASIL</b>
            <span>TECNOLOGIA CONECTADA</span>
          </div>
          <div className="ecosystem-carousel">
            <div
              ref={rail}
              className="ecosystem-rail"
              aria-label="Soluções conectadas do ecossistema Click Parts"
              tabIndex={0}
            >
              {ecosystemSolutions.map((solution, index) => (
                <article className="ecosystem-solution" key={solution.title}>
                  <div className="ecosystem-solution-media">
                    <img src={assetUrl(solution.image)} alt={solution.alt} loading="lazy" />
                  </div>
                  <div className="ecosystem-solution-copy">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{solution.title}</h3>
                      <p>{solution.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="ecosystem-controls">
              <Button
                variant="outline"
                size="icon"
                aria-label="Ver solução anterior"
                onClick={() => scroll(-1)}
              >
                <ArrowLeft />
              </Button>
              <span aria-hidden="true">01 — 08</span>
              <Button
                variant="outline"
                size="icon"
                aria-label="Ver próxima solução"
                onClick={() => scroll(1)}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Purpose() {
  return (
    <section className="about-section purpose-section">
      <div className="shell purpose-grid">
        <article>
          <Kicker>Nossa missão</Kicker>
          <p className="purpose-mission">
            Digitalizar e conectar o aftermarket automotivo, criando uma infraestrutura tecnológica
            capaz de integrar empresas, profissionais, consumidores, operações e dados em uma
            jornada <em>mais eficiente, inteligente e acessível</em>.
          </p>
          <h2>
            CONECTAR PARA SIMPLIFICAR.
            <br />
            <span>SIMPLIFICAR PARA TRANSFORMAR.</span>
          </h2>
        </article>
        <article>
          <Kicker>Nossa visão</Kicker>
          <p className="purpose-vision">
            Construir um ecossistema de referência para o aftermarket automotivo, começando pelo
            Brasil e expandindo nossa tecnologia para conectar mercados, empresas e profissionais em{" "}
            <em>escala global</em>.
          </p>
          <strong className="purpose-vision-strong">
            Um setor em que tecnologia, comércio, gestão, logística e inteligência de dados
            funcionem <em>de maneira integrada</em>.
          </strong>
        </article>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="about-section values-section">
      <div className="shell">
        <header className="about-heading">
          <Kicker>Nossos valores</Kicker>
          <h2>
            PRINCÍPIOS QUE ORIENTAM
            <br />
            <span>CADA CONEXÃO.</span>
          </h2>
        </header>
        <div className="values-list">
          {values.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutClosing() {
  return (
    <section className="about-closing shell">
      <Kicker>Click Parts Brasil</Kicker>
      <h2>
        O AFTERMARKET SEMPRE FOI UMA REDE.
        <br />
        AGORA ESSA REDE
        <br />
        <span>PODE ESTAR CONECTADA.</span>
      </h2>
      <p>
        Indústria. Distribuição. Autopeças. Oficinas. Profissionais. Consumidores. Logística. Dados.
      </p>
      <strong>ISSO É CLICK PARTS.</strong>
      <div>
        <a className="primary-cta" href="#ecossistema">
          Conheça o ecossistema <ArrowDown />
        </a>
        <Link className="text-cta" to="/">
          Anuncie no Click Mídia <ArrowRight />
        </Link>
      </div>
    </section>
  );
}

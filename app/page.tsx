import PhotoGallery from "./PhotoGallery";
import SiteHeader from "./SiteHeader";

const links = {
  games: "https://drive.google.com/drive/folders/1Cvg1NNVR3bfiNxdwrF-RNsE-0HSqx63b",
  memory: "https://drive.google.com/file/d/12IEgq3P39kD8bCiHG6NLk1ysKCSnQneA/view?usp=drivesdk",
  drought: "https://cepas.ufc.br/pt_br/seca-em-jogo/",
  waterPlay: "https://drive.google.com/drive/folders/1gX5cEdUL_fYmfWsq5XHJCjp__UDPiP8h",
  droughtPlans: "https://drive.google.com/file/d/1KZDfAKpzrYioL70lbukTJ4yYHNzlXyCO/view?usp=drivesdk",
  publications: "https://drive.google.com/drive/folders/1mMGfetosWNtvXwF30AYu-BC5UTfPl-VF",
  article: "https://drive.google.com/file/d/1pdGfjojOshc_Lnu6iDDoC7P9cE7AhIn4/view?usp=drivesdk",
  thesis: "https://drive.google.com/file/d/1j3m6cP40XEb0z_4RW2rCgcpRvw0Ufjl2/view?usp=drivesdk",
  sbrh: "https://drive.google.com/file/d/1mLD39lhTnXQ5wOmQB9g7csn0Z-B6ijsV/view?usp=drivesdk",
  funceme: "https://www.funceme.br/",
  cepas: "https://cepas.ufc.br/pt_br/",
  contact: "mailto:fungamesfunceme@gmail.com",
};

const fronts = [
  {
    number: "01",
    title: "Jogos e experiências",
    text: "Desenvolvimento, adaptação e aplicação de experiências lúdicas baseadas em conhecimento científico.",
    className: "front-games",
  },
  {
    number: "02",
    title: "Pesquisa e publicações",
    text: "Métodos, dados, avaliações e estudos sobre aprendizagem, participação e apoio à decisão.",
    className: "front-research",
  },
  {
    number: "03",
    title: "Capacitações e oficinas",
    text: "Formação de facilitadores, professores, equipes técnicas, estudantes e atores territoriais.",
    className: "front-training",
  },
  {
    number: "04",
    title: "Aplicações",
    text: "Uso em educação, planejamento, governança, participação social e tomada de decisão pública.",
    className: "front-application",
  },
  {
    number: "05",
    title: "Parcerias",
    text: "Projetos com universidades, escolas, comunidades, comitês de bacia e órgãos públicos.",
    className: "front-partners",
  },
];

const games = [
  {
    number: "01",
    focus: "Alfabetização científica",
    title: "Jogo da Memória Hídrico",
    text: "Conhecer conceitos e ampliar o repertório sobre recursos hídricos por meio de associações visuais.",
    link: links.memory,
    action: "Acessar o jogo",
    className: "game-memory",
    image: "/images/jogo-memoria-hidrica.png",
    imageAlt: "Identidade visual do Jogo da Memória Hídrico",
  },
  {
    number: "02",
    focus: "Educação e planejamento",
    title: "Seca em Jogo",
    text: "Experimentar sistemas, escolhas e consequências ligadas à gestão proativa de secas.",
    link: links.drought,
    action: "Conhecer o projeto",
    className: "game-drought",
    image: "/images/seca-em-jogo.png",
    imageAlt: "Identidade visual do Seca em Jogo",
  },
  {
    number: "03",
    focus: "Governança territorial",
    title: "Jogada d’Água",
    text: "Negociar interesses, administrar recursos e construir decisões coletivas em um território compartilhado.",
    link: links.waterPlay,
    action: "Conhecer o pacote",
    className: "game-water",
    image: "/images/jogada-dagua.png",
    imageAlt: "Tabuleiro do Jogada d’Água",
  },
];

const publications = [
  {
    type: "Artigo internacional",
    year: "2024",
    title: "Drought in play: A grounded socio-hydrological tool to increase social participation in drought plans",
    source: "Journal of Hydrology",
    link: links.article,
  },
  {
    type: "Tese de doutorado",
    year: "2023",
    title: "Modelagem colaborativa e jogo sério para a tomada de decisão de alocação de águas em reservatórios durante secas",
    source: "Universidade Federal do Ceará",
    link: links.thesis,
  },
  {
    type: "Trabalho científico",
    year: "2023",
    title: "Seca em Jogo: um instrumento sócio-hidrológico para construção participativa de planos proativos de secas",
    source: "XXV Simpósio Brasileiro de Recursos Hídricos",
    link: links.sbrh,
  },
];

function ExternalMark() {
  return <span className="external-mark" aria-hidden="true">↗</span>;
}

function BrandLogo({ negative = false }: { negative?: boolean }) {
  return (
    <img
      className="brand-logo"
      src={negative ? "/brand/fungames-negative.png" : "/brand/fungames-logo.png"}
      alt="FUNGames FUNCEME"
      width={negative ? 549 : 1129}
      height={negative ? 187 : 376}
    />
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>

      <SiteHeader />

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-stage shell">
            <div className="hero-decoration hero-decoration-one" aria-hidden="true" />
            <div className="hero-decoration hero-decoration-two" aria-hidden="true" />

            <div className="hero-copy">
              <div className="hero-brandmark" role="img" aria-label="FUNGames FUNCEME">
                <img className="hero-brand-symbol" src="/brand/fungames-symbol.png" alt="" width={329} height={329} aria-hidden="true" />
                <span className="hero-wordmark" aria-hidden="true">
                  <span className="hero-wordmark-name"><strong>FUN</strong><span>Games</span></span>
                  <span className="hero-wordmark-origin">FUNCEME</span>
                </span>
              </div>
              <h1>Ciência em jogo.<br /><strong>Decisões em ação.</strong></h1>
              <p className="hero-lead">
                Pesquisa, jogos sérios e capacitações transformam conhecimento científico em experiências que mobilizam pessoas e apoiam decisões públicas.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#iniciativa">Conheça a iniciativa <span aria-hidden="true">↓</span></a>
                <a className="button button-outline" href="#portfolio">Explore o portfólio</a>
              </div>
              <div className="hero-pillars" aria-label="Pilares da FUNGames">
                <span>Pesquisa</span><i /><span>Formação</span><i /><span>Aplicação</span>
              </div>
            </div>

            <a className="hero-scroll" href="#iniciativa" aria-label="Ir para a seção Conheça a iniciativa">
              <span>Explore</span><i aria-hidden="true">↓</i>
            </a>
          </div>
          <div className="domain-band">
            <div className="shell domain-list" aria-label="Campos de atuação">
              {['Clima', 'Recursos hídricos', 'Secas', 'Meio ambiente', 'Educação científica', 'Gestão de riscos', 'Políticas públicas'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="section initiative" id="iniciativa">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p className="eyebrow eyebrow-green">Conheça a iniciativa</p><h2>Muito além dos jogos</h2></div>
              <p>Uma identidade comum para diferentes formas de transformar ciência em ação - da produção de conhecimento à tomada de decisão.</p>
            </div>
            <div className="fronts-grid">
              {fronts.map((front) => (
                <article className={`front-card ${front.className}`} key={front.title}>
                  <p className="front-index">{front.number}</p>
                  <div><h3>{front.title}</h3><p>{front.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bridge-section" aria-labelledby="ponte-titulo">
          <div className="shell bridge-grid">
            <div className="bridge-copy">
              <p className="eyebrow eyebrow-cyan">Uma ponte entre ciência e sociedade</p>
              <h2 id="ponte-titulo">O conhecimento deixa de ser apenas transmitido e passa a ser experimentado.</h2>
              <p>A FUNGames cria condições para que conceitos, modelos e informações científicas sejam discutidos e utilizados em situações reais de aprendizagem, planejamento e decisão.</p>
            </div>
            <ol className="experience-flow">
              <li><span>01</span><div><h3>Conhecer</h3><p>Aproximar conceitos e evidências.</p></div></li>
              <li><span>02</span><div><h3>Experimentar</h3><p>Compreender relações, escolhas e sistemas.</p></div></li>
              <li><span>03</span><div><h3>Decidir</h3><p>Dialogar, negociar e escolher caminhos.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section portfolio" id="portfolio">
          <div className="shell">
            <div className="section-heading split-heading light-heading">
              <div><p className="eyebrow eyebrow-cyan">Portfólio integrado</p><h2>Experiências que conectam ciência e ação</h2></div>
              <p>Três jogos, três formas complementares de conhecer conceitos, experimentar sistemas e construir decisões coletivas.</p>
            </div>
            <div className="game-grid">
              {games.map((game) => (
                <article className={`game-card ${game.className}`} key={game.title}>
                  <div className="game-visual">
                    <span className="game-number">{game.number}</span>
                    <img className="game-image" src={game.image} alt={game.imageAlt} loading="lazy" />
                  </div>
                  <div className="game-body">
                    <p className="game-focus">{game.focus}</p>
                    <h3>{game.title}</h3><p>{game.text}</p>
                    <a href={game.link} target="_blank" rel="noreferrer">{game.action} <ExternalMark /></a>
                  </div>
                </article>
              ))}
            </div>
            <div className="portfolio-footer">
              <p>Manuais, tabuleiros, cartas e materiais para aplicação.</p>
              <a href={links.games} target="_blank" rel="noreferrer">Ver acervo completo <ExternalMark /></a>
            </div>
          </div>
        </section>

        <section className="section training" id="capacitacoes">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p className="eyebrow eyebrow-green">Capacitações e oficinas</p><h2>Formar pessoas também é produzir capacidade pública</h2></div>
              <p>A capacitação não é acessória ao jogo: ela distribui competências entre professores, pesquisadores, equipes técnicas e atores territoriais.</p>
            </div>
            <div className="training-programs">
              <article className="program-card">
                <div className="program-meta"><p>Seca em Jogo nas Escolas</p><span>Sobral · 6 e 7 ago. 2025</span></div>
                <h3>Professores e agentes multiplicadores preparados para agir</h3>
                <p>Formação em gestão proativa de secas, participação social, jogos sérios, facilitação e reflexão didática.</p>
                <dl className="program-stats">
                  <div><dt>33</dt><dd>participantes</dd></div>
                  <div><dt>4</dt><dd>escolas</dd></div>
                  <div><dt>20</dt><dd>kits entregues</dd></div>
                </dl>
              </article>
              <article className="program-card program-plans">
                <div className="program-meta"><p>Planos de Gestão Proativa de Seca</p><span>Fortaleza e remoto · 2024-2025</span></div>
                <h3>Formação interdisciplinar para planejar antes da crise</h3>
                <p>Gestão de risco, grupos focais, modelagem hidrológica, estados de seca, níveis-meta e planos de ação conectados ao acompanhamento mensal das equipes.</p>
                <div className="institution-list" aria-label="Instituições participantes">
                  {['UVA', 'IFCE', 'UFC', 'UFCA', 'UNILAB'].map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="program-links"><a href={links.droughtPlans} target="_blank" rel="noreferrer">Conhecer a capacitação <ExternalMark /></a></div>
              </article>
            </div>

            <div className="gallery-heading">
              <div><p className="eyebrow eyebrow-green">Capacitações em imagens</p><h3>Ciência vivenciada coletivamente</h3></div>
              <p>Experimentação, facilitação e construção colaborativa.</p>
            </div>
            <PhotoGallery />
          </div>
        </section>

        <section className="section research" id="pesquisa">
          <div className="shell research-layout">
            <div className="research-intro">
              <p className="eyebrow eyebrow-navy">Pesquisa e publicações</p>
              <h2>Conhecimento que fundamenta a prática</h2>
              <p>A produção científica sistematiza aprendizados sobre participação, modelagem colaborativa, jogos sérios e gestão de secas - e devolve os resultados aos territórios.</p>
              <a className="button button-navy" href={links.publications} target="_blank" rel="noreferrer">Acessar publicações <ExternalMark /></a>
            </div>
            <div className="publication-list">
              {publications.map((publication) => (
                <article key={publication.title}>
                  <div className="publication-meta"><span>{publication.type}</span><time>{publication.year}</time></div>
                  <h3>{publication.title}</h3><p>{publication.source}</p>
                  <a href={publication.link} target="_blank" rel="noreferrer">Ler publicação <ExternalMark /></a>
                </article>
              ))}
            </div>
          </div>
          <div className="research-cycle shell">
            <span>Pesquisa</span><i>→</i><span>Experiência</span><i>→</i><span>Formação</span><i>→</i><span>Aplicação pública</span>
          </div>
        </section>

        <section className="section method" id="metodo">
          <div className="shell">
            <div className="method-header">
              <div><p className="eyebrow eyebrow-cyan">Método FUN</p><h2>Três perguntas para orientar cada projeto</h2></div>
              <p>Antes de criar uma experiência, respondemos a três perguntas simples.</p>
            </div>
            <div className="fun-grid" aria-label="Método FUN">
              <article><span>F</span><p>01 · Finalidade</p><h3>O que queremos alcançar?</h3><p className="method-description">Definimos o que a experiência deve ajudar a aprender, discutir, planejar ou transformar.</p></article>
              <article><span>U</span><p>02 · Usuários</p><h3>Quem vai participar?</h3><p className="method-description">Consideramos as pessoas, seus conhecimentos, suas necessidades e o contexto em que vivem.</p></article>
              <article><span>N</span><p>03 · Nexo lúdico-científico</p><h3>Como a ciência ganha vida?</h3><p className="method-description">Transformamos o conhecimento científico em desafios, escolhas e interações que ajudam a compreender e agir.</p></article>
            </div>
            <div className="applications-block">
              <div className="applications-title"><div><p className="eyebrow eyebrow-green">Aplicações e parcerias</p><h3>Capacidade institucional em rede</h3></div></div>
              <div className="application-grid">
                <article><span>Educação e formação</span><p>Escolas, universidades, oficinas e formação de multiplicadores.</p></article>
                <article><span>Planejamento e governança</span><p>Planos de seca, recursos hídricos, participação social e decisões coletivas.</p></article>
                <article><span>Redes de colaboração</span><p>Universidades, comunidades, comitês de bacia, órgãos públicos e parceiros privados.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="collaborate" id="colabore">
          <div className="shell collaborate-grid">
            <div className="collaborate-copy">
              <p className="eyebrow eyebrow-white">Vamos colaborar?</p>
              <h2>Novas perguntas podem gerar novas experiências.</h2>
              <p>A FUNGames está aberta à construção de pesquisas, capacitações, aplicações e projetos com universidades, escolas, comunidades e instituições públicas.</p>
              <div className="collaborate-actions">
                <a className="button button-white" href={links.contact}>Fale conosco <span aria-hidden="true">→</span></a>
                <a className="button button-ghost-white" href={links.funceme} target="_blank" rel="noreferrer">Conheça a FUNCEME <ExternalMark /></a>
              </div>
            </div>
            <div className="collaborate-brand"><BrandLogo negative /><p>Conheça. Participe. Colabore.</p></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand"><BrandLogo /><p>Ciência em jogo. Decisões em ação.</p></div>
          <nav aria-label="Documentos e links institucionais">
            <a href={links.contact}>Fale conosco</a>
            <a href="/docs/FUNGames_Guia_da_Marca.pdf" target="_blank">Guia da marca</a>
            <a href={links.games} target="_blank" rel="noreferrer">Acervo de jogos</a>
            <a href={links.publications} target="_blank" rel="noreferrer">Publicações</a>
          </nav>
          <div className="institutional-support">
            <p>Apoio institucional</p>
            <a href={links.cepas} target="_blank" rel="noreferrer">
              <strong>CEPAS</strong>
              <span>Universidade Federal do Ceará</span>
              <ExternalMark />
            </a>
          </div>
        </div>
        <div className="shell footer-bottom"><p>FUNGames · Fundação Cearense de Meteorologia e Recursos Hídricos</p><a href="#inicio">Voltar ao início ↑</a></div>
      </footer>
    </>
  );
}

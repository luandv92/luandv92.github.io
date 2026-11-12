(() => {
  'use strict';
  const english = {
    skip: 'Skip to content', navProjects: 'Projects', navApproach: 'Approach', navAbout: 'About',
    heroLabel: 'AI ENGINEERING PORTFOLIO', heroLead: 'I build with AI. I verify the outcome.',
    heroDescription: 'Independent software projects, model integration and automation. Computer Engineering student with previous experience in business data and scientific research.',
    seeProjects: 'Explore projects <span aria-hidden="true">↘</span>', allRepos: 'All repositories ↗',
    availability: 'Interested in internships and entry-level AI Engineering opportunities',
    heroNote: 'Defined roles. Structured outputs. Evidence before calling a task complete.',
    exploreContract: 'Explore the demo contract ↗', proofCode: 'Public code', proofCodeSub: 'Inspectable repositories and examples',
    proofDemo: 'Offline demos', proofDemoSub: 'Testable contracts without credentials', proofLimits: 'Explicit maturity', proofLimitsSub: 'Published, prototype or planned',
    selectedLabel: 'SELECTED PROJECTS', selectedTitle: 'Three starting points<br>for my work.',
    selectedDescription: 'From model to outcome: routing, result verification and connected safeguards.',
    published: 'Published', llmOne: 'A layer between the application and AI providers.',
    llmDescription: 'Task routing, fallback and model/cost records. The agent example defines planner, worker and reviewer roles with JSON contracts and at most three router calls.',
    problem: 'Problem', evidence: 'Evidence', llmProblem: 'Provider dependence and failures that are difficult to observe.',
    llmEvidence: 'Deterministic demo, rejection and invalid-output tests; CI on Python 3.10–3.12.',
    source: 'Repository ↗', example: 'Runnable example ↗', ci: 'Tests on GitHub ↗',
    demoLimit: 'Offline fixtures. This does not measure real model quality.', viewFlow: 'Explore the flow ↓',
    outcomeOne: 'The process finished. Was anything delivered?',
    outcomeDescription: 'Checks files, ledgers and commands to distinguish fresh results, missing change and an inability to verify. Includes an example monitoring accepted agent results.',
    outcomeProblem: 'Jobs that return success without producing an outcome.',
    outcomeEvidence: 'Three-scenario example; CI on Linux, macOS and Windows.',
    freshResult: 'fresh outcome', noResult: 'no new outcome', unknownResult: 'could not verify',
    wiringOne: 'A safeguard must stay connected to the actual flow.',
    wiringDescription: 'Static rules check required calls and permitted locations for important operations. Detects when a function name remains in a file but the call has been removed.',
    wiringProblem: 'Refactors that disconnect validation while retaining imports.', limit: 'Limit',
    wiringLimit: 'Static call analysis; it does not prove runtime execution.', rules: 'Explore the rules ↗',
    wiringNote: 'A mention in a comment is not a function call.',
    approachLabel: 'INSIDE THE DEMO', approachTitle: 'A contract at every handoff.',
    approachDescription: 'Explore the fixed outputs from the public example. This visualization does not run models or tools.',
    stepPlan: '01 Plan', stepWork: '02 Build', stepReview: '03 Review', contractTests: 'Inspect the contract tests ↗',
    approachLimit: 'Approval by another LLM is not independent proof of correctness. Application validation and an acceptance policy are still necessary.',
    educationLabel: 'CASE STUDY · LEARNING PRODUCT', educationTitle: 'Technology in service<br>of learning.',
    educationLead: 'Feira das Escolhas', prototype: 'Public pilot',
    educationDescription: 'A learning experience for families, with interactive missions, feedback and separate journeys for children and caregivers.',
    builtLabel: 'WHAT HAS BEEN BUILT', educationBuilt: 'Web pilot with six missions, local progress and an interface in Portuguese, English, Spanish, Hindi and Simplified Chinese.',
    decisionsLabel: 'ENGINEERING DECISIONS', educationDecisions: 'AI-assisted development, browser checks, localization and separation between the child experience and adult content.',
    nextLabel: 'NEXT EVIDENCE', educationNext: 'Extract a public lab without personal data and validate the experience in a supervised study with families. Educational outcomes have not been established.',
    educationRoadmap: 'See the planned open-source extraction ↓',
    catalogLabel: 'OPEN-SOURCE ECOSYSTEM', catalogTitle: 'A tool for<br>each concrete problem.',
    filterAll: 'All', filterAI: 'AI and agents', filterReliability: 'Reliability', filterOps: 'Operations and product',
    roadmapLabel: 'UPCOMING EXTRACTIONS', roadmapTitle: 'What comes next.',
    roadmapDescription: 'Proposed names and planned scope. These repositories have not been published; each deliverable needs code, a reproducible example and documented limits.',
    aboutLabel: 'ABOUT ME', aboutTitle: 'Research, data<br>and practical building.',
    aboutDescription: 'My background connects scientific research, business data analysis and technology. Today I develop independent projects with AI assistance while studying Computer Engineering.',
    aboutNote: 'I am looking for opportunities to grow in building and integrating software for AI products.',
    ongoing: 'IN PROGRESS', degree: 'Computer Engineering', degreeDetail: 'Universidade Cruzeiro do Sul · expected graduation January 2029',
    bat: 'Business data · BAT Brasil', batDetail: 'Trade Marketing and Key Account: market share, sell-in and sell-out analysis; insights and B2B operations.',
    ufrj: 'Research and training · UFRJ / FAPERJ', ufrjDetail: 'Support for projects, experiments and papers; training undergraduate, master’s and doctoral students.',
    background: 'PREVIOUS EDUCATION', masters: 'MSc in Science · UFRJ',
    mastersDetail: '2018 · Marketing Technology degree, UNIGRANRIO, 2023 · Bachelor’s in Nutrition, IBMR, 2015.',
    contactLabel: 'LET’S TALK', contactTitle: 'Open code.<br>Ready for the next challenge.',
    contactDescription: 'Interested in my work or an AI Engineering opportunity?',
    footer: 'Open-source portfolio · no trackers', siteSource: 'Source of this site ↗',
    visitPilot: 'Explore the public pilot ↗', educationPilot: 'Explore the public pilot ↗',
    pilotLink: 'Explore the public pilot ↗', educationLive: 'Explore the public pilot ↗', pilot: 'Public pilot', publicPilot: 'Public pilot',
  };

  const repos = [
    ['llm-cascade','ai','Roteamento de LLMs com fallback e registro de custo; reduz dependência de um provedor.','LLM routing with fallback and cost records; reduces dependence on a single provider.','APIs com IA e papéis especializados.','AI APIs and specialized roles.'],
    ['outcome-watchdog','reliability','Verifica resultados de rotinas para detectar sucesso sem entrega.','Checks job outcomes to detect success without delivery.','Agendadores, pipelines de dados e agentes.','Scheduled jobs, data pipelines and agents.'],
    ['wiringguard','reliability','Analisa chamadas Python para detectar proteções desconectadas.','Analyzes Python calls to detect disconnected safeguards.','Regras de arquitetura e verificações em CI.','Architecture rules and CI checks.'],
    ['silentbugs','reliability','Busca erros silenciosos de subprocessos, encoding e esperas sem limite.','Finds silent subprocess, encoding and unbounded-wait bugs.','Revisão de automações e integrações Python.','Reviewing Python automations and integrations.'],
    ['pytest-sideeffects','reliability','Audita arquivos alterados por testes, incluindo efeitos de subprocessos.','Audits files changed by tests, including subprocess effects.','Isolamento de filas, logs e estado operacional.','Isolating queues, logs and operational state.'],
    ['media-gate','reliability','Verifica vídeo preto, áudio silencioso e imagens repetidas antes da publicação.','Checks black video, silent audio and repeated images before publication.','Pipelines de vídeo, TTS e conteúdo com IA.','Video, TTS and AI content pipelines.'],
    ['cc-worktree-ops','ai','Automatiza continuidade de sessões e integração de worktrees, interrompendo conflitos.','Automates session continuity and worktree integration, stopping on conflicts.','Desenvolvimento paralelo com agentes de código.','Parallel development with coding agents.'],
    ['cc-cost-kit','ai','Configurações e política de modelos para dar visibilidade ao consumo de tokens.','Configuration and model policy for visibility into token usage.','Operação de equipes de agentes de código.','Operating teams of coding agents.'],
    ['tiktok-direct-post','ops','Cliente da API oficial com upload, retry limitado e rotação de tokens.','Official API client with uploads, bounded retries and token rotation.','Distribuição autorizada de vídeos.','Authorized video distribution.'],
    ['content-ops-automation-templates','ops','Templates de captura de leads, sequência de e-mails e atribuição UTM.','Templates for lead capture, email sequences and UTM attribution.','Integrações de aquisição e campanhas.','Acquisition and campaign integrations.'],
    ['stripe-hardening-kit','ops','Scanner antes do deploy e referência de webhook com verificação de assinatura.','Pre-deploy scanner and webhook reference with signature verification.','Integrações de pagamento e comércio digital.','Payment and commerce integrations.'],
    ['honest-timer','ops','Persiste um prazo no navegador sem reiniciá-lo automaticamente.','Persists a deadline in the browser without automatically resetting it.','Interfaces de ofertas e demonstrações com prazo.','Deadline-based offer and demo interfaces.'],
    ['video-prompt-formulas','ai','Fórmulas e exemplos para estrutura e continuidade de prompts de vídeo.','Patterns and examples for video prompt structure and continuity.','Especificações criativas produzidas por agentes.','Creative specifications produced by agents.'],
    ['awesome-ai-content-ops','ai','Mapa de ferramentas e padrões para geração, qualidade e monitoramento.','A map of tools and patterns for generation, quality and monitoring.','Referência de arquitetura do ecossistema.','Architecture reference for the ecosystem.'],
  ];
  const roadmap = [
    {name:'agent-workflow-lab', pt:'Integrar planejador, executor e revisor com estado persistente e registro de entregas.', en:'Integrate planner, worker and reviewer with persistent state and outcome records.', ptGate:'Critério: demo offline, limite de custo, testes de retomada e repetição sem duplicar entregas.', enGate:'Acceptance: offline demo, cost limit, restart tests and replay without duplicate outcomes.'},
    {name:'agent-evaluation-kit', pt:'Avaliar fluxos com tarefas versionadas e verificações independentes da opinião do modelo.', en:'Evaluate workflows with versioned tasks and checks independent of model opinion.', ptGate:'Critério: casos de acerto e falha, dados versionados e relatório reproduzível de qualidade e custo.', enGate:'Acceptance: success and failure cases, versioned data and a reproducible quality/cost report.'},
    {name:'family-learning-lab', pt:'Extrair componentes reutilizáveis da Feira das Escolhas / Ludimapa, sem dados pessoais.', en:'Extract reusable components from Feira das Escolhas / Ludimapa, without personal data.', ptGate:'Critério: missão executável, origem dos ativos verificada e testes de idioma, acessibilidade e progresso local.', enGate:'Acceptance: runnable mission, verified asset provenance and tests for language, accessibility and local progress.'},
  ];
  const fixtures = [
    {role:'PLANNER → WORKER', ptTitle:'Definir a tarefa e o critério de aceite.', enTitle:'Define the task and acceptance criteria.', ptDescription:'O plano precisa conter etapas e critérios verificáveis. Um JSON inválido interrompe o exemplo antes do executor.', enDescription:'The plan must contain steps and checkable criteria. Invalid JSON stops the example before the worker.', value:{steps:['Design a health-check endpoint'],acceptance:['Return a structured status and use a bounded timeout']}},
    {role:'WORKER → REVIEWER', ptTitle:'Produzir uma resposta dentro do contrato.', enTitle:'Produce an answer within the contract.', ptDescription:'O executor recebe o objetivo e o plano. Uma resposta vazia é recusada antes da revisão.', enDescription:'The worker receives the goal and plan. A blank answer is rejected before review.', value:{answer:'Expose GET /health returning a JSON status; check each dependency with a one-second timeout and return 503 when a required dependency fails.'}},
    {role:'REVIEWER → APPLICATION', ptTitle:'Uma revisão tem decisão e justificativa.', enTitle:'A review includes a decision and reason.', ptDescription:'A aprovação precisa ser um booleano JSON. Uma revisão negativa encerra o fluxo, sem tentar novamente para obter aprovação.', enDescription:'Approval must be a JSON boolean. A rejected review stops the workflow without retrying to obtain approval.', value:{approved:true,reason:'Fixture covers status and a bounded timeout.'}},
  ];

  const translated = Array.from(document.querySelectorAll('[data-i18n]')).map(element => ({element,key:element.dataset.i18n,pt:element.innerHTML}));
  let language = 'pt';
  let activeFilter = 'all';
  let activeStep = 0;
  const languageButton = document.getElementById('language');
  const tabs = Array.from(document.querySelectorAll('[role="tab"][data-step]'));
  function el(tag, className, text) { const result=document.createElement(tag); if(className) result.className=className; if(text!==undefined) result.textContent=text; return result; }
  function categoryLabel(key) { return language==='en' ? {ai:'AI AND AGENTS',reliability:'RELIABILITY',ops:'OPERATIONS AND PRODUCT'}[key] : {ai:'IA E AGENTES',reliability:'CONFIABILIDADE',ops:'OPERAÇÃO E PRODUTO'}[key]; }
  function renderRepos() {
    const grid=document.getElementById('repo-grid');
    const visible=repos.filter(repo=>activeFilter==='all'||repo[1]===activeFilter);
    grid.replaceChildren(...visible.map(repo=>{
      const article=el('article','repo-item');
      const heading=el('h3'); const anchor=el('a','',repo[0]+' ↗'); anchor.href='https://github.com/luandv92/'+repo[0]; heading.append(anchor);
      article.append(el('span','repo-type',categoryLabel(repo[1])),heading,el('p','',repo[language==='en'?3:2]),el('p','repo-use',(language==='en'?'Use case: ':'Aplicação: ')+repo[language==='en'?5:4]));
      return article;
    }));
    document.getElementById('catalog-count').textContent=language==='en' ? `${visible.length} of ${repos.length} projects` : `${visible.length} de ${repos.length} projetos`;
  }
  function renderRoadmap() {
    document.getElementById('roadmap-list').replaceChildren(...roadmap.map((item,index)=>{
      const row=el('article','roadmap-item'); const body=el('div');
      body.append(el('h3','',item.name),el('p','',item[language]),el('p','acceptance',item[language==='en'?'enGate':'ptGate']));
      row.append(el('span','roadmap-index',String(index+1).padStart(2,'0')),body,el('span','badge',language==='en'?'Planned':'Planejado'));
      return row;
    }));
  }
  function renderContract() {
    const fixture=fixtures[activeStep];
    tabs.forEach((tab,index)=>{tab.setAttribute('aria-selected',String(index===activeStep));tab.tabIndex=index===activeStep?0:-1;});
    document.getElementById('contract-panel').setAttribute('aria-labelledby',tabs[activeStep].id);
    document.getElementById('contract-role').textContent=fixture.role;
    document.getElementById('contract-title').textContent=fixture[language==='en'?'enTitle':'ptTitle'];
    document.getElementById('contract-description').textContent=fixture[language==='en'?'enDescription':'ptDescription'];
    document.getElementById('contract-code').textContent=JSON.stringify(fixture.value,null,2);
  }
  function setLanguage(next, save=false) {
    language=next==='en'?'en':'pt';
    document.documentElement.lang=language==='en'?'en':'pt-BR';
    document.documentElement.dataset.locale=language;
    document.title=language==='en'?'Luan Ribeiro de Brito | Applied AI and automation':'Luan Ribeiro de Brito | IA aplicada e automações';
    translated.forEach(({element,key,pt})=>{element.innerHTML=language==='en'?(english[key]||pt):pt;});
    languageButton.innerHTML=language==='en'?'PT <span aria-hidden="true">↗</span>':'EN <span aria-hidden="true">↗</span>';
    languageButton.setAttribute('aria-label',language==='en'?'Ler portfólio em português':'Read portfolio in English');
    document.querySelector('header nav').setAttribute('aria-label',language==='en'?'Main navigation':'Navegação principal');
    document.querySelector('.hero-note').setAttribute('aria-label',language==='en'?'Engineering focus':'Foco de engenharia');
    document.querySelector('.contract-tabs').setAttribute('aria-label',language==='en'?'Example stages':'Etapas do exemplo');
    document.querySelector('.filters').setAttribute('aria-label',language==='en'?'Filter projects':'Filtrar projetos');
    document.getElementById('contract-code').setAttribute('aria-label',language==='en'?'Example JSON':'JSON de exemplo');
    document.getElementById('contract-code').lang='en';
    const verdicts=document.querySelector('.verdicts');if(verdicts) verdicts.setAttribute('aria-label',language==='en'?'Verdicts':'Vereditos');
    const localLabel=document.querySelector('.project-aside .mono');if(localLabel) localLabel.textContent=language==='en'?'RUN LOCALLY':'EXECUTAR LOCALMENTE';
    const invariantLabel=document.querySelector('.code-note .mono');if(invariantLabel) invariantLabel.textContent=language==='en'?'CALL-SITE INVARIANT':'INVARIANTE DE CHAMADA';
    const description=document.querySelector('meta[name="description"]');if(description) description.content=language==='en'?'Luan Ribeiro de Brito’s portfolio: AI software, LLM routing, verifiable automation and open-source projects. Computer Engineering student.':'Portfólio de Luan Ribeiro de Brito: software com IA, roteamento de LLMs, automações verificáveis e projetos open source. Engenharia da Computação em andamento.';
    const subtitle=document.querySelector('.brand-sub');if(subtitle) subtitle.textContent=language==='en'?'SOFTWARE · AI · AUTOMATION':'SOFTWARE · IA · AUTOMAÇÃO';
    if(save) {
      try { localStorage.setItem('portfolio-language',language); } catch { /* Browser storage may be disabled. */ }
      const url=new URL(location.href);url.searchParams.set('lang',language);history.replaceState(null,'',url);
    }
    renderRepos();renderRoadmap();renderContract();
  }
  languageButton.addEventListener('click',()=>setLanguage(language==='en'?'pt':'en',true));
  document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
    activeFilter=button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
    renderRepos();
  }));
  tabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>{activeStep=index;renderContract();});
    tab.addEventListener('keydown',event=>{
      let next=index;
      if(event.key==='ArrowRight') next=(index+1)%tabs.length;
      else if(event.key==='ArrowLeft') next=(index+tabs.length-1)%tabs.length;
      else if(event.key==='Home') next=0;
      else if(event.key==='End') next=tabs.length-1;
      else return;
      event.preventDefault();activeStep=next;renderContract();tabs[next].focus();
    });
  });
  let preferred='pt';
  try { preferred=localStorage.getItem('portfolio-language')||'pt'; } catch { /* Default to Portuguese. */ }
  const requested=new URLSearchParams(location.search).get('lang');
  if(requested) preferred=requested;
  setLanguage(preferred);
  document.getElementById('year').textContent=String(new Date().getFullYear());
})();

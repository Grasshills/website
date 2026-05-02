/* ═══════════════════════════════════════════════════════════
   GRASSHILLS CONSULTING — app.js
   i18n: EN · FR · ES · IT · ZH
   Nav, language switcher, scroll reveal
═══════════════════════════════════════════════════════════ */

const translations = {

en: {
  nav:{about:"About",services:"Services",whyUs:"Why Us",team:"Team",contact:"Contact"},
  hero:{label:"Independent Consulting Firm",tagline1:"Engineering Trust.",tagline2:"Delivering Results.",sub:"Independent technical expertise for complex infrastructure projects — AI-augmented, internationally standardised, Africa-rooted.",cta:"Explore Our Services",ctaContact:"Get in Touch",tag1:"Engineering",tag2:"Project Management",tag3:"Claims & Forensics",tag4:"AI & Data"},
  about:{label:"About Us",title:"A New Kind of Technical Partner",intro:"Grasshills is an independent advisory firm specialising in complex project engineering, construction management, forensic delay analysis, and AI & data intelligence. We serve project owners, financial institutions, and EPC contractors who need a trusted, independent technical voice — delivered with international rigour and African field depth.",missionTitle:"Our Mission",missionText:"To provide pragmatic, independent technical expertise that bridges the gap in experienced project management resources — guaranteeing transparency, cost control, and schedule performance for project owners and financiers.",visionTitle:"Our Vision",vision5yLabel:"5 years:",vision10yLabel:"10 years:",vision5y:" Become a reference firm, recognised for technical impact and analytical rigour.",vision10y:" Evolve into an integrated engineering firm capable of full design and delivery, on par with global leaders.",positioningTitle:"Our Positioning",diff1:"Independent expertise, results-oriented",diff2:"Integrated approach: technical, contractual & data",diff3:"Long-term investment vision",diff4:"Mastery of complex projects in the African context",diff5:"International standards applied locally"},
  services:{label:"What We Do",title:"Two Pillars. One Firm.",pillar1:"Engineering & Project Consulting",pillar1Sub:"Construction · Infrastructure · EPC",pillar2:"AI & Data Intelligence",pillar2Sub:"Custom Models · Datasets · Strategy",s1Title:"Project Planning & Controls",s1Desc:"End-to-end scheduling (CPM, baselines, milestones), progress tracking, and delay risk identification for complex construction projects.",s2Title:"Contract & Delay Claims",s2Desc:"Contractual advisory (FIDIC, GCC), forensic delay analysis, dispute resolution support and claims preparation for project owners and lenders.",s3Title:"Project & Engineering Management",s3Desc:"Full lifecycle project oversight — construction management, cost control, risk planning, and engineering advisory from concept to handover.",s4Title:"Data Engineering & Reporting",s4Desc:"Structuring and valorising project data assets. Custom KPI dashboards, performance reporting, and data-driven decision support.",s5Title:"Professional Training",s5Desc:"Practical training in MS Project, project management, and engineering management for technical teams in construction and infrastructure.",ai1Title:"Custom Model Development",ai1Desc:"End-to-end development of ML and deep learning models tailored to your problem — from architecture design to training, evaluation, and deployment.",ai2Title:"Synthetic Data Generation",ai2Desc:"Design and production of synthetic datasets for training AI models where real data is scarce, sensitive, or costly. Our core technical differentiator.",ai3Title:"Dataset Engineering",ai3Desc:"Dataset design, annotation strategy, quality control, and augmentation pipelines — built for model performance and long-term maintainability.",ai4Title:"Computer Vision Solutions",ai4Desc:"Object detection, classification, and visual inspection systems for industrial and operational environments. From prototype to production.",ai5Title:"AI Strategy & Digital Readiness",ai5Desc:"Helping organisations understand what AI can realistically deliver, where to invest, and how to structure data and workflows to get there."},
  whyUs:{label:"Our Edge",title:"What Sets Us Apart",w1Title:"Truly Independent",w1Desc:"No vendor allegiance. No conflict of interest. Our only obligation is to the technical truth and our client's best interests.",w2Title:"AI-Augmented Delivery",w2Desc:"We leverage AI agents and automation internally to deliver faster, more thorough analyses — at a fraction of traditional consulting cost.",w3Title:"Cross-Domain Expertise",w3Desc:"Engineering operations, project management, and artificial intelligence — rarely found in one firm. We bridge disciplines others keep separate.",w4Title:"African Context Mastery",w4Desc:"We have operated plants, managed projects, and delivered engineering across Congo, Mali, Ghana, Nigeria, Morocco, and South Africa. We know the terrain.",w5Title:"International Standards",w5Desc:"PMI, FIDIC, GCC, CPM scheduling, ISO frameworks — applied with rigour in constrained environments where they matter most."},
  team:{
    label:"The Team",
    title:"Built on Expertise",
    stephaneName:"Stéphane Fongang",
    stephaneRole:"Founder · Engineering & Project Controls",
    stephaneBio:"MEng · PMP® · Certified Forensic Delay Analyst · 16+ years delivering mega-projects across Africa. Former Project Control Manager and Planning Lead for global EPCs (Wood, Eiffage, SOFRECO). Specialises in master scheduling, integrated cost control, FIDIC contract administration, and complex mechanical construction.",
    rosaireName:"Rosaire Fongang",
    rosaireRole:"Co-Founder · Engineering & AI",
    rosaireBio:"MEng · MSc AI · 12+ years at Air Liquide across Africa and Europe. Engineering Management, former Country Industrial Manager. Specialises in Industrialization, AI solution development, synthetic data generation, and complex industrial project."
  },
  contact:{label:"Contact",title:"Let's Talk",sub:"Whether you need an independent technical review, a custom AI solution, or a long-term project partner — we're here.",emailLabel:"Email",phoneLabel:"Phone",locationLabel:"Locations",locations:"Cameroon · Rwanda · South Africa · France",cta:"Send us a message"},
  footer:{tagline:"Engineering Trust. Delivering Results.",rights:"© 2026 Grasshills Consulting. All rights reserved."}
},

fr: {
  nav:{about:"À propos",services:"Services",whyUs:"Pourquoi nous",team:"Équipe",contact:"Contact"},
  hero:{label:"Cabinet de Conseil Indépendant",tagline1:"L'excellence technique.",tagline2:"Des résultats concrets.",sub:"Expertise technique indépendante pour les projets d'infrastructure complexes — augmentée par l'IA, aux standards internationaux, ancrée en Afrique.",cta:"Découvrir nos services",ctaContact:"Nous contacter",tag1:"Ingénierie",tag2:"Gestion de projet",tag3:"Réclamations & Forensique",tag4:"IA & Données"},
  about:{label:"À propos",title:"Un partenaire technique d'un nouveau genre",intro:"Grasshills est un cabinet de conseil indépendant spécialisé dans l'ingénierie de projets complexes, la gestion de la construction, l'analyse forensique des retards et l'intelligence IA & données. Nous accompagnons les maîtres d'ouvrage, les institutions financières et les contractants EPC qui ont besoin d'un expert technique indépendant et de confiance.",missionTitle:"Notre Mission",missionText:"Apporter une expertise technique indépendante et pragmatique pour combler le déficit en ressources expérimentées de gestion de projets — en garantissant la transparence, la maîtrise des coûts et des délais pour les bailleurs de fonds et maîtres d'ouvrage.",visionTitle:"Notre Vision",vision5yLabel:"5 ans :",vision10yLabel:"10 ans :",vision5y:" Devenir un cabinet de référence reconnu pour son impact technique et la rigueur de ses analyses.",vision10y:" Évoluer vers un cabinet d'ingénierie intégré, capable d'assurer la conception et la maîtrise d'œuvre complète, à l'image des leaders mondiaux.",positioningTitle:"Notre Positionnement",diff1:"Expertise indépendante et orientée résultats",diff2:"Approche intégrée : technique, contractuelle & data",diff3:"Vision long terme des investissements",diff4:"Maîtrise des projets complexes en contexte africain",diff5:"Standards internationaux appliqués localement"},
  services:{label:"Ce que nous faisons",title:"Deux piliers. Un seul cabinet.",pillar1:"Conseil en Ingénierie & Projets",pillar1Sub:"Construction · Infrastructures · EPC",pillar2:"Intelligence IA & Données",pillar2Sub:"Modèles sur mesure · Datasets · Stratégie",s1Title:"Planification & Contrôle de projets",s1Desc:"Planification complète (CPM, baselines, jalons), suivi d'avancement et identification des risques de retard pour les projets de construction complexes.",s2Title:"Contrats & Réclamations de retards",s2Desc:"Conseil contractuel (FIDIC, GCC), analyse forensique des retards, support à la résolution des litiges et préparation de dossiers de réclamation.",s3Title:"Gestion de projets & d'ingénierie",s3Desc:"Supervision complète du cycle de vie du projet — construction management, maîtrise des coûts, gestion des risques et conseil en ingénierie de la conception à la livraison.",s4Title:"Ingénierie des données & Reporting",s4Desc:"Structuration et valorisation des données de projet. Tableaux de bord KPI, reporting de performance et aide à la décision par les données.",s5Title:"Formations professionnelles",s5Desc:"Formations pratiques et orientées terrain en MS Project, gestion de projets et management de l'ingénierie pour les équipes techniques.",ai1Title:"Développement de modèles sur mesure",ai1Desc:"Développement end-to-end de modèles ML et deep learning adaptés à votre problème — de l'architecture à l'entraînement, l'évaluation et le déploiement.",ai2Title:"Génération de données synthétiques",ai2Desc:"Conception et production de datasets synthétiques pour l'entraînement de modèles IA là où les données réelles sont rares, sensibles ou coûteuses. Notre différenciateur technique clé.",ai3Title:"Ingénierie des datasets",ai3Desc:"Conception des datasets, stratégie d'annotation, contrôle qualité et pipelines d'augmentation — conçus pour la performance des modèles et la maintenabilité à long terme.",ai4Title:"Solutions de vision par ordinateur",ai4Desc:"Systèmes de détection d'objets, de classification et d'inspection visuelle pour les environnements industriels et opérationnels. Du prototype à la production.",ai5Title:"Stratégie IA & Maturité numérique",ai5Desc:"Aider les organisations à comprendre ce que l'IA peut réellement apporter, où investir et comment structurer données et processus pour y parvenir."},
  whyUs:{label:"Notre avantage",title:"Ce qui nous distingue",w1Title:"Vraiment indépendants",w1Desc:"Aucune allégeance fournisseur. Aucun conflit d'intérêt. Notre seule obligation : la vérité technique et les intérêts de nos clients.",w2Title:"Livraison augmentée par l'IA",w2Desc:"Nous utilisons des agents IA et des outils d'automatisation en interne pour des analyses plus rapides et plus approfondies — à une fraction du coût du conseil traditionnel.",w3Title:"Expertise pluridisciplinaire",w3Desc:"Opérations industrielles, gestion de projets et intelligence artificielle — rarement réunis dans un seul cabinet. Nous connectons les disciplines que les autres maintiennent séparées.",w4Title:"Maîtrise du contexte africain",w4Desc:"Nous avons géré des usines et piloté des projets en RDC, Mali, Ghana, Nigeria, Maroc et Afrique du Sud. Nous connaissons le terrain.",w5Title:"Standards internationaux",w5Desc:"PMI, FIDIC, GCC, planification CPM, référentiels ISO — appliqués avec rigueur dans les environnements contraints où ils ont le plus d'impact."},
  team:{
    label:"L'équipe",
    title:"Fondée sur l'expertise",
    stephaneName:"Stéphane Fongang",
    stephaneRole:"Fondateur · Ingénierie & Contrôle de projets",
    stephaneBio:"MEng · PMP® · Analyste certifié en retards (Forensic) · 16+ ans dans la livraison de méga-projets en Afrique. Ancien Project Control Manager et responsable planification pour des EPC mondiaux (Wood, Eiffage, SOFRECO). Spécialiste de la planification (master scheduling), du contrôle des coûts intégré, de l'administration de contrats FIDIC et de la construction mécanique complexe.",
    rosaireName:"Rosaire Fongang",
    rosaireRole:"Co-Fondateur · Ingénierie & IA",
    rosaireBio:"MEng · MSc IA · 12+ ans chez Air Liquide en Afrique et en Europe. Management de l'ingénierie, ancien Directeur Industriel Pays. Spécialiste en industrialisation, développement de solutions IA, génération de données synthétiques et gestion de projets industriels complexes."
  },
  contact:{label:"Contact",title:"Parlons-en",sub:"Que vous ayez besoin d'une revue technique indépendante, d'une solution IA sur mesure ou d'un partenaire projet à long terme — nous sommes là.",emailLabel:"E-mail",phoneLabel:"Téléphone",locationLabel:"Implantations",locations:"Cameroun · Rwanda · Afrique du Sud · France",cta:"Envoyez-nous un message"},
  footer:{tagline:"L'excellence technique. Des résultats concrets.",rights:"© 2026 Grasshills Consulting. Tous droits réservés."}
},

es: {
  nav:{about:"Nosotros",services:"Servicios",whyUs:"Por qué elegirnos",team:"Equipo",contact:"Contacto"},
  hero:{label:"Firma de Consultoría Independiente",tagline1:"Ingeniería con confianza.",tagline2:"Resultados concretos.",sub:"Expertise técnico independiente para proyectos de infraestructura complejos — potenciado por IA, con estándares internacionales, arraigado en África.",cta:"Explorar nuestros servicios",ctaContact:"Contáctenos",tag1:"Ingeniería",tag2:"Gestión de proyectos",tag3:"Reclamaciones & Forense",tag4:"IA & Datos"},
  about:{label:"Nosotros",title:"Un socio técnico de nuevo tipo",intro:"Grasshills es una firma de consultoría independiente especializada en ingeniería de proyectos complejos, gestión de la construcción, análisis forense de retrasos e inteligencia en IA y datos. Servimos a propietarios de proyectos, instituciones financieras y contratistas EPC que necesitan una voz técnica independiente y de confianza.",missionTitle:"Nuestra Misión",missionText:"Aportar experiencia técnica independiente y pragmática para cubrir el déficit en recursos de gestión de proyectos experimentados — garantizando transparencia, control de costos y cumplimiento de plazos.",visionTitle:"Nuestra Visión",vision5yLabel:"5 años:",vision10yLabel:"10 años:",vision5y:" Convertirnos en una firma de referencia, reconocida por su impacto técnico y rigor analítico.",vision10y:" Evolucionar hacia una firma de ingeniería integrada capaz de diseño y entrega completa, a la par de los líderes mundiales.",positioningTitle:"Nuestro posicionamiento",diff1:"Expertise independiente orientada a resultados",diff2:"Enfoque integrado: técnico, contractual y de datos",diff3:"Visión de inversión a largo plazo",diff4:"Dominio de proyectos complejos en el contexto africano",diff5:"Estándares internacionales aplicados localmente"},
  services:{label:"Lo que hacemos",title:"Dos pilares. Una sola firma.",pillar1:"Consultoría en Ingeniería & Proyectos",pillar1Sub:"Construcción · Infraestructura · EPC",pillar2:"Inteligencia IA & Datos",pillar2Sub:"Modelos a medida · Datasets · Estrategia",s1Title:"Planificación y Control de Proyectos",s1Desc:"Programación integral (CPM, baselines, hitos), seguimiento del avance e identificación de riesgos de retraso para proyectos de construcción complejos.",s2Title:"Contratos y Reclamaciones por Retrasos",s2Desc:"Asesoría contractual (FIDIC, GCC), análisis forense de retrasos, apoyo en resolución de disputas y preparación de reclamaciones.",s3Title:"Gestión de Proyectos e Ingeniería",s3Desc:"Supervision completa del ciclo de vida del proyecto — gestión de la construcción, control de costos, planificación de riesgos y asesoría de ingeniería.",s4Title:"Ingeniería de Datos e Informes",s4Desc:"Estructuración y valorización de los activos de datos del proyecto. Paneles KPI personalizados, informes de rendimiento y apoyo a la toma de decisiones.",s5Title:"Formación Profesional",s5Desc:"Formación práctica en MS Project, gestión de proyectos y gestión de ingeniería para equipos técnicos en construcción e infraestructura.",ai1Title:"Desarrollo de Modelos a Medida",ai1Desc:"Desarrollo integral de modelos ML y deep learning adaptados a su problema — desde el diseño de arquitectura hasta el entrenamiento, evaluación y despliegue.",ai2Title:"Generación de Datos Sintéticos",ai2Desc:"Diseño y producción de datasets sintéticos para entrenar modelos de IA donde los datos reales son escasos, sensibles o costosos. Nuestro diferenciador técnico clave.",ai3Title:"Ingeniería de Datasets",ai3Desc:"Diseño de datasets, estrategia de anotación, control de calidad y pipelines de aumento — orientados al rendimiento del modelo y la mantenibilidad a largo plazo.",ai4Title:"Soluciones de Visión por Computador",ai4Desc:"Sistemas de detección de objetos, clasificación e inspección visual para entornos industriales y operacionales. Del prototipo a la producción.",ai5Title:"Estrategia IA y Madurez Digital",ai5Desc:"Ayudamos a las organizaciones a comprender lo que la IA puede ofrecer, dónde invertir y cómo estructurar datos y procesos para lograrlo."},
  whyUs:{label:"Nuestra ventaja",title:"Lo que nos diferencia",w1Title:"Verdaderamente independientes",w1Desc:"Sin lealtad a proveedores. Sin conflictos de interés. Nuestra única obligación es la verdad técnica y los mejores intereses del cliente.",w2Title:"Entrega potenciada por IA",w2Desc:"Utilizamos agentes de IA y herramientas de automatización internamente para análisis más rápidos y profundos — a una fracción del costo de la consultoría tradicional.",w3Title:"Expertise multidisciplinaria",w3Desc:"Operaciones de ingeniería, gestión de proyectos e inteligencia artificial — rara vez reunidas en una sola firma.",w4Title:"Dominio del contexto africano",w4Desc:"Hemos operado plantas y gestionado proyectos en Congo, Mali, Ghana, Nigeria, Marruecos y Sudáfrica. Conocemos el terreno.",w5Title:"Estándares internacionales",w5Desc:"PMI, FIDIC, GCC, programación CPM, marcos ISO — aplicados con rigor en entornos restrictivos donde más importan."},
  team:{
    label:"El Equipo",
    title:"Fundado en la experiencia",
    stephaneName:"Stéphane Fongang",
    stephaneRole:"Fundador · Ingeniería & Control de Proyectos",
    stephaneBio:"MEng · PMP® · Analista forense de retrasos certificado · Más de 16 años entregando megaproyectos en África. Ex Project Control Manager y líder de planificación para EPC globales (Wood, Eiffage, SOFRECO). Especialista en programación maestra, control de costos integrado, administración de contratos FIDIC y construcción mecánica compleja.",
    rosaireName:"Rosaire Fongang",
    rosaireRole:"Co-Fundador · Ingeniería & IA",
    rosaireBio:"MEng · MSc IA · Más de 12 años en Air Liquide en África y Europa. Gestión de Ingeniería, ex Director Industrial de País. Especialista en industrialización, desarrollo de soluciones de IA, generación de datos sintéticos y gestión de proyectos industriales complejos."
  },
  contact:{label:"Contacto",title:"Hablemos",sub:"Ya sea que necesite una revisión técnica independiente, una solución IA personalizada o un socio de proyecto a largo plazo — estamos aquí.",emailLabel:"Correo electrónico",phoneLabel:"Teléfono",locationLabel:"Ubicaciones",locations:"Camerún · Ruanda · Sudáfrica · Francia",cta:"Envíenos un mensaje"},
  footer:{tagline:"Ingeniería con confianza. Resultados concretos.",rights:"© 2026 Grasshills Consulting. Todos los derechos reservados."}
},

it: {
  nav:{about:"Chi siamo",services:"Servizi",whyUs:"Perché noi",team:"Team",contact:"Contatti"},
  hero:{label:"Studio di Consulenza Indipendente",tagline1:"Ingegneria di fiducia.",tagline2:"Risultati concreti.",sub:"Expertise tecnica indipendente per progetti infrastrutturali complessi — potenziata dall'IA, con standard internazionali, radicata in Africa.",cta:"Esplora i nostri servizi",ctaContact:"Contattaci",tag1:"Ingegneria",tag2:"Project Management",tag3:"Reclami & Forensics",tag4:"IA & Dati"},
  about:{label:"Chi siamo",title:"Un nuovo tipo di partner tecnico",intro:"Grasshills è uno studio di consulenza indipendente specializzato in ingegneria di progetti complessi, gestione della costruzione, analisi forense dei ritardi e intelligenza IA e dati. Serviamo committenti, istituzioni finanziarie e appaltatori EPC che necessitano di una voce tecnica indipendente e di fiducia.",missionTitle:"La nostra Missione",missionText:"Fornire un'expertise tecnica indipendente e pragmatica che colmi il divario nelle risorse di project management esperte — garantendo trasparenza, controllo dei costi e rispetto delle scadenze.",visionTitle:"La nostra Visione",vision5yLabel:"5 anni:",vision10yLabel:"10 anni:",vision5y:" Diventare uno studio di riferimento, riconosciuto per il suo impatto tecnico e il rigore analitico.",vision10y:" Evolversi in uno studio di ingegneria integrato, capace di progettazione e consegna completa, al pari dei leader mondiali.",positioningTitle:"Il nostro Posizionamento",diff1:"Expertise indipendente e orientata ai risultati",diff2:"Approccio integrato: tecnico, contrattuale e data",diff3:"Visione degli investimenti a lungo termine",diff4:"Padronanza di progetti complessi nel contesto africano",diff5:"Standard internazionali applicati localmente"},
  services:{label:"Cosa facciamo",title:"Due pilastri. Un solo studio.",pillar1:"Consulenza in Ingegneria & Progetti",pillar1Sub:"Costruzione · Infrastrutture · EPC",pillar2:"Intelligenza IA & Dati",pillar2Sub:"Modelli su misura · Dataset · Strategia",s1Title:"Pianificazione & Controllo Progetti",s1Desc:"Programmazione completa (CPM, baseline, milestone), monitoraggio dell'avanzamento e identificazione dei rischi di ritardo.",s2Title:"Contratti & Reclami per Ritardi",s2Desc:"Consulenza contrattuale (FIDIC, GCC), analisi forense dei ritardi, supporto alla risoluzione delle controversie.",s3Title:"Gestione Progetti e Ingegneria",s3Desc:"Supervisione completa del ciclo di vita del progetto — construction management, controllo dei costi, pianificazione dei rischi.",s4Title:"Data Engineering & Reporting",s4Desc:"Strutturazione e valorizzazione degli asset di dati di progetto. Dashboard KPI e supporto decisionale basato sui dati.",s5Title:"Formazione Professionale",s5Desc:"Formazione pratica in MS Project, project management e gestione dell'ingegneria per team tecnici.",ai1Title:"Sviluppo di Modelli su Misura",ai1Desc:"Sviluppo end-to-end di modelli ML e deep learning adattati al tuo problema — dall'architettura al deployment.",ai2Title:"Generazione di Dati Sintetici",ai2Desc:"Progettazione e produzione di dataset sintetici per addestrare modelli IA dove i dati reali sono scarsi, sensibili o costosi.",ai3Title:"Dataset Engineering",ai3Desc:"Progettazione dei dataset, strategia di annotazione, controllo qualità e pipeline di augmentation.",ai4Title:"Soluzioni di Computer Vision",ai4Desc:"Sistemi di object detection, classificazione e ispezione visiva per ambienti industriali e operativi.",ai5Title:"Strategia IA & Digital Readiness",ai5Desc:"Aiutiamo le organizzazioni a capire cosa l'IA può realisticamente offrire, dove investire e come strutturare dati e processi."},
  whyUs:{label:"Il nostro vantaggio",title:"Cosa ci distingue",w1Title:"Veramente indipendenti",w1Desc:"Nessuna fedeltà ai fornitori. Nessun conflitto di interessi. Il nostro unico obbligo è la verità tecnica.",w2Title:"Delivery potenziata dall'IA",w2Desc:"Utilizziamo agenti IA e strumenti di automazione internamente per analisi più rapide e approfondite.",w3Title:"Expertise trasversale",w3Desc:"Operazioni ingegneristiche, project management e intelligenza artificiale — raramente riunite in un solo studio.",w4Title:"Padronanza del contesto africano",w4Desc:"Abbiamo gestito impianti e progetti in Congo, Mali, Ghana, Nigeria, Marocco e Sudafrica.",w5Title:"Standard internazionali",w5Desc:"PMI, FIDIC, GCC, programmazione CPM, framework ISO — applicati con rigore in ambienti complessi."},
  team:{
    label:"Il Team",
    title:"Fondato sull'expertise",
    stephaneName:"Stéphane Fongang",
    stephaneRole:"Fondatore · Ingegneria & Controllo Progetti",
    stephaneBio:"MEng · PMP® · Analista forense dei ritardi certificato · 16+ anni nella consegna di megaprogetti in Africa. Ex Project Control Manager e Planning Lead per EPC globali (Wood, Eiffage, SOFRECO). Specializzato in master scheduling, controllo dei costi integrato, amministrazione di contratti FIDIC e costruzione meccanica complessa.",
    rosaireName:"Rosaire Fongang",
    rosaireRole:"Co-Fondatore · Ingegneria & IA",
    rosaireBio:"MEng · MSc IA · 12+ anni in Air Liquide tra Africa ed Europa. Engineering Management, ex Direttore Industriale Paese. Specializzato in industrializzazione, sviluppo di soluzioni IA, generazione di dati sintetici e gestione di progetti industriali complessi."
  },
  contact:{label:"Contatti",title:"Parliamone",sub:"Che abbiate bisogno di una revisione tecnica indipendente, di una soluzione IA su misura o di un partner di progetto — siamo qui.",emailLabel:"Email",phoneLabel:"Telefono",locationLabel:"Sedi",locations:"Camerun · Ruanda · Sudafrica · Francia",cta:"Inviaci un messaggio"},
  footer:{tagline:"Ingegneria di fiducia. Risultati concreti.",rights:"© 2026 Grasshills Consulting. Tutti i diritti riservati."}
},

zh: {
  nav:{about:"关于我们",services:"服务",whyUs:"为何选择我们",team:"团队",contact:"联系我们"},
  hero:{label:"独立咨询公司",tagline1:"工程赢得信任。",tagline2:"交付切实成果。",sub:"为复杂基础设施项目提供独立技术专业知识——AI赋能，符合国际标准，根植非洲。",cta:"探索我们的服务",ctaContact:"立即联系",tag1:"工程",tag2:"项目管理",tag3:"索赔与取证",tag4:"AI与数据"},
  about:{label:"关于我们",title:"全新技术合作伙伴",intro:"Grasshills是一家独立咨询公司，专注于复杂项目工程、施工管理、延误取证分析以及AI与数据智能。我们服务于项目业主、金融机构和EPC承包商，为其提供值得信赖的独立技术专业意见。",missionTitle:"我们的使命",missionText:"提供务实、独立的技术专业知识，弥补经验丰富项目管理资源的缺口——为项目业主和融资方保障透明度、成本控制和进度绩效。",visionTitle:"我们的愿景",vision5yLabel:"5年：",vision10yLabel:"10年：",vision5y:" 成为一家标杆公司，以技术影响力和分析严谨性获得广泛认可。",vision10y:" 发展为综合工程公司，具备完整的设计和项目交付能力，跻身全球领先行列。",positioningTitle:"我们的定位",diff1:"独立专业，结果导向",diff2:"综合方法：技术、合同与数据",diff3:"长期投资视野",diff4:"掌握非洲背景下的复杂项目",diff5:"国际标准本地化应用"},
  services:{label:"我们的业务",title:"两大支柱，一家公司。",pillar1:"工程与项目咨询",pillar1Sub:"建筑 · 基础设施 · EPC",pillar2:"AI与数据智能",pillar2Sub:"定制模型 · 数据集 · 战略",s1Title:"项目计划与控制",s1Desc:"全面进度规划（CPM、基准、里程碑）、进度跟踪以及复杂建设项目的延误风险识别。",s2Title:"合同与延误索赔",s2Desc:"合同咨询（FIDIC、GCC）、延误取证分析、争议解决支持及索赔文件准备。",s3Title:"项目与工程管理",s3Desc:"全生命周期项目监督——施工管理、成本控制、风险规划以及从概念到移交的工程咨询。",s4Title:"数据工程与报告",s4Desc:"构建和利用项目数据资产。定制KPI仪表板、绩效报告和数据驱动决策支持。",s5Title:"专业培训",s5Desc:"面向建筑和基础设施技术团队的MS Project、项目管理和工程管理实用培训。",ai1Title:"定制模型开发",ai1Desc:"针对您特定问题的端到端ML和深度学习模型开发——从架构设计到训练、评估和部署。",ai2Title:"合成数据生成",ai2Desc:"为AI模型训练设计和生成合成数据集，适用于真实数据稀缺、敏感或成本高昂的场景。",ai3Title:"数据集工程",ai3Desc:"数据集设计、标注策略、质量控制和数据增强管道——以模型性能和长期可维护性为导向。",ai4Title:"计算机视觉解决方案",ai4Desc:"面向工业和运营环境的目标检测、分类和视觉检测系统。从原型到生产部署。",ai5Title:"AI战略与数字化就绪",ai5Desc:"帮助企业了解AI的现实价值、投资方向，以及如何构建数据和工作流程以实现目标。"},
  whyUs:{label:"我们的优势",title:"我们的核心差异",w1Title:"真正独立",w1Desc:"无供应商利益关系，无利益冲突。我们唯一的责任是技术真实性和客户的最大利益。",w2Title:"AI赋能交付",w2Desc:"我们在内部使用AI代理和自动化工具，以更快、更彻底的分析——仅需传统咨询成本的一小部分。",w3Title:"跨领域专业知识",w3Desc:"工程运营、项目管理和人工智能——鲜有公司能将这三者集于一身。",w4Title:"非洲背景专业能力",w4Desc:"我们在刚果、马里、加纳、尼日利亚、摩洛哥和南非运营过工厂、管理过项目。",w5Title:"国际标准",w5Desc:"PMI、FIDIC、GCC、CPM进度规划、ISO框架——在最需要它们的复杂环境中严格应用。"},
  team:{
    label:"我们的团队",
    title:"以专业知识为基础",
    stephaneName:"Stéphane Fongang",
    stephaneRole:"创始人 · 工程与项目控制",
    stephaneBio:"工程硕士（MEng）· PMP® · 认证延误取证分析师 · 16年以上在非洲交付超大型项目的经验。曾担任全球EPC（Wood、Eiffage、SOFRECO）的项目控制经理和计划主管。专注于总体进度规划、综合成本控制、FIDIC合同管理和复杂的机械施工。",
    rosaireName:"Rosaire Fongang",
    rosaireRole:"联合创始人 · 工程与AI",
    rosaireBio:"工程硕士（MEng）· 人工智能理学硕士（MSc AI）· 在非洲和欧洲的Air Liquide工作12年以上。工程管理，前国家工业总监。专注于工业化、AI解决方案开发、合成数据生成和复杂的工业项目管理。"
  },
  contact:{label:"联系我们",title:"期待合作",sub:"无论您需要独立的技术审查、定制的AI解决方案，还是长期项目合作伙伴——我们随时为您服务。",emailLabel:"电子邮件",phoneLabel:"电话",locationLabel:"办公地点",locations:"喀麦隆 · 卢旺达 · 南非 · 法国",cta:"给我们发消息"},
  footer:{tagline:"工程赢得信任。交付切实成果。",rights:"© 2026 Grasshills Consulting. 保留所有权利。"}
}

};

// ─── i18n ─────────────────────────────────────────────────
let lang = localStorage.getItem('gh_lang') || 'en';

function t(k) {
  const keys = k.split('.');
  let o = translations[lang] || translations.en;
  for (const x of keys) o = o?.[x];
  return o || k;
}

function apply() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.getAttribute('data-i18n'));
    if (v && v !== el.getAttribute('data-i18n')) el.textContent = v;
  });
  document.documentElement.lang = lang;
  const labels = {en:'EN',fr:'FR',es:'ES',it:'IT',zh:'中文'};
  document.getElementById('langBtn').innerHTML = (labels[lang]||'EN') + ' <svg width="10" height="6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  document.querySelectorAll('.lang-dd li').forEach(li => li.classList.toggle('active', li.dataset.lang === lang));
}

function setLang(l) { if (translations[l]) { lang = l; localStorage.setItem('gh_lang', l); apply(); } }

// ─── NAV ──────────────────────────────────────────────────
const nb = document.getElementById('navbar');
const bg = document.getElementById('navBurger');
const mm = document.getElementById('navMobile');

window.addEventListener('scroll', () => nb.classList.toggle('scrolled', scrollY > 40));

bg.addEventListener('click', () => {
  const o = bg.classList.toggle('open');
  mm.classList.toggle('open', o);
});
mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { bg.classList.remove('open'); mm.classList.remove('open'); }));

// ─── LANG ─────────────────────────────────────────────────
const ls = document.getElementById('langSwitcher');
document.getElementById('langBtn').addEventListener('click', e => { e.stopPropagation(); ls.classList.toggle('open'); });
document.getElementById('langDropdown').querySelectorAll('li').forEach(li => li.addEventListener('click', () => { setLang(li.dataset.lang); ls.classList.remove('open'); }));
document.addEventListener('click', () => ls.classList.remove('open'));

// ─── REVEAL ───────────────────────────────────────────────
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ─── SMOOTH SCROLL ────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const tgt = document.querySelector(a.getAttribute('href'));
    if (!tgt) return;
    e.preventDefault();
    window.scrollTo({ top: tgt.getBoundingClientRect().top + scrollY - nb.offsetHeight, behavior: 'smooth' });
  });
});

// ─── INIT ─────────────────────────────────────────────────
apply();

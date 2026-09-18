import en from './en';

type TranslationKey = keyof typeof en;

const fr: Record<TranslationKey, string> = {
  'language.label': 'Langue',

  'nav.about': 'À propos',
  'nav.applications': 'Applications',
  'nav.physics': 'Physique',
  'nav.technology': 'Technologie',
  'nav.documentation': 'Documentation',
  'nav.community': 'Communauté',
  'nav.github': 'GitHub',

  'meta.home.title': 'GGEMS — GPU Geant4-based Monte Carlo Simulations',
  'meta.home.description':
    'GGEMS est une plateforme open source de simulation Monte Carlo sur GPU pour l’imagerie médicale, la dosimétrie et la thérapie par particules.',

  'meta.physics.title': 'Physique — GGEMS',
  'meta.physics.description':
    'Découvrez le périmètre physique de GGEMS pour l’imagerie médicale, la dosimétrie et le transport de particules.',

  'hero.eyebrow': 'GGEMS · Monte Carlo GPU',
  'hero.title.primary': 'Monte Carlo',
  'hero.title.secondary': 'pour la physique médicale.',
  'hero.lead':
    'Simulation haute performance pour l’imagerie médicale, la dosimétrie et la thérapie par particules.',
  'hero.discover': 'Découvrir GGEMS',
  'hero.openSource': 'Open source',
  'hero.gpuFirst': 'GPU-first',

  'objective.eyebrow': 'GGEMS',
  'objective.title.primary': 'Conçu pour la science.',
  'objective.title.secondary': 'Pensé pour les GPU.',
  'objective.lead':
    'GGEMS est une plateforme open source de simulation Monte Carlo dédiée aux applications haute performance en physique médicale.',
  'objective.body':
    'Le projet associe un cœur scientifique moderne à une exécution orientée GPU pour prendre en charge des workflows de simulation exigeants en imagerie médicale, dosimétrie et transport de particules.',
  'objective.explore': 'Explorer le projet',

  'pillar.gpu.title': 'GPU-first',
  'pillar.gpu.body':
    'Des algorithmes scientifiques conçus autour des architectures hétérogènes modernes, plutôt qu’adaptés au GPU après coup.',
  'pillar.physics.title': 'Physique médicale',
  'pillar.physics.body':
    'Une plateforme de simulation dédiée à l’imagerie, la dosimétrie, la radiothérapie et au transport de particules d’intérêt médical.',
  'pillar.open.title': 'Science ouverte',
  'pillar.open.body':
    'Développement open source, validation scientifique explicite et workflows de référence reproductibles.',

  'applications.eyebrow': 'Applications',
  'applications.title.primary': 'La simulation au service de',
  'applications.title.secondary': 'la physique médicale.',

  'applications.ct.title': 'CT & CBCT',
  'applications.ct.body':
    'Simulation Monte Carlo sur GPU pour l’imagerie X, la génération de projections, la modélisation des scanners et les workflows de tomodensitométrie.',

  'applications.pet.title': 'PET & SPECT',
  'applications.pet.body':
    'Simulation de l’imagerie d’émission pour les systèmes de détection, les sources radionucléides, le transport de particules et la modélisation des acquisitions.',

  'applications.dosimetry.title': 'Dosimétrie',
  'applications.dosimetry.body':
    'Calcul haute performance du dépôt d’énergie et de la dose pour l’imagerie, la radiothérapie et les workflows de validation scientifique.',
  'applications.dosimetry.visual': 'DOSE · ÉNERGIE',

  'applications.therapy.title': 'Thérapie par particules & hadronthérapie',
  'applications.therapy.body':
    'Transport Monte Carlo de faisceaux de particules d’intérêt médical pour les applications thérapeutiques.',
  'applications.therapy.proton': 'Protonthérapie',
  'applications.therapy.hadron': 'Hadronthérapie',
  'applications.therapy.neutron': 'Neutronthérapie',
  'applications.therapy.visual': 'THÉRAPIE PAR PARTICULES',

  'homePhysics.eyebrow': 'Physique',
  'homePhysics.title.primary': 'Le transport de particules',
  'homePhysics.title.secondary': 'au cœur de GGEMS.',
  'homePhysics.lead':
    'GGEMS est structuré autour du transport des particules et des interactions physiques utiles à l’imagerie médicale, la dosimétrie et aux simulations orientées thérapie.',
  'homePhysics.gamma': 'Gamma',
  'homePhysics.electrons': 'Électron · Positon',
  'homePhysics.proton': 'Proton',
  'homePhysics.alpha': 'Alpha · GenericIon',
  'homePhysics.neutron': 'Neutron',
  'homePhysics.note':
    'Le périmètre physique, l’état d’implémentation et la validation évoluent ensemble. Le détail de la disponibilité des modèles appartient à la documentation scientifique.',
  'homePhysics.link': 'Explorer la physique',

  'physics.eyebrow': 'Physique',
  'physics.hero.primary': 'Une physique',
  'physics.hero.secondary': 'au périmètre explicite.',
  'physics.hero.lead':
    'GGEMS distingue clairement le périmètre scientifique, l’implémentation logicielle et la validation. Un modèle n’est présenté comme pris en charge qu’une fois son implémentation et sa validation prêtes.',
  'physics.scope.eyebrow': 'Familles de particules',
  'physics.scope.title.primary': 'Physique du transport pour',
  'physics.scope.title.secondary': 'les applications médicales.',
  'physics.gamma.body':
    'Interactions des photons utiles au transport X et gamma, à l’imagerie et au dépôt d’énergie.',
  'physics.gamma.processes':
    'Photoélectrique · Compton · Rayleigh · Création de paires',
  'physics.electrons.body':
    'Transport des leptons chargés pour les pertes d’énergie électromagnétiques, la diffusion et la production secondaire.',
  'physics.electrons.processes':
    'Ionisation · Bremsstrahlung · Diffusion multiple · Annihilation',
  'physics.proton.body':
    'Transport des hadrons chargés pour les applications thérapeutiques et dosimétriques.',
  'physics.proton.processes':
    'Pouvoir d’arrêt · Ionisation · Diffusion multiple · Effets nucléaires',
  'physics.alpha.body':
    'Transport des particules alpha et des cas d’usage de type GenericIon pour le dépôt d’énergie et les applications liées aux radionucléides.',
  'physics.alpha.processes':
    'Pouvoir d’arrêt · Ionisation · Diffusion multiple',
  'physics.neutron.body':
    'Le transport des neutrons fait partie du périmètre de GGEMS en physique médicale et demande une validation dédiée.',
  'physics.neutron.processes':
    'Élastique · Inélastique · Capture · Transport basé sur les données',

  'physics.status.eyebrow': 'Statut scientifique',
  'physics.status.title.primary': 'Le périmètre n’est pas',
  'physics.status.title.secondary': 'synonyme de prise en charge.',
  'physics.status.body':
    'Le site peut présenter la direction scientifique avant que chaque modèle soit disponible. Les déclarations de prise en charge restent liées à l’implémentation et à la validation réelles dans GGEMS.',
  'physics.status.scope.title': 'Périmètre',
  'physics.status.scope.body':
    'Les familles de particules et de processus que GGEMS est conçu pour couvrir.',
  'physics.status.implementation.title': 'Implémentation',
  'physics.status.implementation.body':
    'Les modèles effectivement disponibles dans le logiciel publié.',
  'physics.status.validation.title': 'Validation',
  'physics.status.validation.body':
    'Les éléments quantitatifs utilisés pour établir un comportement fiable.',

  'physics.docs.eyebrow': 'Documentation',
  'physics.docs.title.primary': 'De la vue d’ensemble',
  'physics.docs.title.secondary': 'au détail scientifique.',
  'physics.docs.body':
    'Le site présente la physique à haut niveau. Sphinx prendra le relais pour les modèles, les domaines en énergie, les références, la méthodologie de validation et les exemples reproductibles.',
  'physics.docs.link': 'Ouvrir la documentation',

  'meta.about.title': 'À propos — GGEMS',
  'meta.about.description':
    'Découvrez GGEMS, son objectif scientifique, son modèle open source et sa conception GPU-first.',
  'about.eyebrow': 'À propos',
  'about.hero.primary': 'Monte Carlo',
  'about.hero.secondary': 'pour la physique médicale.',
  'about.hero.lead':
    'GGEMS est un projet scientifique open source consacré à la simulation Monte Carlo haute performance pour l’imagerie médicale, la dosimétrie et le transport de particules.',
  'about.identity.eyebrow': 'Identité du projet',
  'about.identity.title.primary': 'Un logiciel scientifique.',
  'about.identity.title.secondary': 'Ouvert par conception.',
  'about.identity.body':
    'GGEMS est développé à la fois comme environnement de simulation autonome et comme fondation logicielle scientifique réutilisable. Le site public présente le projet ; Sphinx prend le relais pour l’utilisation détaillée et la documentation scientifique.',
  'about.values.gpu.title': 'GPU-first',
  'about.values.gpu.body':
    'Une architecture de simulation pensée autour du calcul hétérogène, et non une accélération ajoutée après coup.',
  'about.values.science.title': 'Validation scientifique',
  'about.values.science.body':
    'La physique, l’échantillonnage et le transport sont documentés et validés explicitement au fur et à mesure que l’implémentation progresse.',
  'about.values.open.title': 'Open source',
  'about.values.open.body':
    'GGEMS est distribué sous licence GPL-3.0 et développé publiquement au sein de son organisation GitHub.',
  'about.people.eyebrow': 'Équipe',
  'about.people.title.primary': 'Développé',
  'about.people.title.secondary': 'pour la recherche.',
  'about.people.julien': 'Julien Bert',
  'about.people.julien.role': 'Université de Brest',
  'about.people.didier': 'Didier Benoit',
  'about.people.didier.role': 'INSERM',
  'about.links.github': 'Code source',
  'about.links.docs': 'Documentation',
  'about.links.forum': 'Forum communautaire',

  'meta.applications.title': 'Applications — GGEMS',
  'meta.applications.description':
    'Découvrez les domaines d’application en physique médicale visés par GGEMS.',
  'applicationsPage.eyebrow': 'Applications',
  'applicationsPage.hero.primary': 'Monte Carlo pour',
  'applicationsPage.hero.secondary': 'les workflows de physique médicale.',
  'applicationsPage.hero.lead':
    'GGEMS est conçu pour des workflows de simulation couvrant l’imagerie médicale, la dosimétrie et la recherche en thérapie par particules.',
  'applicationsPage.scope.eyebrow': 'Périmètre scientifique',
  'applicationsPage.scope.title.primary': 'Un même cœur de simulation.',
  'applicationsPage.scope.title.secondary': 'Plusieurs domaines d’application.',
  'applicationsPage.ct.body':
    'Imagerie X, génération de projections, géométrie des scanners et workflows de simulation CT/CBCT.',
  'applicationsPage.pet.body':
    'Workflows d’imagerie d’émission associant sources radionucléides, systèmes de détection et modélisation des acquisitions.',
  'applicationsPage.dose.body':
    'Workflows orientés dépôt d’énergie et dose pour l’imagerie, la radiothérapie et la validation scientifique.',
  'applicationsPage.therapy.body':
    'Transport de faisceaux de particules orienté recherche pour la protonthérapie, l’hadronthérapie et la neutronthérapie, au rythme de l’implémentation et de la validation du périmètre physique correspondant.',
  'applicationsPage.note.eyebrow': 'État du développement',
  'applicationsPage.note.title.primary': 'Le périmètre d’abord.',
  'applicationsPage.note.title.secondary': 'Les promesses après validation.',
  'applicationsPage.note.body':
    'Le site peut présenter les domaines visés par GGEMS avant que chaque workflow soit complètement disponible. Les déclarations de prise en charge restent liées à l’état réel de l’implémentation publiée et de sa validation.',

  'meta.technology.title': 'Technologie — GGEMS',
  'meta.technology.description':
    'Découvrez les technologies logicielles et les principes d’ingénierie utilisés par GGEMS.',
  'technologyPage.eyebrow': 'Technologie',
  'technologyPage.hero.primary': 'Un logiciel moderne',
  'technologyPage.hero.secondary': 'pour le calcul scientifique.',
  'technologyPage.hero.lead':
    'Dans GGEMS, la technologie sert la science : cœur C++ moderne, calcul hétérogène, interfaces de scripting et outils natifs de visualisation.',
  'technologyPage.stack.eyebrow': 'Stack logicielle',
  'technologyPage.stack.title.primary': 'Construit avec',
  'technologyPage.stack.title.secondary': 'des outils modernes.',
  'technologyPage.cpp.title': 'C++23',
  'technologyPage.cpp.body':
    'Le cœur de GGEMS cible le C++ moderne pour le typage fort, la maintenabilité et une architecture scientifique explicite.',
  'technologyPage.opencl.title': 'OpenCL',
  'technologyPage.opencl.body':
    'Le calcul hétérogène portable reste central dans l’exécution GPU de GGEMS sur les périphériques pris en charge.',
  'technologyPage.python.title': 'Python',
  'technologyPage.python.body':
    'Une interface haut niveau accompagne la configuration des simulations, leur orchestration et les workflows scientifiques autour du cœur natif.',
  'technologyPage.vulkan.title': 'Vulkan',
  'technologyPage.vulkan.body':
    'Vulkan fait partie de l’écosystème de visualisation et de la future interface graphique native de GGEMS.',
  'technologyPage.imgui.title': 'Dear ImGui',
  'technologyPage.imgui.body':
    'Dear ImGui fournit une base légère pour les interfaces graphiques scientifiques et développeur.',
  'technologyPage.principle.eyebrow': 'Principe d’ingénierie',
  'technologyPage.principle.title.primary': 'La technologie reste',
  'technologyPage.principle.title.secondary': 'au service de la physique.',
  'technologyPage.principle.body':
    'GGEMS ne se définit pas par un framework ou une API graphique. La stack logicielle existe pour rendre la simulation, la validation et l’usage scientifique plus fiables et plus efficaces.',

  'footer.tagline': 'Monte Carlo sur GPU pour la physique médicale',
  'footer.documentation': 'Documentation',
  'footer.forum': 'Forum',
};

export default fr;

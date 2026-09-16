import type { Lang } from './config';

const roadmap = {
  en: {
    'meta.title': 'Roadmap — GGEMS',
    'meta.description':
      'Explore the audited implementation roadmap for GGEMS, from the first validated Gamma transport chain to detector, neutron and multi-device workflows.',

    'home.eyebrow': 'Implementation roadmap',
    'home.title.primary': 'Architecture audited.',
    'home.title.secondary': 'Implementation begins.',
    'home.lead':
      'GGEMS now advances through bounded, validated implementation slices rather than one monolithic development campaign.',
    'home.status': 'Audits 01–11 complete',
    'home.milestone': 'First validated Gamma chain',
    'home.link': 'Explore the roadmap',

    'hero.eyebrow': 'Roadmap',
    'hero.title.primary': 'From audited architecture',
    'hero.title.secondary': 'to validated physics.',
    'hero.lead':
      'The GGEMS 2 implementation roadmap turns the completed architecture audits into an incremental scientific implementation sequence. Every slice is expected to compile, test and validate before the next layer depends on it.',

    'status.architecture.label': 'Architecture',
    'status.architecture.value': 'Audits 01–11 complete',
    'status.debug.label': 'Audit-11 Debug baseline',
    'status.debug.value': '738 / 738',
    'status.release.label': 'Audit-11 targeted Release',
    'status.release.value': '138 / 138',
    'status.stage.label': 'Current stage',
    'status.stage.value': 'Incremental implementation',

    'critical.eyebrow': 'Critical physics path',
    'critical.title.primary': 'Build the first physical chain',
    'critical.title.secondary': 'without postponing validation.',
    'critical.lead':
      'The first production milestone follows the shortest coherent path from numeric foundations to a field-free Gamma transport chain with scientific scoring.',
    'critical.foundation': 'Numeric foundations',
    'critical.materials': 'Materials',
    'critical.cuts': 'Production Cuts',
    'critical.navigation': 'Analytic Navigation',
    'critical.gamma': 'Gamma Processes',
    'critical.transport': 'Physical Transport',
    'critical.scoring': 'Scoring',
    'critical.milestone': 'First validated Gamma chain',
    'critical.milestone.note': 'Source → Materials/Cuts → Gamma → Navigation → Transport → Scoring',

    'sequence.eyebrow': 'Implementation sequence',
    'sequence.title.primary': 'Twenty-one bounded phases.',
    'sequence.title.secondary': 'One green tree.',
    'sequence.lead':
      'The public view keeps the implementation order visible without pretending that planned architecture is already released capability.',


    'phase.label': 'Phase',
    'milestone.label': 'Milestone',
    'phase.00': 'Implementation operating baseline',
    'phase.01': 'Minimal numeric foundations',
    'phase.02': 'Materials core compiler',
    'phase.03': 'Production Cuts & couples',
    'phase.04': 'Analytic Navigation',
    'phase.05': 'Gamma Processes',
    'phase.06': 'Physical Transport',
    'phase.07': 'Scoring & photon TLE',
    'phase.08': 'Voxel & mesh Navigation',
    'phase.09': 'Electron / Positron transport',
    'phase.10': 'Magnetic field',
    'phase.11': 'Proton & Alpha EM',
    'phase.12': 'Raw Hits',
    'phase.13': 'Digitizer',
    'phase.14': 'Acquisition execution',
    'phase.15': 'Detector Data Chain',
    'phase.16': 'Neutron HP/HPT foundations',
    'phase.17': 'Scientific I/O adapters',
    'phase.18': 'Multi-device integration',
    'phase.19': 'Named modality campaigns',
    'phase.20': 'Performance qualification',

    'parallel.eyebrow': 'Parallel paths',
    'parallel.title.primary': 'Several branches.',
    'parallel.title.secondary': 'One scientific contract.',
    'parallel.lead':
      'Detector/data, neutron/material and charged-particle work can advance in parallel, then reunite in modality and multi-device validation.',
    'parallel.charged.title': 'Navigation & charged transport',
    'parallel.charged.range': 'Phases 08–11',
    'parallel.charged.body': 'Voxel and mesh navigation, electron/positron transport, magnetic fields, then Proton and Alpha EM.',
    'parallel.detector.title': 'Detector & acquisition',
    'parallel.detector.range': 'Phases 12–15',
    'parallel.detector.body': 'Raw Hits, Digitizer, Acquisition execution and the typed Detector Data Chain.',
    'parallel.neutron.title': 'Neutron & scientific I/O',
    'parallel.neutron.range': 'Phases 16–17',
    'parallel.neutron.body': 'Isotope/thermal Materials, medical Neutron HP/HPT and production scientific I/O adapters.',
    'parallel.integration.title': 'Integration & qualification',
    'parallel.integration.range': 'Phases 18–20',
    'parallel.integration.body': 'Multi-device correctness, named modality campaigns and performance qualification after scientific equivalence.',

    'principle.eyebrow': 'Roadmap principle',
    'principle.title.primary': 'No giant implementation',
    'principle.title.secondary': 'followed by validation later.',
    'principle.body':
      'Each bounded slice is implemented against the approved architecture, tested deterministically, scientifically validated and integrated before optimization is treated as meaningful evidence.',
    'principle.note':
      'The roadmap describes implementation intent. Public support claims remain tied to released code and completed validation.',
  },
  fr: {
    'meta.title': 'Roadmap — GGEMS',
    'meta.description':
      'Découvrez la roadmap d’implémentation auditée de GGEMS, de la première chaîne Gamma validée aux workflows détecteur, neutron et multi-device.',

    'home.eyebrow': 'Roadmap d’implémentation',
    'home.title.primary': 'Architecture auditée.',
    'home.title.secondary': 'L’implémentation commence.',
    'home.lead':
      'GGEMS avance désormais par tranches d’implémentation bornées et validées, plutôt que par une campagne de développement monolithique.',
    'home.status': 'Audits 01–11 terminés',
    'home.milestone': 'Première chaîne Gamma validée',
    'home.link': 'Explorer la roadmap',

    'hero.eyebrow': 'Roadmap',
    'hero.title.primary': 'De l’architecture auditée',
    'hero.title.secondary': 'à la physique validée.',
    'hero.lead':
      'La roadmap d’implémentation de GGEMS 2 transforme les audits d’architecture terminés en une séquence scientifique incrémentale. Chaque tranche doit compiler, être testée et validée avant que la couche suivante en dépende.',

    'status.architecture.label': 'Architecture',
    'status.architecture.value': 'Audits 01–11 terminés',
    'status.debug.label': 'Baseline Debug · Audit 11',
    'status.debug.value': '738 / 738',
    'status.release.label': 'Release ciblée · Audit 11',
    'status.release.value': '138 / 138',
    'status.stage.label': 'Étape actuelle',
    'status.stage.value': 'Implémentation incrémentale',

    'critical.eyebrow': 'Chemin physique critique',
    'critical.title.primary': 'Construire la première chaîne physique',
    'critical.title.secondary': 'sans repousser la validation.',
    'critical.lead':
      'Le premier jalon de production suit le chemin cohérent le plus court, des fondations numériques à une chaîne de transport Gamma sans champ avec scoring scientifique.',
    'critical.foundation': 'Fondations numériques',
    'critical.materials': 'Matériaux',
    'critical.cuts': 'Production Cuts',
    'critical.navigation': 'Navigation analytique',
    'critical.gamma': 'Processus Gamma',
    'critical.transport': 'Transport physique',
    'critical.scoring': 'Scoring',
    'critical.milestone': 'Première chaîne Gamma validée',
    'critical.milestone.note': 'Source → Materials/Cuts → Gamma → Navigation → Transport → Scoring',

    'sequence.eyebrow': 'Séquence d’implémentation',
    'sequence.title.primary': 'Vingt et une phases bornées.',
    'sequence.title.secondary': 'Un arbre toujours vert.',
    'sequence.lead':
      'La vue publique garde l’ordre d’implémentation visible sans présenter l’architecture planifiée comme une capacité déjà livrée.',


    'phase.label': 'Phase',
    'milestone.label': 'Jalon',
    'phase.00': 'Baseline opérationnelle d’implémentation',
    'phase.01': 'Fondations numériques minimales',
    'phase.02': 'Compilateur du cœur Materials',
    'phase.03': 'Production Cuts & couples',
    'phase.04': 'Navigation analytique',
    'phase.05': 'Processus Gamma',
    'phase.06': 'Transport physique',
    'phase.07': 'Scoring & photon TLE',
    'phase.08': 'Navigation voxel & mesh',
    'phase.09': 'Transport Électron / Positron',
    'phase.10': 'Champ magnétique',
    'phase.11': 'EM Proton & Alpha',
    'phase.12': 'Raw Hits',
    'phase.13': 'Digitizer',
    'phase.14': 'Exécution Acquisition',
    'phase.15': 'Detector Data Chain',
    'phase.16': 'Fondations Neutron HP/HPT',
    'phase.17': 'Adaptateurs I/O scientifiques',
    'phase.18': 'Intégration multi-device',
    'phase.19': 'Campagnes par modalité',
    'phase.20': 'Qualification des performances',

    'parallel.eyebrow': 'Chemins parallèles',
    'parallel.title.primary': 'Plusieurs branches.',
    'parallel.title.secondary': 'Un même contrat scientifique.',
    'parallel.lead':
      'Les travaux détecteur/données, neutron/matériaux et particules chargées peuvent avancer en parallèle avant de se rejoindre dans les validations modalité et multi-device.',
    'parallel.charged.title': 'Navigation & transport chargé',
    'parallel.charged.range': 'Phases 08–11',
    'parallel.charged.body': 'Navigation voxel et mesh, transport électron/positron, champ magnétique, puis EM Proton et Alpha.',
    'parallel.detector.title': 'Détecteur & acquisition',
    'parallel.detector.range': 'Phases 12–15',
    'parallel.detector.body': 'Raw Hits, Digitizer, exécution Acquisition et Detector Data Chain typée.',
    'parallel.neutron.title': 'Neutron & I/O scientifique',
    'parallel.neutron.range': 'Phases 16–17',
    'parallel.neutron.body': 'Matériaux isotopiques/thermiques, Neutron HP/HPT médical et adaptateurs I/O scientifiques de production.',
    'parallel.integration.title': 'Intégration & qualification',
    'parallel.integration.range': 'Phases 18–20',
    'parallel.integration.body': 'Correction multi-device, campagnes par modalité et qualification des performances après équivalence scientifique.',

    'principle.eyebrow': 'Principe de la roadmap',
    'principle.title.primary': 'Pas d’implémentation géante',
    'principle.title.secondary': 'avec validation repoussée à la fin.',
    'principle.body':
      'Chaque tranche bornée est implémentée selon l’architecture approuvée, testée de manière déterministe, validée scientifiquement et intégrée avant que l’optimisation soit considérée comme une preuve pertinente.',
    'principle.note':
      'La roadmap décrit une intention d’implémentation. Les déclarations publiques de prise en charge restent liées au code publié et à la validation terminée.',
  },
} as const;

export type RoadmapTranslationKey = keyof typeof roadmap.en;

export function useRoadmapTranslations(lang: Lang) {
  return (key: RoadmapTranslationKey): string => roadmap[lang][key];
}

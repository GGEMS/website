import type { Lang } from './config';

const homeRoadmap = {
  en: {
    'eyebrow': 'Project status',
    'title': 'Implementation roadmap',
    'lead':
      'The architecture and validation strategy are established. Implementation is now building the foundations of the first validated Gamma transport chain.',

    'status.done': 'Done',
    'status.active': 'In progress',
    'status.next': 'Next',
    'status.later': 'Later',

    'stage.done': 'Architecture & validation framework',
    'stage.active': 'Core physics foundations',
    'stage.next': 'First validated Gamma transport chain',
    'stage.later': 'Extended physics & detector capabilities',

    'link': 'Explore the full roadmap',
  },

  fr: {
    'eyebrow': 'État du projet',
    'title': 'Roadmap d’implémentation',
    'lead':
      'L’architecture et la stratégie de validation sont établies. L’implémentation construit maintenant les fondations de la première chaîne de transport Gamma validée.',

    'status.done': 'Terminé',
    'status.active': 'En cours',
    'status.next': 'Ensuite',
    'status.later': 'Plus tard',

    'stage.done': 'Architecture & cadre de validation',
    'stage.active': 'Fondations du cœur physique',
    'stage.next': 'Première chaîne de transport Gamma validée',
    'stage.later': 'Physique étendue & capacités détecteur',

    'link': 'Explorer la roadmap complète',
  },
} as const;

export type HomeRoadmapTranslationKey = keyof typeof homeRoadmap.en;

export function useHomeRoadmapTranslations(lang: Lang) {
  return (key: HomeRoadmapTranslationKey): string => homeRoadmap[lang][key];
}

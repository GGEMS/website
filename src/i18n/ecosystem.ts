import type { Lang } from './config';

const ecosystem = {
  en: {
    'ecosystem.eyebrow': 'Ecosystem',
    'ecosystem.title': 'Around GGEMS.',
    'ecosystem.lead':
      'Source code, scientific documentation, API reference and community each have a dedicated public home.',

    'ecosystem.source.label': 'Source code',
    'ecosystem.source.body':
      'Public source code, development history and releases.',

    'ecosystem.docs.label': 'Documentation',
    'ecosystem.docs.body':
      'Guides, tutorials, physics, validation and reproducible workflows.',

    'ecosystem.api.label': 'API reference',
    'ecosystem.api.body':
      'C++ API reference generated directly from the source code.',

    'ecosystem.community.label': 'Community',
    'ecosystem.community.body':
      'Project news, questions and technical discussions.',
  },

  fr: {
    'ecosystem.eyebrow': 'Écosystème',
    'ecosystem.title': 'Autour de GGEMS.',
    'ecosystem.lead':
      'Le code source, la documentation scientifique, la référence API et la communauté disposent chacun d’un espace public dédié.',

    'ecosystem.source.label': 'Code source',
    'ecosystem.source.body':
      'Code public, historique du développement et versions du projet.',

    'ecosystem.docs.label': 'Documentation',
    'ecosystem.docs.body':
      'Guides, tutoriels, physique, validation et workflows reproductibles.',

    'ecosystem.api.label': 'Référence API',
    'ecosystem.api.body':
      'Référence de l’API C++ générée directement depuis le code source.',

    'ecosystem.community.label': 'Communauté',
    'ecosystem.community.body':
      'Actualités du projet, questions et discussions techniques.',
  },
} as const;

export type EcosystemTranslationKey = keyof typeof ecosystem.en;

export function useEcosystemTranslations(lang: Lang) {
  return (key: EcosystemTranslationKey): string => ecosystem[lang][key];
}

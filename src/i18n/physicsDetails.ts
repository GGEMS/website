import type { Lang } from './config';

const physicsDetails = {
  en: {
    'particles.eyebrow': 'Particle families',
    'particles.title': 'Particles and process scope.',
    'particles.lead':
      'Each particle family is presented with its associated transport and interaction scope. Detailed implementation and validation status remain documented separately.',

    'particles.processes': 'Process scope',

    'sources.eyebrow': 'Sources & radionuclides',
    'sources.title.primary': 'From source sampling',
    'sources.title.secondary': 'to radionuclide emission.',
    'sources.lead':
      'GGEMS includes a dedicated source system for spatial, angular, energy and time sampling, together with radionuclide-driven emission workflows.',
    'sources.source.title': 'GGEMS Source',
    'sources.source.body':
      'Source generation is treated as a first-class scientific subsystem, with dedicated sampling and validation for geometry, direction, energy and time.',
    'sources.radionuclide.title': 'Radionuclide data',
    'sources.radionuclide.body':
      'Radionuclide emission definitions are built from LNHB and MIRDsoft reference data for reproducible nuclear-medicine simulation workflows.',
    'sources.references': 'Reference data',
  },

  fr: {
    'particles.eyebrow': 'Familles de particules',
    'particles.title': 'Particules et périmètre des processus.',
    'particles.lead':
      'Chaque famille de particules est présentée avec son périmètre de transport et d’interactions associé. Le détail de l’implémentation et de la validation reste documenté séparément.',

    'particles.processes': 'Périmètre des processus',

    'sources.eyebrow': 'Sources & radionucléides',
    'sources.title.primary': 'De l’échantillonnage des sources',
    'sources.title.secondary': 'à l’émission radionucléide.',
    'sources.lead':
      'GGEMS intègre un système de sources dédié à l’échantillonnage spatial, angulaire, énergétique et temporel, ainsi qu’aux workflows d’émission pilotés par radionucléides.',
    'sources.source.title': 'Source GGEMS',
    'sources.source.body':
      'La génération des sources est traitée comme un véritable sous-système scientifique, avec un échantillonnage et une validation dédiés à la géométrie, la direction, l’énergie et le temps.',
    'sources.radionuclide.title': 'Données radionucléides',
    'sources.radionuclide.body':
      'Les définitions d’émission radionucléide reposent sur des données de référence LNHB et MIRDsoft pour des workflows reproductibles en médecine nucléaire.',
    'sources.references': 'Données de référence',
  },
} as const;

export type PhysicsDetailsTranslationKey = keyof typeof physicsDetails.en;

export function usePhysicsDetailsTranslations(lang: Lang) {
  return (key: PhysicsDetailsTranslationKey): string => physicsDetails[lang][key];
}

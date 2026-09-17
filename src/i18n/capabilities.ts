import type { Lang } from './config';

const capabilities = {
  en: {
    'portable.eyebrow': 'Compute',
    'portable.title': 'Portable Compute',
    'portable.lead':
      'GGEMS uses OpenCL for heterogeneous compute across Windows, Linux and macOS, with Intel, AMD and NVIDIA hardware.',
    'portable.layer': 'Compute layer',
    'portable.os': 'Operating systems',
    'portable.hardware': 'Hardware vendors',

    'visual.eyebrow': 'Visualization',
    'visual.title': 'Visualization & Debugging',
    'visual.lead':
      'A Vulkan + Dear ImGui interface helps inspect geometry, follow particle tracks and visualize interactions during simulation and debugging.',
    'visual.stack': 'Vulkan · Dear ImGui',
    'visual.geometry': 'Geometry',
    'visual.tracks': 'Particle tracks',
    'visual.interactions': 'Interactions',
  },

  fr: {
    'portable.eyebrow': 'Calcul',
    'portable.title': 'Calcul portable',
    'portable.lead':
      'GGEMS s’appuie sur OpenCL pour le calcul hétérogène sous Windows, Linux et macOS, sur des matériels Intel, AMD et NVIDIA.',
    'portable.layer': 'Couche de calcul',
    'portable.os': 'Systèmes d’exploitation',
    'portable.hardware': 'Constructeurs',

    'visual.eyebrow': 'Visualisation',
    'visual.title': 'Visualisation & débogage',
    'visual.lead':
      'Une interface Vulkan + Dear ImGui permet d’inspecter la géométrie, de suivre les trajectoires des particules et de visualiser les interactions pendant la simulation et le débogage.',
    'visual.stack': 'Vulkan · Dear ImGui',
    'visual.geometry': 'Géométrie',
    'visual.tracks': 'Trajectoires',
    'visual.interactions': 'Interactions',
  },
} as const;

export type CapabilityTranslationKey = keyof typeof capabilities.en;

export function useCapabilityTranslations(lang: Lang) {
  return (key: CapabilityTranslationKey): string => capabilities[lang][key];
}

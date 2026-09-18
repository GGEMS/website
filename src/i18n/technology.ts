import type { Lang } from './config';

const technology = {
  en: {
    'core.eyebrow': 'Software core',
    'core.title.primary': 'Modern C++ core.',
    'core.title.secondary': 'Python interface.',
    'core.lead':
      'GGEMS keeps simulation and performance-critical code in a native modern C++ core while exposing Python interoperability for user-facing setup and scientific workflows.',
    'core.native.title': 'Modern C++',
    'core.native.body':
      'A modern native core designed to build across MSVC, Intel, GNU and Clang toolchains.',
    'core.native.toolchains': 'Toolchains',
    'core.python.title': 'Python interoperability',
    'core.python.body':
      'Python bindings provide a high-level entry point for simulation setup, orchestration and scientific workflows while the native core remains in C++.',
    'core.python.bridge': 'pybind11',
  },

  fr: {
    'core.eyebrow': 'Cœur logiciel',
    'core.title.primary': 'Cœur C++ moderne.',
    'core.title.secondary': 'Interface Python.',
    'core.lead':
      'GGEMS conserve la simulation et le code critique pour les performances dans un cœur C++ moderne natif, tout en proposant une interopérabilité Python pour la configuration et les workflows scientifiques.',
    'core.native.title': 'C++ moderne',
    'core.native.body':
      'Un cœur natif moderne conçu pour être compilé avec les toolchains MSVC, Intel, GNU et Clang.',
    'core.native.toolchains': 'Toolchains',
    'core.python.title': 'Interopérabilité Python',
    'core.python.body':
      'Les bindings Python fournissent une interface haut niveau pour configurer et orchestrer les simulations et les workflows scientifiques, tandis que le cœur natif reste en C++.',
    'core.python.bridge': 'pybind11',
  },
} as const;

export type TechnologyTranslationKey = keyof typeof technology.en;

export function useTechnologyTranslations(lang: Lang) {
  return (key: TechnologyTranslationKey): string => technology[lang][key];
}

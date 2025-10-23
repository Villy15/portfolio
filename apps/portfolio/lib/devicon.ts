const deviconMap: Record<string, string> = {
  javascript: 'javascript',
  typescript: 'typescript',
  python: 'python',
  dart: 'dart',
  java: 'java',
  mysql: 'mysql',
  postgres: 'postgresql',
  postgresql: 'postgresql',
  bash: 'bash',
  html: 'html5',
  css: 'css3',
  react: 'react',
  nextjs: 'nextjs',
  nestjs: 'nestjs',
  express: 'express',
  fastapi: 'fastapi',
  flutter: 'flutter',
  nodejs: 'nodejs',
  zustand: 'redux',
  'react query': 'react',
  'tailwind css': 'tailwindcss',
  jest: 'jest',
  playwright: 'playwright',
  graphql: 'graphql',
  git: 'git',
  docker: 'docker',
  aws: 'amazonwebservices',
  cloudflare: 'cloudflare',
  firebase: 'firebase',
  supabase: 'supabase',
  contentful: 'contentful',
  nx: 'nx',
  turborepo: 'turborepo',
};

export function getDeviconUrl(label: string): string | null {
  const normalized = label
    .toLowerCase()
    .replace(/\(.+\)/, '')
    .replace(/[.#]/g, '')
    .trim()
    .replace(/\s+/g, ' ');

  // get first token safely
  const first = normalized.split(' ')[0] ?? '';

  // safely look up in deviconMap
  const iconKey = deviconMap[normalized] || deviconMap[first];
  if (!iconKey) return null;

  const base = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconKey}/${iconKey}`;

  if (iconKey === 'amazonwebservices') return `${base}-plain-wordmark.svg`;
  if (iconKey === 'graphql' || iconKey === 'jest') return `${base}-plain.svg`;

  return `${base}-original.svg`;
}

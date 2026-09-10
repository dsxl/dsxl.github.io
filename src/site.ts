/**
 * Single source of truth for site content.
 * Everything a future-you needs to update lives in this file.
 */

export const site = {
  title: 'Dimitriy Shames',
  tagline: 'Business systems architecture, Salesforce, and automation.',
  description:
    'Dimitriy Shames — business systems and Salesforce architecture, ' +
    'platform implementation, and automation for revenue teams.',
  url: 'https://dsxl.github.io',
  location: 'South Florida', // TODO: confirm — old site said Boca Raton, FL
  linkedin: 'https://www.linkedin.com/in/dimitriyshames/',
  github: 'https://github.com/dsxl',
};

export const toolbox: string[] = [
  'Salesforce Sales Cloud',
  'Salesforce Service Cloud',
  'Field Service',
  'Marketing Cloud Account Engagement',
  'Flow & declarative automation',
  'Data modeling',
  'Systems integration',
  'Make',
  'Git & GitHub',
  'JavaScript',
  'Claude Code',
];

export type Role = {
  title: string;
  org: string;
  when: string;
  summary: string;
  points?: string[];
};

/** Current and recent work, most recent first. */
export const roles: Role[] = [
  {
    title: 'Business Systems Architect',
    org: 'Furnished Quarters',
    when: '2020 — Present',
    summary:
      'Own the business systems that revenue and service teams run on — from ' +
      'platform architecture and data modeling through implementation, ' +
      'integration, and the automation that connects them.',
    points: [
      'Led implementation of Marketing Cloud Account Engagement (MCAE), ' +
        'covering data model design, campaign operations, and lead lifecycle.',
      'Delivered a Salesforce Field Service rollout — scheduling, mobile ' +
        'workflows, and the process design behind them.',
      'Scope grew from Salesforce administration into systems architecture; ' +
        'the team is being retitled from Salesforce Administrators to ' +
        'Business Systems Specialists and Architects to match.',
      'Increasingly building rather than configuring: custom integrations, ' +
        'automation in Make, and AI-assisted development with Claude Code.',
    ],
  },
];

/** Earlier work, condensed to one line each. */
export const priorRoles: { title: string; org: string; when: string }[] = [
  { title: 'Solutions Engineer',   org: 'MotionPoint',              when: '2018 — 2020' },
  { title: 'Graphic Designer',     org: 'Mason Jar Cookie Company', when: '2017 — 2020' },
  { title: 'Media & Design',       org: 'Florida Food & Farm',      when: '2015 — 2018' },
  { title: 'Media & Design',       org: 'Culinary Truck',           when: '2015 — 2017' },
];

export const education: { title: string; org: string; when: string }[] = [
  { title: 'B.S., Psychology', org: 'Florida Atlantic University', when: '2010 — 2015' },
];

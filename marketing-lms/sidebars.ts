import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tracks: [
    'tracks/beginner-week1',
    'tracks/beginner-week2',
    'tracks/intermediate-week3',
    'tracks/intermediate-week4',
    'tracks/advanced-growth-week5',
    'tracks/capstone-week6',
  ],
  modules: [
    {
      type: 'category',
      label: 'Foundations',
      items: ['modules/foundations/intro-to-marketing'],
    },
    {
      type: 'category',
      label: 'Content & SEO',
      items: ['modules/content-seo/seo-basics'],
    },
    {
      type: 'category',
      label: 'Social',
      items: ['modules/social/social-strategy'],
    },
    {
      type: 'category',
      label: 'Email & CRM',
      items: ['modules/email-crm/crm-fundamentals'],
    },
    {
      type: 'category',
      label: 'Paid Ads',
      items: ['modules/paid-ads/paid-media-101'],
    },
    {
      type: 'category',
      label: 'Analytics',
      items: ['modules/analytics/marketing-analytics-basics'],
    },
  ],
  quizzes: [
    'quizzes/quiz-templates',
    'quizzes/week1-quiz',
  ],
  resources: [
    'resources/videos',
    'resources/tutorials',
    'resources/templates',
  ],
  admin: [
    'admin/ADMIN_Update_Log',
    'admin/Update_Process',
  ],
};

export default sidebars;

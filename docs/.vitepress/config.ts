import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Firebase Rules Learning Assistant',
  description:
    'An interactive learning tool designed to help anyone understand, learn, and experiment with Firebase Rules',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/guide/' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Firebase Project Settings', link: '/guide/setup' },
          { text: 'Updating Firebase Rules', link: '/guide/rules-update' },
          { text: 'How to test your rules?', link: '/guide/testing' },
        ],
      },
      {
        text: 'Examples & Guide',
        items: [
          { text: 'Basic Security', link: '/examples/basic-security' },
          { text: 'User Management', link: '/examples/user-management' },
          { text: 'Data Validation', link: '/examples/data-validation' },
          { text: 'Advanced Rules', link: '/examples/advanced-rules' },
        ],
      },
      {
        text: 'Acknowledgement',
        link: '/acknowledgement',
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/David-Pena',
      },
      {
        icon: 'bluesky',
        link: 'https://bsky.app/profile/davidpena.dev',
      },
      {
        icon: 'x',
        link: 'https://x.com/Unans___',
      },
    ],
    footer: {
      copyright: 'Created by Unans with Bolt ⚡',
    },
  },
});

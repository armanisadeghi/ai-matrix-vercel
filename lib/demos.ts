import * as url from 'node:url';

export type Item = {
  name: string;
  slug: string;
  icon?: string; // URL for font awesome icon
  description?: string;
  developer?: string;
};

export const demos: { name: string; description?: string; items: Item[] }[] = [
  {
    name: 'Intelligence',
    description: 'AI Tools for regular users.',
    items: [
      {
        name: 'AI Chat',
        slug: 'ai-chat',
        icon: '',
        description:
          'A chatbot that is significantly better than ChatGPT or anything else on the market.',
        developer: '',
      },
      {
        name: 'Custom Bots',
        slug: 'custom-bots',
        icon: '',
        description: 'Specialized Chat Agents designed for specific tasks.',
        developer: '',
      },
      {
        name: 'Bot Builder',
        slug: 'bot-builder',
        icon: '',
        description:
          "A place where normal people can quickly and easily make their own bots. A 'light' version of the playground.",
        developer: '',
      },
    ],
  },
  {
    name: 'AI Apps',
    description:
      "AI Apps with a specific purpose built by us, and by 'agencies' for users to use. Some free and some paid.",
    items: [
      {
        name: 'Human Resources',
        slug: 'hr',
        icon: '',
        description:
          'A series of apps related to Human Resources, hiring, reviews, etc.',
        developer: '',
      },
      {
        name: 'Legal',
        slug: 'legal',
        icon: '',
        description: 'A series of apps for lawyers and legal professionals.',
        developer: '',
      },
      {
        name: 'Medical',
        slug: 'medical',
        icon: '',
        description: 'A series of apps for doctors and medical professionals.',
        developer: '',
      },
      {
        name: 'Marketing',
        slug: 'marketing',
        icon: '',
        description: 'General marketing and social media apps',
        developer: '',
      },
      {
        name: 'SEO',
        slug: 'seo',
        icon: '',
        description: 'Specific to Search Engine Optimization',
        developer: '',
      },
      {
        name: 'Coding',
        slug: 'coding',
        icon: '',
        description: 'Apps designed for developers',
        developer: '',
      },
      {
        name: 'Kids',
        slug: 'kids',
        icon: '',
        description: 'Apps designed specifically for kids',
        developer: '',
      },
      {
        name: 'School',
        slug: 'school',
        icon: '',
        description:
          'Apps related to school and education, from middle school to college',
        developer: '',
      },
      {
        name: 'Fun',
        slug: 'fun',
        icon: '',
        description: 'Games and Apps that are just for fun.',
        developer: '',
      },
      {
        name: 'Image',
        slug: 'image',
        icon: '',
        description: 'Apps specific to image processing and manipulation.',
        developer: '',
      },
      {
        name: 'Video',
        slug: 'video',
        icon: 'Apps specific to video processing and manipulation.',
        description: '',
        developer: '',
      },
      {
        name: 'Others',
        slug: 'others',
        icon: "All other apps that don't belong in a current category.",
        description: '',
        developer: '',
      },
    ],
  },
  {
    name: 'Productivity',
    items: [
      {
        name: 'Messenger',
        slug: 'messenger',
        icon: '',
        description:
          'An intelligent AI-Messenger that integrates with common messaging platforms.',
        developer: '',
      },
      {
        name: 'Email',
        slug: 'email',
        icon: '',
        description: 'Your email, just smarter.',
        developer: '',
      },
      {
        name: 'Task Manager',
        slug: 'task-manager',
        icon: '',
        description:
          'An intelligent task manager that integrates with common task management platforms.',
        developer: '',
      },
      {
        name: 'Calendar',
        slug: 'calendar',
        icon: '',
        description:
          'An intelligent calendar that integrates with common calendar platforms.',
        developer: '',
      },
      {
        name: 'Meetings',
        slug: 'meetings',
        icon: '',
        description: 'Online meeting tools and integrations.',
        developer: '',
      },
      {
        name: 'Presentations',
        slug: 'presentations',
        icon: '',
        description: 'Tools for creating and giving presentations.',
        developer: '',
      },
    ],
  },
  {
    name: 'Tools',
    items: [
      {
        name: 'Audio',
        slug: 'audio',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Image',
        slug: 'image',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Video',
        slug: 'video',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'PDF',
        slug: 'pdf',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Text',
        slug: 'text',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Web',
        slug: 'web',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Writing',
        slug: 'writing',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Marketing',
        slug: 'marketing',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'SEO',
        slug: 'seo',
        icon: '',
        description: '',
        developer: '',
      },
    ],
  },
  {
    name: 'Integrations',
    items: [
      {
        name: 'Shopify',
        slug: 'shopify',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Wordpress',
        slug: 'wordpress',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Zappier',
        slug: 'zappier',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Google',
        slug: 'google',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Microsoft',
        slug: 'microsoft',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'GitHub',
        slug: 'github',
        icon: '',
        description: '',
        developer: '',
      },
    ],
  },
  {
    name: 'Matrix Engine',
    items: [
      {
        name: 'Prompt Playground',
        slug: 'prompt-playground',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Agents',
        slug: 'agents',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Super Agents',
        slug: 'super-agents',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Recipes',
        slug: 'recipes',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Tools',
        slug: 'tools',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Knowledge',
        slug: 'knowledge',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'System Brokers',
        slug: 'system-brokers',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Custom Brokers',
        slug: 'custom-brokers',
        icon: '',
        description: '',
        developer: '',
      },
    ],
  },
  {
    name: 'Automation Matrix',
    items: [
      {
        name: 'Actions',
        slug: 'actions',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Tasks',
        slug: 'tasks',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Clusters',
        slug: 'clusters',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Hyperclusters',
        slug: 'hyperclusters',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Automation',
        slug: 'automation',
        icon: '',
        description: '',
        developer: '',
      },
    ],
  },
  {
    name: 'Matrix Apps',
    items: [
      {
        name: 'App Builder',
        slug: 'app-builder',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'App Tester',
        slug: 'app-tester',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'App Components',
        slug: 'app-components',
        icon: '',
        description: '',
        developer: '',
      },
    ],
  },
  {
    name: 'Agency Manager',
    items: [
      {
        name: 'Manage Clients',
        slug: 'manage-clients',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Manage Users',
        slug: 'manage-users',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Agency Settings',
        slug: 'agency-settings',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Secrets Manager',
        slug: 'secrets-manager',
        icon: '',
        description: '',
        developer: '',
      },
    ],
  },
  {
    name: 'System Admin',
    items: [
      {
        name: 'Agencies',
        slug: 'agencies',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Clients',
        slug: 'clients',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Users',
        slug: 'users',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Configuration',
        slug: 'configuration',
        icon: '',
        description: '',
        developer: '',
      },
    ],
  },
  {
    name: 'Super Admin',
    items: [
      {
        name: 'Function Manager',
        slug: 'function-manager',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'System Apps',
        slug: 'system-apps',
        icon: '',
        description: '',
        developer: '',
      },
      {
        name: 'Access Management',
        slug: 'access-management',
        icon: '',
        description: '',
        developer: '',
      },
    ],
  },
];

/*
export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        slug: 'layouts',
        description: 'Create UI that is shared across routes',
      },
      {
        name: 'Grouped Layouts',
        slug: 'route-groups',
        description: 'Organize routes without affecting URL paths',
      },
      {
        name: 'Parallel Routes',
        slug: 'parallel-routes',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'Loading',
        slug: 'loading',
        description:
          'Create meaningful Loading UI for specific parts of an app',
      },
      {
        name: 'Error',
        slug: 'error-handling',
        description: 'Create Error UI for specific parts of an app',
      },
      {
        name: 'Not Found',
        slug: 'not-found',
        description: 'Create Not Found UI for specific parts of an app',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Streaming data fetching from the server with React Suspense',
      },
      {
        name: 'Static Data',
        slug: 'ssg',
        description: 'Generate static pages',
      },
      {
        name: 'Dynamic Data',
        slug: 'ssr',
        description: 'Server-render pages',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: 'Get the best of both worlds between static & dynamic',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Client Context',
        slug: 'context',
        description:
          'Pass context between Client Components that cross Server/Client Component boundary',
      },
      {
        name: 'Chat App',
        slug: 'chat',
        description:
          'Create a real-time chat app with Server Components and Client Components',
      },
    ],
  },
  {
    name: 'Misc',
    items: [
      {
        name: 'Patterns',
        slug: 'patterns',
        description: 'A collection of useful App Router patterns',
      },
      {
        name: 'Client Component Hooks',
        slug: 'hooks',
        description: 'Preview the routing hooks available in Client Components',
      },
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styling',
        description: 'Preview the supported styling solutions',
      },
    ],
  },
  {
    name: '--> Under Development',
    items: [
      {
        name: 'Chat App',
        slug: 'chat',
        description: 'A sample starter chat page to test socket.io',
        developer: 'Natalie',
      },
      {
        name: 'Armani Tests',
        slug: 'armani',
        description: 'A little space for Armani to play and learn.',
        developer: 'Armani',
      },
    ],
  },
];

 */

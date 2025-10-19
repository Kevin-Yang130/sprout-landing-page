// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/#guide', key: 'how_sprout', label: 'How Sprout Works' },
  { href: '/#features', key: 'features', label: 'features' },
  { href: '/#get_app', key: 'Download', label: 'Download' },
  { href: '/#footer', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Add Expense/Income in Seconds',
    icon: '/clock.svg',
    variant: 'green',
    description:
      'Tap “Add Transaction", enter an amount, choose a category, and you’re done. Saved in under 5 seconds.',
  },
  {
    title: 'Monthly Tracking, at a Glance',
    icon: '/up.svg',
    variant: 'green',
    description:
      "See totals the income, expenses, and net of each month and how this month compares to last, all in one clean view.",
  },
  {
    title: 'Visualize Your Spending',
    icon: '/graph2.svg',
    variant: 'graph',
    description:
      'Beautiful charts break down where your money goes by category, merchant, and time so patterns pop instantly.',
  },
  {
    title: 'Smart Budgets & Gentle Nudges',
    icon: '/green.svg',
    variant: 'orange',
    description:
      'Set monthly limits and goals; get helpful reminders and progress updates to keep you on track without the stress.',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      { label: "About Sprout", href: "/#hero" },
      { label: "Contact Us", href: "/#footer" },
    ],
  },
  {
    title: "Other Projects",
    links: [
      { label: "Portfolio", href: "https://kevinyangli.com/" },
      { label: "Github", href: "https://github.com/Kevin-Yang130" },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Email', value: 'sprout@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
  ],
};

export type DemoChannel = {
  id: string;
  name: string;
  description: string;
  category: string;
  language: string;
};

export type DemoNews = {
  id: string;
  headline: string;
  description: string;
  channelId: string;
  category: string;
  language: string;
  source: string;
  minutesAgo: number;
  likes?: number;
  demoColor: string;
};

export const CHANNELS: DemoChannel[] = [
  { id: 'morning-digest', name: 'Morning Digest ☀️', description: 'Top stories to start your day', category: 'General', language: 'en' },
  { id: 'sports-flash', name: 'Sports Flash 🏏', description: 'Cricket, football, Olympics', category: 'Sports', language: 'hi' },
  { id: 'finance-60s', name: 'Finance in 60s 💰', description: 'Markets, RBI, startups', category: 'Finance', language: 'en' },
  { id: 'tech-today', name: 'Tech Today 💻', description: 'AI, gadgets, apps', category: 'Technology', language: 'en' },
  { id: 'bollywood-buzz', name: 'Bollywood Buzz 🎬', description: 'Movies, celebrities, OTT', category: 'Entertainment', language: 'hi' },
  { id: 'political-pulse', name: 'Political Pulse 🏛️', description: 'India politics, elections', category: 'Politics', language: 'hi' },
  { id: 'startup-stories', name: 'Startup Stories 🚀', description: 'Indian startup ecosystem', category: 'Startups', language: 'en' },
  { id: 'world-minute', name: 'World in a Minute 🌍', description: 'Global news highlights', category: 'World', language: 'en' },
];

export const NEWS: DemoNews[] = [
  { id: 'n1', headline: 'India beats Australia in final ODI to win series 3-2', description: 'Men in blue dominate the chase in a thrilling decider.', channelId: 'sports-flash', category: 'Sports', language: 'en', source: 'Demo Sports Desk', minutesAgo: 32, likes: 1820, demoColor: '#205072' },
  { id: 'n2', headline: 'Sensex hits mock high of 85,000 points in demo market watch', description: 'Markets rally in our sample data set for finance reels.', channelId: 'finance-60s', category: 'Finance', language: 'en', source: 'Demo Finance Wire', minutesAgo: 54, likes: 1380, demoColor: '#614124' },
  { id: 'n3', headline: 'Bengaluru startup raises mock Series B round', description: 'Sample startup story used for UI development only.', channelId: 'startup-stories', category: 'Technology', language: 'en', source: 'Demo Startup Beat', minutesAgo: 78, likes: 920, demoColor: '#3A6351' },
  { id: 'n4', headline: 'New film teaser trends across social apps', description: 'Entertainment clip card with static placeholder content.', channelId: 'bollywood-buzz', category: 'Entertainment', language: 'hi', source: 'Demo Cine Buzz', minutesAgo: 96, likes: 2020, demoColor: '#6B2D5C' },
  { id: 'n5', headline: 'AI tutoring app launches in 12 mock cities', description: 'Technology-focused sample reel for explore and home lists.', channelId: 'tech-today', category: 'Technology', language: 'en', source: 'Demo Tech Now', minutesAgo: 122, likes: 770, demoColor: '#1F4E5F' },
  { id: 'n6', headline: 'Election tracker: sample constituency update', description: 'Political pulse card shown only with demo fixtures.', channelId: 'political-pulse', category: 'Politics', language: 'hi', source: 'Demo Poll Watch', minutesAgo: 145, likes: 640, demoColor: '#5A3E2B' },
  { id: 'n7', headline: 'Global summit announces climate collaboration goals', description: 'World reel fixture generated for design review flows.', channelId: 'world-minute', category: 'World', language: 'en', source: 'Demo World Feed', minutesAgo: 166, likes: 860, demoColor: '#2F4858' },
  { id: 'n8', headline: 'Morning digest: top 5 headlines in one minute', description: 'General purpose reel entry for first-launch experience.', channelId: 'morning-digest', category: 'General', language: 'en', source: 'Demo Morning Team', minutesAgo: 12, likes: 1510, demoColor: '#4A4063' },
];

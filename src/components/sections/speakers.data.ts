import type { StaticImageData } from 'next/image';

// Import speaker photos here when available
import speaker1 from '@/assets/speakers/speaker1.png';
import speaker2 from '@/assets/speakers/speaker2.png';
// import moderator1 from '@/assets/speakers/moderator1.png';

export type Speaker = {
  id: number;
  name: string;
  title?: string; // Professional title or role
  organization?: string; // Company / institution
  topic?: string; // Talk topic
  image?: StaticImageData; // Optional headshot
  comingSoon?: boolean; // Flag to show placeholder
  linkedin?: string; // LinkedIn profile URL
  youtube?: string; // YouTube channel URL
  isModerator?: boolean; // Flag to indicate moderator role
};

export const SPEAKERS: Speaker[] = [
  {
    id: 1,
    name: 'Ilham Subki Wijaya',
    comingSoon: false,
    image: speaker1,
    organization: 'Digital Creator Gaptech.id',
    linkedin: 'https://www.linkedin.com/in/ilhamsubki',
    youtube: 'https://www.youtube.com/gaptechid',
  },
  {
    id: 2,
    name: 'Coming Soon Moderator',
    comingSoon: true,
    title: 'Event Moderator',
    isModerator: true,
  },
  {
    id: 3,
    name: 'Marchel Andrian Shevchenko',
    comingSoon: false,
    image: speaker2,
    title: 'Founder Data Sorcerers',
    linkedin: 'https://www.linkedin.com/in/marchelshevchenko',
  },
];

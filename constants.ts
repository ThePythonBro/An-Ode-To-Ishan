import { Testimonial, MemoryImage, StatItem } from './types';
import { Coffee, Bug, Lightbulb, Heart } from 'lucide-react';

export const APP_TITLE = "Thank You, Sarah";
export const APP_SUBTITLE = "For the guidance, the patience, and the code reviews.";

export const MEMORIES: MemoryImage[] = [
  { id: '1', url: 'https://picsum.photos/400/300?random=1', caption: 'First Team Outing' },
  { id: '2', url: 'https://picsum.photos/300/400?random=2', caption: 'Hackathon 2023' },
  { id: '3', url: 'https://picsum.photos/400/400?random=3', caption: 'The "It Works" Moment' },
  { id: '4', url: 'https://picsum.photos/350/300?random=4', caption: 'Coffee Breaks' },
  { id: '5', url: 'https://picsum.photos/400/350?random=5', caption: 'Whiteboard Sessions' },
  { id: '6', url: 'https://picsum.photos/300/300?random=6', caption: 'Holiday Party' },
  { id: '7', url: 'https://picsum.photos/450/300?random=7', caption: 'Debugging Late Night' },
  { id: '8', url: 'https://picsum.photos/300/450?random=8', caption: 'Launch Day' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "Alex Chen",
    role: "Frontend Engineer",
    message: "You taught me that 'it works on my machine' is not a valid defense. Thank you for making me a better engineer and a better thinker.",
    rating: 5,
    tags: ["Mentorship", "Patience"]
  },
  {
    id: 't2',
    name: "Jordan Smith",
    role: "Product Manager",
    message: "Rarely do you meet an engineer who cares about the user as much as the code. Going to miss your insights in our sprint plannings.",
    rating: 5,
    tags: ["Product Sense", "Leadership"]
  },
  {
    id: 't3',
    name: "Priya Patel",
    role: "Junior Dev",
    message: "I was terrified to merge my first PR, but you sat with me for an hour explaining every line. I'll never forget that kindness.",
    rating: 5,
    tags: ["Kindness", "Teaching"]
  },
  {
    id: 't4',
    name: "Sam Wilson",
    role: "Backend Lead",
    message: "Your code reviews were brutal but necessary. Thanks for keeping our standards high and our latency low.",
    rating: 5,
    tags: ["Code Quality", "Standards"]
  },
  {
    id: 't5',
    name: "Casey Jones",
    role: "Designer",
    message: "Finally, a dev who respects pixels! Thanks for pushing for that extra polish.",
    rating: 5,
    tags: ["Design Eye", "Collaboration"]
  }
];

export const STATS: StatItem[] = [
  { label: "Years Guided", value: "4+", icon: Lightbulb, color: "text-yellow-400" },
  { label: "Bugs Squashed", value: "1,240", icon: Bug, color: "text-red-400" },
  { label: "Coffees Consumed", value: "∞", icon: Coffee, color: "text-amber-700" },
  { label: "Lives Touched", value: "All of us", icon: Heart, color: "text-pink-500" },
];

export const FAREWELL_TITLE = "A Parting Wish";
export const FAREWELL_BODY = `
As you move on to this next exciting chapter, we want you to know just how much of a void you're leaving behind—not just in the codebase, but in the daily life of the team.

You've been a mentor, a shield against scope creep, a debugger of code and life problems, and a true friend. While we are sad to see you go, we are incredibly proud to have worked alongside you.

May your builds always pass, your deployments never fail, and your new team realize just how lucky they are.
`;
import { Testimonial, MemoryImage, StatItem } from './types';
import { Coffee, Bug, Lightbulb, Heart, Microscope } from 'lucide-react';

export const APP_TITLE = "Thank You, Ishan!";
export const APP_SUBTITLE = "For the guidance, the mentorship, and the unforgettable memories!.";

export const MEMORIES: MemoryImage[] = [
  // { id: '1', url: 'https://picsum.photos/400/300?random=1', caption: 'First Team Outing' },
  { id: '1', url: './memes/sbi.jpg', caption: 'From gossips, to friendly roasts, these lunches were truly something else!' },
  { id: '2', url: './memes/satya.jpg', caption: 'Bichara 𝚂̶𝚊̶𝚝̶𝚢̶𝚊̶ Surya' },
  { id: '3', url: './memes/malkist-lovers.jpg', caption: 'Ab Malkist kon layega 😭' },
  { id: '4', url: './memes/bills-go-brr.jpg', caption: 'Hehe' },
  { id: '5', url: './memes/when-i-see-you-again.jpg', caption: 'Hey Bixby, play "See you again" by Wiz Khalifa' },
  { id: '6', url: './memes/the-struggle-is-real.jpg', caption: 'The struggle was real 🤣' },
  { id: '7', url: './memes/seriously.jpg', caption: 'I though of adding a count of how many times this was said, by it overflowed 🫠' },
  { id: '8', url: './memes/mcp.jpg', caption: 'You know what we are talking about here 👀' },
  { id: '9', url: './memes/1.png', caption: 'Manifesting GPUs' },
  { id: '10', url: './memes/internet-woes.jpg', caption: 'Manoj be like: "Kiske saath fas gaya"' },
  { id: '11', url: './memes/chalaak.jpg', caption: 'Thank you for sharing this "Chalaak" hack with us 😂' },
  { id: '12', url: './memes/spider-kids.jpeg', caption: 'These kids will surely miss you 🥲' },
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
  { label: "Papers published", value: "3+", icon: Microscope, color: "text-yellow-400" },
  { label: "Brainstorming sessions", value: "100+", icon: Lightbulb, color: "text-red-400" },
  { label: "Teas Consumed", value: "∞", icon: Coffee, color: "text-amber-700" },
  { label: "Lives Touched", value: "All of us", icon: Heart, color: "text-pink-500" },
];

export const FAREWELL_TITLE = "A Parting Wish";
export const FAREWELL_BODY = `
As you move on to this next exciting chapter, we want you to know just how much of a void you're leaving behind—not just in the codebase, but in the daily life of the team.

You've been a mentor, a shield against scope creep, a debugger of code and life problems, and a true friend. While we are sad to see you go, we are incredibly proud to have worked alongside you.

May your builds always pass, your deployments never fail, and your new team realize just how lucky they are.
`;
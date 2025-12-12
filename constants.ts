import { Testimonial, MemoryImage, StatItem } from './types';
import { Coffee, Bug, Lightbulb, Heart, Microscope } from 'lucide-react';

export const APP_TITLE = "Thank You, Ishan!";
export const APP_SUBTITLE = "For the guidance, the mentorship, and the unforgettable memories!.";

export const MEMORIES: MemoryImage[] = [
  // { id: '1', url: 'https://picsum.photos/400/300?random=1', caption: 'First Team Outing' },
  { id: '1', url: './memes/sbi.jpg', caption: 'From gossips, to friendly roasts, these lunches were truly something else!' },
  { id: '2', url: './memes/satya.jpg', caption: 'Bichara Surya' },
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
    name: "Ankur Jain",
    role: "AV Team",
    message: "Ishan is a rare blend of generosity, creativity, humor, and ambition!",
    rating: 5,
    tags: ["Curiousity", "Ambition"]
  },
  {
    id: 't2',
    name: "Chandra Prabhaker",
    role: "Recommender Systems Team",
    message: "Before you joined the team, I was often questioning my direction in my professional life. After attending just a few of your lectures, I gained a clear understanding of how I should proceed, to truly enhance my learning. Our friendship took this progress to a new level. For the last four or five years, I hadn't read a single professional paper-but now, thanks to your influence, I read at least one daily. That's the immense impact you've had on me. \nHonestly, this is the first time I'm genuinely sad about someone leaving the company. The depth of the friendship we've built in just one year makes this goodbye particularly difficult. Farewell Ishan!",
    rating: 5,
    tags: ["Friendship", "Inspiration"]
  },
  {
    id: 't3',
    name: "Vikas Kapur",
    role: "DevBOT Team",
    message: "It's been amazing working with you! From the DevBOT project hustle to our discussions, celebrations, lunches, and hangouts, so many great memories. Wishing you all the very best ahead, and don't forget us!",
    rating: 5,
    tags: ["Collaboration", "Mentorship"]
  },
  {
    id: 't4',
    name: "Sachin Kuntal",
    role: "Computer Vision Team",
    message: "All the best Ishan. Learned a lot from you. Thank you for everything :)",
    rating: 5,
    tags: ["Guidance", "Knowledge"]
  },
  {
    id: 't5',
    name: "Jigyasa Gupta",
    role: "Computer Vision Team",
    message: "You've truly been an inspiration. You showed us what determination and questioning the system can achieve, even when things weren't always in your favour. I'll always look up to you as a mentor. Thanks for being so patient while we worked on the paper and made all those rookie mistakes 😅. Your structured way of thinking and calm approach really shaped how we tackle problems. Wishing you all the best and great success in whatever you do next. You'll be missed!",
    rating: 5,
    tags: ["Mentorship", "Inspiration"]
  },
  {
    id: 't6',
    name: "Atul Shukla",
    role: "ISWT",
    message: "I really enjoyed learning and having fun with you. Our T-time moments will always be special to me. Wishing you all the best in your future assignments.",
    rating: 5,
    tags: ["Friendship", "Learning"]
  }
];

export const STATS: StatItem[] = [
  { label: "Papers published", value: "6+", icon: Microscope, color: "text-yellow-400" },
  { label: "Brainstorming sessions", value: "100+", icon: Lightbulb, color: "text-red-400" },
  { label: "Teas Consumed", value: "∞", icon: Coffee, color: "text-amber-700" },
  { label: "Lives Touched", value: "All of our", icon: Heart, color: "text-pink-500" },
];

export const FAREWELL_TITLE = "A Parting Wish";
export const FAREWELL_BODY = `
As you move on to this next exciting chapter, we want to shed light on the legacy you're leaving behind, not just in the codebase :), but in all of our lives.

You've been a mentor, an expert, a teacher, but most importantly a true friend. Every once a while in life, you come across a person who exudes an aura of curiosity so intense, that those around naturally get inspired to do something greater. Thank you for being that person!

While we are sad to see you go, we are incredibly proud to have had a chance to collaborate with you.

May all your training runs converge, all your p-values be significant and all your CUDA drivers work well on the first try 😝 
Wishing you all the very best on your next adventure, Ishan!

`;

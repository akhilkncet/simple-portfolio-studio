import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';

export const metadata: Metadata = {
  title: 'AKHIL R | Cybersecurity & Backend Developer Portfolio',
  description: 'Building scalable APIs with intelligence. Specializing in Python, Django, Machine Learning, and Penetration Testing.',
  keywords: ['Backend Developer', 'Cybersecurity', 'Python', 'Django', 'Machine Learning', 'Portfolio'],
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

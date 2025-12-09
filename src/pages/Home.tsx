import React from 'react';
import Layout from '../components/Layout';
import LevelCard from '../components/LevelCard';

const levels = [
  {
    id: '01',
    title: 'Hidden in Plain Sight',
    description: 'Developers often leave comments in the code that contain sensitive information. Can you find the flag hidden in the source code?',
    difficulty: 'Easy' as const,
    status: 'unlocked' as const,
    path: '/levels/source-code'
  },
  {
    id: '02',
    title: 'Robot Protocol',
    description: 'Search engines use robots.txt to know which pages to crawl. Sometimes, this file reveals directories that should remain hidden.',
    difficulty: 'Easy' as const,
    status: 'unlocked' as const,
    path: '/levels/robots'
  },
  {
    id: '03',
    title: 'Forgotten Backups',
    description: 'Text editors and system admins often create backup files. If not properly secured, these files can leak source code and credentials.',
    difficulty: 'Medium' as const,
    status: 'unlocked' as const,
    path: '/levels/backup'
  },
  {
    id: '04',
    title: 'DNS Detective',
    description: 'Subdomains can host internal tools or beta versions of applications. Use your skills to discover hidden subdomains.',
    difficulty: 'Medium' as const,
    status: 'locked' as const,
    path: '/levels/dns'
  },
  {
    id: '05',
    title: 'Port Authority',
    description: 'Open ports are gateways to the system. Identify which services are running and find the vulnerable one.',
    difficulty: 'Hard' as const,
    status: 'locked' as const,
    path: '/levels/ports'
  }
];

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter glitch-text" data-text="INTELLIGENCE GATHERING LABS">
          INTELLIGENCE GATHERING LABS
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Welcome to the training ground. Your mission is to master the art of reconnaissance. 
          Find the flags, submit them, and advance to the next level.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <LevelCard key={level.id} {...level} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;

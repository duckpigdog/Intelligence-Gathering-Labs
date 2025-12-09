import React from 'react';
import LevelLayout from '../../components/LevelLayout';

const Robots: React.FC = () => {
  return (
    <LevelLayout
      levelId="02"
      title="Robot Protocol"
      description="The Robots Exclusion Protocol (robots.txt) is a standard used by websites to communicate with web crawlers and other web robots. It tells them which areas of the website should not be processed or scanned. However, this file is publicly accessible and can reveal the location of sensitive directories."
      hint="Check if the site has a /robots.txt file. It might lead you to a hidden admin panel."
      targetUrl="/api/targets/level2/index.html"
    />
  );
};

export default Robots;

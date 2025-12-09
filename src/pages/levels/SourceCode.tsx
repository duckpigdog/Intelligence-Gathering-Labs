import React from 'react';
import LevelLayout from '../../components/LevelLayout';

const SourceCode: React.FC = () => {
  return (
    <LevelLayout
      levelId="01"
      title="Hidden in Plain Sight"
      description="In this challenge, you need to find a flag hidden within the target website's source code. Developers often leave comments during development and forget to remove them before deployment. These comments can sometimes contain sensitive information."
      hint="Try viewing the page source (Ctrl+U) or inspecting elements (F12). Look for HTML comments <!-- like this -->."
      targetUrl="/api/targets/level1/index.html"
    />
  );
};

export default SourceCode;

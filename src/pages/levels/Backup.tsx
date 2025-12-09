import React from 'react';
import LevelLayout from '../../components/LevelLayout';

const Backup: React.FC = () => {
  return (
    <LevelLayout
      levelId="03"
      title="Forgotten Backups"
      description="It is common practice to create backup files before editing configuration files on a live server. Editors like Vim might create .swp files, and admins might create .bak or .old files. If these files are in the web root, they can be downloaded by anyone."
      hint="The login page mentions 'config.php'. Try to guess the name of the backup file. Common extensions are .bak, .old, .swp, .~."
      targetUrl="/api/targets/level3/index.html"
    />
  );
};

export default Backup;

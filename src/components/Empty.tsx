import React from 'react';
import { Lock } from 'lucide-react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

const Empty: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <div className="p-6 bg-hacker-green/5 rounded-full mb-6 border border-hacker-green/20">
          <Lock className="w-16 h-16 text-muted-foreground" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-muted-foreground">Access Denied</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          This level is currently locked or under development. Complete previous levels to unlock this sector.
        </p>
        <Link to="/" className="text-hacker-green hover:underline underline-offset-4">
          Return to Mission Hub
        </Link>
      </div>
    </Layout>
  );
};

export default Empty;

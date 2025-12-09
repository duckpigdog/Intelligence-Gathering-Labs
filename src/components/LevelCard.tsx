import React from 'react';
import { Lock, Unlock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LevelCardProps {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'locked' | 'unlocked' | 'completed';
  path: string;
}

const LevelCard: React.FC<LevelCardProps> = ({ id, title, description, difficulty, status, path }) => {
  const isLocked = status === 'locked';
  
  const difficultyColor = {
    Easy: 'text-hacker-green',
    Medium: 'text-yellow-400',
    Hard: 'text-red-500'
  }[difficulty];

  return (
    <div className={`relative group border border-hacker-green/20 bg-card/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-hacker-green/60 hover:shadow-[0_0_15px_rgba(0,255,65,0.15)] ${isLocked ? 'opacity-60 grayscale' : ''}`}>
      {/* Header */}
      <div className="p-5 border-b border-hacker-green/10 flex justify-between items-start">
        <div>
          <span className="text-xs font-mono text-muted-foreground mb-1 block">MISSION_{id}</span>
          <h3 className="text-lg font-bold text-white group-hover:text-hacker-green transition-colors">{title}</h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          {status === 'completed' && <CheckCircle className="w-5 h-5 text-hacker-green" />}
          {status === 'locked' && <Lock className="w-5 h-5 text-muted-foreground" />}
          {status === 'unlocked' && <Unlock className="w-5 h-5 text-hacker-green/50" />}
          <span className={`text-xs font-mono px-2 py-0.5 rounded border border-current/20 ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
      </div>
      
      {/* Body */}
      <div className="p-5">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 h-16">
          {description}
        </p>
        
        {isLocked ? (
          <button disabled className="w-full py-2 px-4 bg-muted/20 text-muted-foreground text-sm font-mono border border-muted rounded cursor-not-allowed">
            ACCESS DENIED
          </button>
        ) : (
          <Link to={path} className="block w-full">
            <button className="w-full py-2 px-4 bg-hacker-green/10 text-hacker-green hover:bg-hacker-green hover:text-black text-sm font-mono border border-hacker-green/50 rounded transition-all duration-300 flex items-center justify-center gap-2 group-hover:translate-x-1">
              INITIALIZE MISSION <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        )}
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-hacker-green/50"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-hacker-green/50"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-hacker-green/50"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-hacker-green/50"></div>
    </div>
  );
};

export default LevelCard;

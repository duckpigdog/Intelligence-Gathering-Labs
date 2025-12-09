import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Flag, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

interface LevelLayoutProps {
  levelId: string;
  title: string;
  description: string;
  hint?: string;
  targetUrl: string;
}

const LevelLayout: React.FC<LevelLayoutProps> = ({ levelId, title, description, hint, targetUrl }) => {
  const [flag, setFlag] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!flag) return;

    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/verify-flag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ levelId, flag }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error verifying flag:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-hacker-green mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Mission Hub
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mission Brief */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-hacker-green/20 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Flag className="w-24 h-24 text-hacker-green" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-hacker-green/10 text-hacker-green px-3 py-1 rounded text-sm font-mono border border-hacker-green/30">
                  MISSION_{levelId}
                </span>
                <h1 className="text-2xl font-bold">{title}</h1>
              </div>

              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>{description}</p>
              </div>

              {hint && (
                <div className="mt-6 p-4 bg-yellow-900/10 border border-yellow-500/20 rounded text-yellow-500/80 text-sm flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <div>
                    <strong className="block mb-1 text-yellow-500">Hint:</strong>
                    {hint}
                  </div>
                </div>
              )}
            </div>

            {/* Target Access */}
            <div className="bg-card border border-hacker-green/20 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-hacker-blue" />
                Target System Access
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Access the simulated target system to perform your reconnaissance. 
                Remember to use your browser's developer tools and other information gathering techniques.
              </p>
              <a 
                href={targetUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-hacker-blue/10 text-hacker-blue border border-hacker-blue/50 px-6 py-3 rounded hover:bg-hacker-blue hover:text-black transition-all font-mono font-bold"
              >
                LAUNCH TARGET SYSTEM <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Flag Submission */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-hacker-green/20 rounded-lg p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Flag className="w-5 h-5 text-hacker-green" />
                Submit Flag
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="flag" className="block text-sm font-mono text-muted-foreground mb-2">
                    ENTER FLAG
                  </label>
                  <input
                    type="text"
                    id="flag"
                    value={flag}
                    onChange={(e) => setFlag(e.target.value)}
                    placeholder="IG_LABS{...}"
                    className="w-full bg-black/50 border border-hacker-green/30 rounded p-3 text-hacker-green font-mono placeholder:text-hacker-green/20 focus:outline-none focus:border-hacker-green transition-colors"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading || !flag}
                  className="w-full bg-hacker-green text-black font-bold py-3 rounded hover:bg-hacker-green/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? 'VERIFYING...' : 'SUBMIT'}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded text-green-500 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle className="w-5 h-5" />
                    <div>
                      <strong className="block">Access Granted!</strong>
                      <span className="text-sm">Flag verified successfully.</span>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded text-red-500 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <XCircle className="w-5 h-5" />
                    <div>
                      <strong className="block">Access Denied</strong>
                      <span className="text-sm">Incorrect flag. Try again.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LevelLayout;

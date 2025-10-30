import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CompletionModal({ isOpen, onClose }: CompletionModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <div className="text-center py-8">
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
              <Trophy className="h-12 w-12 text-white" />
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Herzlichen Glückwunsch! 🎉
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Sie haben alle 7 Lektionen der REK Akademie erfolgreich abgeschlossen!
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
            <p className="text-lg">
              Sie sind jetzt bereit, Ihre erste Immobilieninvestition zu tätigen. 
              Lassen Sie uns gemeinsam Ihr persönliches Investment-Potenzial berechnen!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/onboarding" className="flex-1 sm:flex-initial">
              <Button size="lg" className="w-full gap-2">
                <Sparkles className="h-5 w-5" />
                Jetzt Potenzial berechnen
              </Button>
            </Link>
            <Link to="/properties" className="flex-1 sm:flex-initial">
              <Button size="lg" variant="outline" className="w-full gap-2">
                Investitionsobjekte ansehen
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

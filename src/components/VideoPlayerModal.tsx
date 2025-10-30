import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, ChevronRight } from "lucide-react";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: {
    id: number;
    title: string;
    videoUrl: string;
    duration: string;
  };
  onComplete: (lessonId: number) => void;
  isCompleted: boolean;
  nextLesson?: () => void;
}

export function VideoPlayerModal({
  isOpen,
  onClose,
  lesson,
  onComplete,
  isCompleted,
  nextLesson,
}: VideoPlayerModalProps) {
  const getVideoEmbed = (url: string) => {
    return `https://www.youtube.com/embed/dQw4w9WgXcQ`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl h-[90vh] p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl">
                Lektion {lesson.id}: {lesson.title}
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Dauer: {lesson.duration}
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 bg-black">
          <iframe
            className="w-full h-full"
            src={getVideoEmbed(lesson.videoUrl)}
            title={lesson.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-6 border-t bg-muted/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isCompleted && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Abgeschlossen</span>
                </div>
              )}
            </div>
            
            <div className="flex gap-3">
              {!isCompleted && (
                <Button onClick={() => onComplete(lesson.id)}>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Als abgeschlossen markieren
                </Button>
              )}
              
              {nextLesson && (
                <Button onClick={nextLesson} variant="outline">
                  Nächste Lektion
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Clock, CheckCircle, Lock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { akademieLessons } from "@/lib/educationData";
import { useState, useEffect } from "react";
import { VideoPlayerModal } from "@/components/VideoPlayerModal";
import { AkademieProgressBar } from "@/components/AkademieProgressBar";
import { CompletionModal } from "@/components/CompletionModal";

const STORAGE_KEY = "strichabi-immo-demo-akademie-progress";

export default function Akademie() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentLesson, setCurrentLesson] = useState<number | null>(null);
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    if (completedLessons.length === akademieLessons.length && completedLessons.length > 0) {
      setShowCompletion(true);
    }
  }, [completedLessons]);

  const handleLessonClick = (lessonId: number) => {
    const isUnlocked = lessonId === 1 || completedLessons.includes(lessonId - 1);
    if (isUnlocked) {
      setCurrentLesson(lessonId);
    }
  };

  const handleComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const handleNextLesson = () => {
    if (currentLesson && currentLesson < akademieLessons.length) {
      setCurrentLesson(currentLesson + 1);
    } else {
      setCurrentLesson(null);
    }
  };

  const getLessonState = (lessonId: number) => {
    if (completedLessons.includes(lessonId)) return "completed";
    if (lessonId === 1 || completedLessons.includes(lessonId - 1)) return "available";
    return "locked";
  };

  const currentLessonData = akademieLessons.find(l => l.id === currentLesson);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 mt-16">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Kostenloser Online-Kurs
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">strichabi-immo-demo Akademie</h1>
          <p className="text-xl text-muted-foreground">
            Lernen Sie in 7 Lektionen alles über erfolgreiche Immobilieninvestitionen
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <AkademieProgressBar 
            completedLessons={completedLessons} 
            totalLessons={akademieLessons.length} 
          />
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 gap-6">
            {akademieLessons.map((lesson) => {
              const state = getLessonState(lesson.id);
              const isLocked = state === "locked";
              const isCompleted = state === "completed";

              return (
                <Card 
                  key={lesson.id}
                  className={`p-6 transition-all duration-300 border-2 ${
                    isLocked ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-xl hover:border-primary cursor-pointer'
                  } ${isCompleted ? 'border-green-500/50 bg-green-50/30' : ''}`}
                  onClick={() => handleLessonClick(lesson.id)}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-green-500 text-white' : isLocked ? 'bg-muted text-muted-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                      {isCompleted ? <CheckCircle className="h-8 w-8" /> : isLocked ? <Lock className="h-6 w-6" /> : <span className="text-2xl font-bold">{lesson.id}</span>}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{lesson.title}</h3>
                        {isCompleted && <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">Abgeschlossen</Badge>}
                        {isLocked && <Badge variant="outline" className="bg-muted">Gesperrt</Badge>}
                      </div>
                      <p className="text-muted-foreground">{lesson.description}</p>
                    </div>

                    <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                      <Badge variant="outline" className="gap-1">
                        <Clock className="h-3 w-3" />
                        {lesson.duration}
                      </Badge>
                      <Button 
                        className="w-full md:w-auto gap-2"
                        disabled={isLocked}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLessonClick(lesson.id);
                        }}
                      >
                        <PlayCircle className="h-5 w-5" />
                        {isCompleted ? 'Erneut ansehen' : 'Video starten'}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20 max-w-5xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Vom Kurs zum Plan</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Im Online-Termin arbeiten wir mit Ihren persönlichen Angaben und zeigen Ihnen konkrete Investitionsmöglichkeiten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/onboarding">
                <Button size="lg" className="gap-2">
                  Potenzial berechnen
                  <Sparkles className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/properties">
                <Button size="lg" variant="outline">Investitionsobjekte ansehen</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {currentLessonData && (
        <VideoPlayerModal
          isOpen={currentLesson !== null}
          onClose={() => setCurrentLesson(null)}
          lesson={currentLessonData}
          onComplete={handleComplete}
          isCompleted={completedLessons.includes(currentLesson!)}
          nextLesson={currentLesson < akademieLessons.length ? handleNextLesson : undefined}
        />
      )}

      <CompletionModal isOpen={showCompletion} onClose={() => setShowCompletion(false)} />

      <Footer />
    </div>
  );
}

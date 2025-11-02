import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

interface TourStep {
  title: string;
  description: string;
  target: string;
  position: "top" | "bottom" | "left" | "right";
  highlight?: boolean;
}

const tourSteps: TourStep[] = [
  {
    title: "Willkommen bei strichabi-immo-demo! 🎉",
    description: "Entdecken Sie, wie einfach Immobilieninvestments sein können. Wir führen Sie durch die wichtigsten Features.",
    target: "body",
    position: "bottom",
  },
  {
    title: "KI-gestützte Immobilienanalyse",
    description: "Unsere künstliche Intelligenz analysiert täglich neue Neubau-Immobilien und zeigt Ihnen die besten Investitionsmöglichkeiten mit höchsten Renditen.",
    target: "#wie-es-funktioniert",
    position: "top",
    highlight: true,
  },
  {
    title: "Persönlicher Rendite-Rechner",
    description: "Berechnen Sie in Sekunden Ihre individuelle Rendite, Steuerersparnis und monatlichen Cashflow - basierend auf Ihrem Einkommen.",
    target: "#calculator",
    position: "top",
    highlight: true,
  },
  {
    title: "Top-Investitionsobjekte",
    description: "Entdecken Sie handverlesene Neubau-Immobilien mit Renditen von über 3,5% pro Jahr. Alle Objekte werden von unserer KI vorab geprüft.",
    target: "#properties",
    position: "top",
    highlight: true,
  },
  {
    title: "Akademie & Wissensdatenbank",
    description: "Kostenlose Video-Kurse und ein umfangreiches Handbuch machen Sie zum Immobilien-Experten - auch ohne Vorkenntnisse.",
    target: "nav",
    position: "bottom",
    highlight: true,
  },
];

export function InteractiveTour() {
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTour, setHasSeenTour] = useState(false);
  const [highlightedElement, setHighlightedElement] = useState<DOMRect | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const seen = localStorage.getItem("strichabi-tour-completed");
    if (!seen) {
      // Auto-start tour after 2 seconds on first visit
      const timer = setTimeout(() => {
        setIsActive(true);
        scrollToTarget(tourSteps[0].target);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHasSeenTour(true);
    }
  }, []);

  const scrollToTarget = (target: string) => {
    if (target === "body") {
      setHighlightedElement(null);
      return;
    }
    
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      
      // Wait for scroll to finish, then highlight
      setTimeout(() => {
        const rect = element.getBoundingClientRect();
        setHighlightedElement(rect);
      }, 500);
    }
  };

  // Update highlight on scroll/resize
  useEffect(() => {
    if (!isActive || !tourSteps[currentStep].target || tourSteps[currentStep].target === "body") return;

    const updateHighlight = () => {
      const element = document.querySelector(tourSteps[currentStep].target);
      if (element) {
        const rect = element.getBoundingClientRect();
        setHighlightedElement(rect);
      }
    };

    window.addEventListener("scroll", updateHighlight);
    window.addEventListener("resize", updateHighlight);

    return () => {
      window.removeEventListener("scroll", updateHighlight);
      window.removeEventListener("resize", updateHighlight);
    };
  }, [isActive, currentStep]);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      scrollToTarget(tourSteps[nextStep].target);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      scrollToTarget(tourSteps[prevStep].target);
    }
  };

  const handleComplete = () => {
    localStorage.setItem("strichabi-tour-completed", "true");
    setIsActive(false);
    setHasSeenTour(true);
  };

  const handleSkip = () => {
    localStorage.setItem("strichabi-tour-completed", "true");
    setIsActive(false);
    setHasSeenTour(true);
  };

  const restartTour = () => {
    setCurrentStep(0);
    setIsActive(true);
    scrollToTarget(tourSteps[0].target);
  };

  if (!isActive && !hasSeenTour) return null;

  return (
    <>
      {/* Tour Start Button (shown after tour is completed) */}
      {!isActive && hasSeenTour && (
        <Button
          onClick={restartTour}
          variant="ghost"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300 gap-2 text-xs md:text-sm"
          size="sm"
        >
          <Sparkles className="h-4 w-4" />
          Tour erneut ansehen
        </Button>
      )}

      {/* Tour Overlay */}
      {isActive && (
        <>
          {/* Dark overlay with spotlight cutout */}
          <div 
            ref={overlayRef}
            className="fixed inset-0 z-[100] animate-fade-in pointer-events-none"
            style={{
              background: highlightedElement 
                ? `
                  radial-gradient(
                    ellipse ${highlightedElement.width + 40}px ${highlightedElement.height + 40}px at 
                    ${highlightedElement.left + highlightedElement.width / 2}px 
                    ${highlightedElement.top + highlightedElement.height / 2}px,
                    transparent 0%,
                    transparent 50%,
                    rgba(0, 0, 0, 0.75) 70%,
                    rgba(0, 0, 0, 0.85) 100%
                  )
                `
                : 'rgba(0, 0, 0, 0.75)'
            }}
          />

          {/* Pulsing highlight ring */}
          {highlightedElement && tourSteps[currentStep].highlight && (
            <div
              className="fixed z-[101] pointer-events-none animate-pulse"
              style={{
                left: highlightedElement.left - 8,
                top: highlightedElement.top - 8,
                width: highlightedElement.width + 16,
                height: highlightedElement.height + 16,
                border: '3px solid rgb(37, 99, 235)',
                borderRadius: '12px',
                boxShadow: '0 0 30px 5px rgba(37, 99, 235, 0.6), inset 0 0 30px 5px rgba(37, 99, 235, 0.3)',
              }}
            />
          )}

          {/* Tour Card - Mobile optimized */}
          <div className="fixed inset-x-0 bottom-0 md:inset-0 z-[101] md:flex md:items-center md:justify-center p-3 md:p-4 pointer-events-none">
            <Card className="max-w-2xl w-full p-4 md:p-8 shadow-2xl pointer-events-auto animate-scale-in border-2 border-primary/20 bg-background">
              {/* Close button */}
              <button
                onClick={handleSkip}
                className="absolute top-2 right-2 md:top-4 md:right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Tour beenden"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              {/* Step indicator */}
              <div className="flex gap-2 mb-4 md:mb-6">
                {tourSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 md:h-2 flex-1 rounded-full transition-all duration-300 ${
                      index <= currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="mb-4 md:mb-8">
                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-foreground animate-fade-in">
                  {tourSteps[currentStep].title}
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed animate-fade-in">
                  {tourSteps[currentStep].description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="text-xs md:text-sm text-muted-foreground">
                  Schritt {currentStep + 1} von {tourSteps.length}
                </div>
                <div className="flex gap-2 md:gap-3">
                  {currentStep > 0 && (
                    <Button
                      onClick={handlePrevious}
                      variant="outline"
                      size="sm"
                      className="gap-1 md:gap-2 h-9 md:h-11 text-sm md:text-base"
                    >
                      <ArrowLeft className="h-3 w-3 md:h-4 md:w-4" />
                      Zurück
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    size="sm"
                    className="gap-1 md:gap-2 shadow-lg hover:shadow-xl transition-shadow h-9 md:h-11 text-sm md:text-base"
                  >
                    {currentStep === tourSteps.length - 1 ? "Fertig" : "Weiter"}
                    {currentStep < tourSteps.length - 1 && (
                      <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          </div>

        </>
      )}
    </>
  );
}

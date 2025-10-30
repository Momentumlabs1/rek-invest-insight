import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface AkademieProgressBarProps {
  completedLessons: number[];
  totalLessons: number;
}

export function AkademieProgressBar({ completedLessons, totalLessons }: AkademieProgressBarProps) {
  const percentage = Math.round((completedLessons.length / totalLessons) * 100);

  return (
    <Card className="p-6 mb-8">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-semibold text-lg">Ihr Fortschritt</h3>
          <p className="text-sm text-muted-foreground">
            {completedLessons.length} von {totalLessons} Lektionen abgeschlossen
          </p>
        </div>
        <div className="text-3xl font-bold text-primary">
          {percentage}%
        </div>
      </div>
      
      <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
        <div 
          className="absolute h-full bg-primary transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex justify-between mt-3">
        {Array.from({ length: totalLessons }, (_, i) => (
          <div
            key={i}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
              completedLessons.includes(i + 1)
                ? 'bg-primary text-white'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            {completedLessons.includes(i + 1) ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              i + 1
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}

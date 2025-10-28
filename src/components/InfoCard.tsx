import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => {
  return (
    <Card className="border-none shadow-none bg-secondary/50">
      <CardContent className="p-6 flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

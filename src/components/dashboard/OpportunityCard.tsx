
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, Users } from "lucide-react";

interface OpportunityCardProps {
  opportunity: {
    id: string;
    title: string;
    company: string;
    logo?: string;
    location: string;
    type: "Full-time" | "Internship" | "Part-time";
    deadline: string;
    applicants: number;
    positions: number;
    skills: string[];
  };
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800 border-green-200";
      case "Internship":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Part-time":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-md bg-gray-100 flex items-center justify-center">
              {opportunity.logo ? (
                <img
                  src={opportunity.logo}
                  alt={opportunity.company}
                  className="h-8 w-8 object-contain"
                />
              ) : (
                <Briefcase className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <div>
              <CardTitle className="text-base">{opportunity.title}</CardTitle>
              <CardDescription className="text-sm">
                {opportunity.company}
              </CardDescription>
            </div>
          </div>
          <Badge
            variant="outline"
            className={getTypeColor(opportunity.type)}
          >
            {opportunity.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2 space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>{opportunity.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>Deadline: {opportunity.deadline}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Required skills</span>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="h-3.5 w-3.5" />
              <span>{opportunity.applicants} applied / {opportunity.positions} positions</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {opportunity.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="outline" className="bg-gray-50 text-xs font-normal">
                {skill}
              </Badge>
            ))}
            {opportunity.skills.length > 4 && (
              <Badge variant="outline" className="bg-gray-50 text-xs font-normal">
                +{opportunity.skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2">
        <Button size="sm" className="flex-1">
          View Details
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          Find Matches
        </Button>
      </CardFooter>
    </Card>
  );
}

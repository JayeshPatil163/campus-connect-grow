
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
import {
  BookOpen,
  Calendar,
  Clock,
  FileText,
  User,
  Users
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AssessmentCardProps {
  assessment: {
    id: string;
    title: string;
    description: string;
    type: "MCQ" | "Coding" | "PDF Upload";
    dueDate: string;
    duration: string;
    totalStudents: number;
    completedStudents: number;
    department: string;
    year: string;
    isActive: boolean;
  };
}

export function AssessmentCard({ assessment }: AssessmentCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "MCQ":
        return <FileText className="h-4 w-4" />;
      case "Coding":
        return <CodeIcon className="h-4 w-4" />;
      case "PDF Upload":
        return <Upload className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "MCQ":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Coding":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "PDF Upload":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const completionPercentage = Math.round(
    (assessment.completedStudents / assessment.totalStudents) * 100
  );

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle className="text-base">{assessment.title}</CardTitle>
              {assessment.isActive ? (
                <Badge variant="default" className="bg-green-600">Active</Badge>
              ) : (
                <Badge variant="outline" className="text-muted-foreground">Draft</Badge>
              )}
            </div>
            <CardDescription className="text-sm mt-1">
              {assessment.description}
            </CardDescription>
          </div>
          <Badge
            variant="outline"
            className={`flex items-center gap-1 ${getTypeColor(assessment.type)}`}
          >
            {getTypeIcon(assessment.type)}
            {assessment.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pb-2">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>Due: {assessment.dueDate}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>Duration: {assessment.duration}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <User className="h-3.5 w-3.5" />
              <span>{assessment.department}, {assessment.year}</span>
            </div>
            <div className="flex items-center gap-1 text-campus-600 text-sm font-medium">
              <span>{completionPercentage}%</span>
              <span className="text-xs text-muted-foreground">completed</span>
            </div>
          </div>
          <div className="space-y-1">
            <Progress value={completionPercentage} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{assessment.totalStudents} students</span>
              </div>
              <span>{assessment.completedStudents} completed</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2">
        <Button size="sm" className="flex-1">
          View Results
        </Button>
        <Button size="sm" variant="outline" className="flex-1">
          Edit Assessment
        </Button>
      </CardFooter>
    </Card>
  );
}

function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function Upload(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}


import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

interface StudentProfileCardProps {
  student: {
    id: string;
    name: string;
    image?: string;
    department: string;
    year: string;
    cgpa: number;
    skills: string[];
    achievements: number;
    certifications: number;
    rank?: number;
  };
}

export function StudentProfileCard({ student }: StudentProfileCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={student.image} alt={student.name} />
              <AvatarFallback className="bg-campus-100 text-campus-600">
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{student.name}</CardTitle>
              <CardDescription>
                {student.department}, {student.year}
              </CardDescription>
            </div>
          </div>
          {student.rank && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <span className="text-xs">Rank</span>
              <span className="font-bold">{student.rank}</span>
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-blue-50">CGPA {student.cgpa}</Badge>
          {student.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="outline" className="bg-gray-50">
              {skill}
            </Badge>
          ))}
          {student.skills.length > 3 && (
            <Badge variant="outline" className="bg-gray-50">
              +{student.skills.length - 3} more
            </Badge>
          )}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-2">
            <div className="rounded-full bg-green-100 p-1">
              <Award className="h-3 w-3 text-green-600" />
            </div>
            <div>
              <div className="font-medium">{student.achievements}</div>
              <div className="text-xs text-muted-foreground">Achievements</div>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-2">
            <div className="rounded-full bg-blue-100 p-1">
              <FileCheck className="h-3 w-3 text-blue-600" />
            </div>
            <div>
              <div className="font-medium">{student.certifications}</div>
              <div className="text-xs text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="outline" size="sm" className="w-full">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

function Award(props: any) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function FileCheck(props: any) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}


import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { AssessmentCard } from "@/components/dashboard/AssessmentCard";

export default function Assessments() {
  const upcomingAssessments = [
    {
      id: "1",
      title: "Java Programming Fundamentals",
      description: "Core Java concepts and patterns",
      type: "Coding",
      dueDate: "Jul 24, 2025",
      duration: "90 mins",
      totalStudents: 120,
      completedStudents: 0,
      department: "Computer Science",
      year: "3rd Year",
      isActive: true,
    },
    {
      id: "2",
      title: "Technical Aptitude Test",
      description: "General aptitude and logical reasoning test",
      type: "MCQ",
      dueDate: "Jul 30, 2025",
      duration: "60 mins",
      totalStudents: 350,
      completedStudents: 0,
      department: "All Departments",
      year: "Final Year",
      isActive: true,
    },
    {
      id: "3",
      title: "Python Data Science Workshop",
      description: "Hands-on assessment on data analysis using Python",
      type: "Lab",
      dueDate: "Aug 05, 2025",
      duration: "120 mins",
      totalStudents: 80,
      completedStudents: 0,
      department: "Computer Science",
      year: "3rd & 4th Year",
      isActive: true,
    }
  ];

  const pastAssessments = [
    {
      id: "4",
      title: "Web Development Basics",
      description: "HTML, CSS and JavaScript fundamentals",
      type: "Coding",
      dueDate: "Jun 15, 2025",
      duration: "90 mins",
      totalStudents: 110,
      completedStudents: 98,
      department: "Computer Science",
      year: "2nd Year",
      isActive: false,
    },
    {
      id: "5",
      title: "Database Systems",
      description: "SQL queries and database design principles",
      type: "Mixed",
      dueDate: "Jun 05, 2025",
      duration: "75 mins",
      totalStudents: 85,
      completedStudents: 82,
      department: "Computer Science",
      year: "3rd Year",
      isActive: false,
    },
    {
      id: "6",
      title: "Communication Skills Assessment",
      description: "Verbal and written communication evaluation",
      type: "Subjective",
      dueDate: "May 28, 2025",
      duration: "60 mins",
      totalStudents: 200,
      completedStudents: 187,
      department: "All Departments",
      year: "2nd Year",
      isActive: false,
    }
  ];

  const assessmentResults = [
    {
      id: "7",
      title: "C Programming Basics",
      description: "Fundamental programming concepts in C",
      type: "Coding",
      dueDate: "May 12, 2025",
      duration: "90 mins",
      totalStudents: 150,
      completedStudents: 142,
      department: "Computer Science",
      year: "1st Year",
      isActive: false,
      averageScore: 72.5,
      highestScore: 98,
      lowestScore: 45,
      passPercentage: 88,
    },
    {
      id: "8",
      title: "Digital Electronics",
      description: "Logic gates and circuit design basics",
      type: "MCQ",
      dueDate: "Apr 25, 2025",
      duration: "60 mins",
      totalStudents: 95,
      completedStudents: 91,
      department: "Electronics",
      year: "2nd Year",
      isActive: false,
      averageScore: 68.3,
      highestScore: 95,
      lowestScore: 38,
      passPercentage: 82,
    },
    {
      id: "9",
      title: "Placement Aptitude Mock Test",
      description: "General aptitude assessment for placement preparation",
      type: "MCQ",
      dueDate: "Apr 10, 2025",
      duration: "90 mins",
      totalStudents: 320,
      completedStudents: 315,
      department: "All Departments",
      year: "Final Year",
      isActive: false,
      averageScore: 76.8,
      highestScore: 99,
      lowestScore: 51,
      passPercentage: 92,
    }
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Assessments</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Assessment
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            {upcomingAssessments.map(assessment => (
              <AssessmentCard 
                key={assessment.id}
                assessment={assessment}
              />
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastAssessments.map(assessment => (
              <AssessmentCard 
                key={assessment.id}
                assessment={assessment}
              />
            ))}
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            {assessmentResults.map(assessment => (
              <div key={assessment.id} className="mb-4">
                <AssessmentCard assessment={assessment} />
                <div className="mt-2 p-4 border rounded-lg bg-card">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Average Score</p>
                      <p className="font-semibold">{assessment.averageScore}%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Highest Score</p>
                      <p className="font-semibold">{assessment.highestScore}%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Lowest Score</p>
                      <p className="font-semibold">{assessment.lowestScore}%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Pass Percentage</p>
                      <p className="font-semibold">{assessment.passPercentage}%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

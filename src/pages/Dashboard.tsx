
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { StudentProfileCard } from "@/components/dashboard/StudentProfileCard";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard"; 
import { AssessmentCard } from "@/components/dashboard/AssessmentCard";
import {
  Briefcase,
  GraduationCap,
  LineChart,
  Users,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Admin</h1>
            <p className="text-muted-foreground">
              Here's what's happening across your campus today.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Stats overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Students"
            value="3,458"
            icon={Users}
            trend={{ value: 12, positive: true }}
          />
          <StatsCard
            title="Placement Rate"
            value="74%"
            icon={LineChart}
            trend={{ value: 8, positive: true }}
          />
          <StatsCard
            title="Active Opportunities"
            value="28"
            icon={Briefcase}
            trend={{ value: 5, positive: true }}
          />
          <StatsCard
            title="Alumni Network"
            value="1,250"
            icon={GraduationCap}
            description="36 new this month"
          />
        </div>

        {/* Recent activity section */}
        <div className="grid gap-4 md:grid-cols-7">
          {/* Opportunities + Events - 4 columns */}
          <div className="col-span-4 space-y-4">
            <Tabs defaultValue="opportunities">
              <div className="flex items-center justify-between">
                <TabsList className="grid w-[400px] grid-cols-2">
                  <TabsTrigger value="opportunities">Recent Opportunities</TabsTrigger>
                  <TabsTrigger value="assessments">Scheduled Assessments</TabsTrigger>
                </TabsList>
                <Button variant="ghost" size="sm" className="gap-1">
                  View All <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <TabsContent value="opportunities" className="pt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <OpportunityCard
                    opportunity={{
                      id: "1",
                      title: "Software Engineer",
                      company: "TechCorp Solutions",
                      location: "Bangalore, India",
                      type: "Full-time",
                      deadline: "Jul 28, 2025",
                      applicants: 24,
                      positions: 5,
                      skills: ["React", "TypeScript", "Node.js", "MongoDB"],
                    }}
                  />
                  <OpportunityCard
                    opportunity={{
                      id: "2",
                      title: "Data Science Intern",
                      company: "Analytics AI",
                      location: "Remote",
                      type: "Internship",
                      deadline: "Aug 15, 2025",
                      applicants: 18,
                      positions: 3,
                      skills: ["Python", "Data Analysis", "Machine Learning", "SQL", "Tableau"],
                    }}
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="assessments" className="pt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <AssessmentCard
                    assessment={{
                      id: "1",
                      title: "Java Programming Fundamentals",
                      description: "Assessment covering core Java concepts and programming patterns",
                      type: "Coding",
                      dueDate: "Jul 24, 2025",
                      duration: "90 mins",
                      totalStudents: 120,
                      completedStudents: 87,
                      department: "Computer Science",
                      year: "3rd Year",
                      isActive: true,
                    }}
                  />
                  <AssessmentCard
                    assessment={{
                      id: "2",
                      title: "Technical Aptitude Test",
                      description: "General aptitude and logical reasoning test for all departments",
                      type: "MCQ",
                      dueDate: "Jul 30, 2025",
                      duration: "60 mins",
                      totalStudents: 350,
                      completedStudents: 142,
                      department: "All Departments",
                      year: "Final Year",
                      isActive: true,
                    }}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Top performing students - 3 columns */}
          <Card className="col-span-3">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Top Students</CardTitle>
                <CardDescription>
                  Students with highest performance
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <StudentProfileCard
                  student={{
                    id: "1",
                    name: "Ravi Kumar",
                    department: "Computer Science",
                    year: "Final Year",
                    cgpa: 9.2,
                    skills: ["Java", "Python", "React", "Machine Learning"],
                    achievements: 8,
                    certifications: 12,
                    rank: 1,
                  }}
                />
                <StudentProfileCard
                  student={{
                    id: "2",
                    name: "Priya Sharma",
                    department: "Electronics",
                    year: "Final Year",
                    cgpa: 9.0,
                    skills: ["VLSI", "Embedded Systems", "IoT", "PCB Design"],
                    achievements: 6,
                    certifications: 9,
                    rank: 2,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity timeline and upcoming events - for demo purposes */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest updates from across campus</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-campus-400" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">New Assessment Created</p>
                  <p className="text-xs text-muted-foreground">Java Programming Skills Test • 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-campus-400" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Campus Interview Scheduled</p>
                  <p className="text-xs text-muted-foreground">Microsoft • Aug 10, 2025 • 3 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-campus-400" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">New Opportunity Posted</p>
                  <p className="text-xs text-muted-foreground">Data Analyst at Analytics AI • 5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-campus-400" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">New Club Registered</p>
                  <p className="text-xs text-muted-foreground">AI Research Group • 1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Campus events scheduled this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-col items-center justify-center rounded border bg-muted/50 text-center">
                  <span className="text-xs font-medium">JUL</span>
                  <span className="text-lg font-bold leading-none">24</span>
                </div>
                <div>
                  <p className="font-medium">Resume Building Workshop</p>
                  <p className="text-xs text-muted-foreground">10:00 AM • Main Auditorium</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-col items-center justify-center rounded border bg-muted/50 text-center">
                  <span className="text-xs font-medium">JUL</span>
                  <span className="text-lg font-bold leading-none">28</span>
                </div>
                <div>
                  <p className="font-medium">Technical Interview Preparation</p>
                  <p className="text-xs text-muted-foreground">2:00 PM • Conference Hall</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-col items-center justify-center rounded border bg-muted/50 text-center">
                  <span className="text-xs font-medium">AUG</span>
                  <span className="text-lg font-bold leading-none">05</span>
                </div>
                <div>
                  <p className="font-medium">Campus Hackathon 2025</p>
                  <p className="text-xs text-muted-foreground">9:00 AM • Computer Science Building</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-col items-center justify-center rounded border bg-muted/50 text-center">
                  <span className="text-xs font-medium">AUG</span>
                  <span className="text-lg font-bold leading-none">12</span>
                </div>
                <div>
                  <p className="font-medium">Alumni Meet & Network</p>
                  <p className="text-xs text-muted-foreground">5:30 PM • Main Campus Grounds</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

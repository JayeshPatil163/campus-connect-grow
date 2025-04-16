
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { AssessmentCard } from "@/components/dashboard/AssessmentCard";

export default function Assessments() {
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

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <AssessmentCard 
              assessment={{
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
              }}
            />
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {/* Past assessments */}
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            {/* Assessment results */}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

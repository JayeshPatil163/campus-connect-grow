
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard";

export default function Opportunities() {
  const opportunities = [
    {
      id: "1",
      title: "Software Engineer",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      type: "Full-time",
      deadline: "Jul 28, 2025",
      applicants: 24,
      positions: 5,
      skills: ["React", "TypeScript", "Node.js"],
    },
    {
      id: "2",
      title: "Data Scientist",
      company: "Analytics AI",
      location: "Remote",
      type: "Full-time",
      deadline: "Aug 15, 2025",
      applicants: 18,
      positions: 3,
      skills: ["Python", "ML", "SQL"],
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Opportunities</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Post New Opportunity
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {opportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}


import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Plus, Search } from "lucide-react";
import { useState } from "react";

export default function Opportunities() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const opportunities = [
    {
      id: "1",
      title: "Software Engineer",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      type: "Full-time" as const,
      deadline: "Jul 28, 2025",
      applicants: 24,
      positions: 5,
      skills: ["React", "TypeScript", "Node.js"],
    },
    {
      id: "2",
      title: "Data Scientist",
      company: "Analytics AI",
      location: "Hyderabad, India",
      type: "Full-time" as const,
      deadline: "Aug 5, 2025",
      applicants: 17,
      positions: 3,
      skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    },
    {
      id: "3",
      title: "UX Design Intern",
      company: "CreativeDesign Co.",
      location: "Remote",
      type: "Internship" as const,
      deadline: "Jul 30, 2025",
      applicants: 32,
      positions: 2,
      skills: ["Figma", "User Research", "Wireframing"],
    },
    {
      id: "4",
      title: "React Native Developer",
      company: "MobileSoft Technologies",
      location: "Pune, India",
      type: "Full-time" as const,
      deadline: "Aug 15, 2025",
      applicants: 13,
      positions: 1,
      skills: ["React Native", "JavaScript", "Redux", "Mobile Development"],
    },
    {
      id: "5",
      title: "Cloud Engineer",
      company: "CloudNative Solutions",
      location: "Bangalore, India",
      type: "Full-time" as const,
      deadline: "Aug 10, 2025",
      applicants: 19,
      positions: 4,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
    {
      id: "6",
      title: "Marketing Assistant",
      company: "Digital Marketing Agency",
      location: "Delhi, India",
      type: "Part-time" as const,
      deadline: "Jul 25, 2025",
      applicants: 28,
      positions: 2,
      skills: ["Social Media", "Content Creation", "SEO"],
    }
  ];

  const filteredOpportunities = opportunities.filter(opportunity => 
    opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    opportunity.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opportunity.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search opportunities..." 
              className="pl-9" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          {filteredOpportunities.map(opportunity => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
          
          {filteredOpportunities.length === 0 && (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <h3 className="text-lg font-medium">No matching opportunities found</h3>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

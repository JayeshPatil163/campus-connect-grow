
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const alumni = [
    {
      id: 1,
      name: "Rajesh Sharma",
      batch: "2020",
      company: "Google",
      role: "Senior Software Engineer",
      location: "Bengaluru, India",
      linkedin: "https://linkedin.com/in/rajeshsharma",
      mentorship: true,
      expertise: ["Web Development", "Cloud Architecture"]
    },
    {
      id: 2,
      name: "Priya Patel",
      batch: "2019",
      company: "Microsoft",
      role: "Product Manager",
      location: "Hyderabad, India",
      linkedin: "https://linkedin.com/in/priyapatel",
      mentorship: true,
      expertise: ["Product Management", "UX Research"]
    },
    {
      id: 3,
      name: "Vikram Singh",
      batch: "2018",
      company: "Amazon",
      role: "Software Development Engineer",
      location: "Gurugram, India",
      linkedin: "https://linkedin.com/in/vikramsingh",
      mentorship: false,
      expertise: ["Backend Development", "Distributed Systems"]
    },
    {
      id: 4,
      name: "Neha Gupta",
      batch: "2017",
      company: "Flipkart",
      role: "Data Scientist",
      location: "Bengaluru, India",
      linkedin: "https://linkedin.com/in/nehagupta",
      mentorship: true,
      expertise: ["Data Science", "Machine Learning"]
    },
    {
      id: 5,
      name: "Arjun Reddy",
      batch: "2016",
      company: "Adobe",
      role: "Frontend Developer",
      location: "Noida, India",
      linkedin: "https://linkedin.com/in/arjunreddy",
      mentorship: false,
      expertise: ["React", "JavaScript", "UI/UX"]
    },
    {
      id: 6,
      name: "Kavita Desai",
      batch: "2018",
      company: "Swiggy",
      role: "Engineering Manager",
      location: "Bengaluru, India",
      linkedin: "https://linkedin.com/in/kavitadesai",
      mentorship: true,
      expertise: ["Engineering Leadership", "Mobile Development"]
    },
    {
      id: 7,
      name: "Rahul Verma",
      batch: "2015",
      company: "PayTM",
      role: "Tech Lead",
      location: "Delhi, India",
      linkedin: "https://linkedin.com/in/rahulverma",
      mentorship: true,
      expertise: ["Payments", "FinTech", "System Design"]
    },
    {
      id: 8,
      name: "Ananya Mishra",
      batch: "2019",
      company: "Infosys",
      role: "Business Analyst",
      location: "Pune, India",
      linkedin: "https://linkedin.com/in/ananyamishra",
      mentorship: false,
      expertise: ["Business Analysis", "Project Management"]
    }
  ];

  const filteredAlumni = alumni.filter(person => 
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Alumni Network</h1>
          <div className="flex items-center gap-4">
            <Input 
              placeholder="Search alumni..." 
              className="w-[300px]" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredAlumni.map((person) => (
            <Card key={person.id}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://avatar.vercel.sh/${person.id}.png`} />
                    <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{person.name}</CardTitle>
                    <CardDescription>Batch of {person.batch}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">Company:</span> {person.company}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Role:</span> {person.role}
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Location:</span> {person.location}
                    </p>
                  </div>
                  
                  <div className="pt-1">
                    <p className="text-xs mb-1.5 font-medium">Expertise:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {person.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    {person.mentorship && (
                      <Button size="sm">
                        Request Mentorship
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

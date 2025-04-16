
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Students() {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const domains = [
    { value: "cs", label: "Computer Science" },
    { value: "ec", label: "Electronics" },
    { value: "me", label: "Mechanical" },
    { value: "ce", label: "Civil Engineering" },
    { value: "bt", label: "Biotechnology" },
    { value: "ch", label: "Chemical Engineering" }
  ];

  const skills = [
    { value: "react", label: "React" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "ml", label: "Machine Learning" },
    { value: "ai", label: "Artificial Intelligence" },
    { value: "android", label: "Android Development" },
    { value: "ios", label: "iOS Development" },
    { value: "cloud", label: "Cloud Computing" },
    { value: "devops", label: "DevOps" }
  ];

  const roles = [
    { value: "sde", label: "Software Engineer" },
    { value: "data", label: "Data Scientist" },
    { value: "devops", label: "DevOps Engineer" },
    { value: "mobile", label: "Mobile Developer" },
    { value: "frontend", label: "Frontend Developer" },
    { value: "backend", label: "Backend Developer" },
    { value: "fullstack", label: "Full Stack Developer" },
    { value: "ml", label: "ML Engineer" },
    { value: "ui", label: "UI/UX Designer" },
    { value: "pm", label: "Product Manager" }
  ];

  const students = [
    {
      id: "1",
      name: "Aditya Sharma",
      rollNumber: "CS19B001",
      department: "Computer Science",
      year: "4th Year",
      cgpa: 9.2,
      skills: ["Java", "Python", "React", "Machine Learning"],
      email: "aditya.sharma@college.edu",
      photo: `https://avatar.vercel.sh/1.png`
    },
    {
      id: "2",
      name: "Priya Patel",
      rollNumber: "EC19B042",
      department: "Electronics",
      year: "4th Year",
      cgpa: 8.9,
      skills: ["VLSI", "Embedded Systems", "IoT"],
      email: "priya.patel@college.edu",
      photo: `https://avatar.vercel.sh/2.png`
    },
    {
      id: "3",
      name: "Rahul Verma",
      rollNumber: "CS19B023",
      department: "Computer Science",
      year: "4th Year",
      cgpa: 8.7,
      skills: ["Python", "Data Science", "AI/ML"],
      email: "rahul.verma@college.edu",
      photo: `https://avatar.vercel.sh/3.png`
    },
    {
      id: "4",
      name: "Sneha Gupta",
      rollNumber: "ME19B017",
      department: "Mechanical",
      year: "4th Year",
      cgpa: 8.5,
      skills: ["CAD/CAM", "Thermal Engineering"],
      email: "sneha.gupta@college.edu",
      photo: `https://avatar.vercel.sh/4.png`
    },
    {
      id: "5",
      name: "Vikram Singh",
      rollNumber: "CS20B015",
      department: "Computer Science",
      year: "3rd Year",
      cgpa: 9.0,
      skills: ["React", "Node.js", "MongoDB", "Express"],
      email: "vikram.singh@college.edu",
      photo: `https://avatar.vercel.sh/5.png`
    },
    {
      id: "6",
      name: "Ananya Desai",
      rollNumber: "EC20B022",
      department: "Electronics",
      year: "3rd Year",
      cgpa: 8.8,
      skills: ["Circuit Design", "Arduino", "Raspberry Pi"],
      email: "ananya.desai@college.edu",
      photo: `https://avatar.vercel.sh/6.png`
    },
    {
      id: "7",
      name: "Arjun Reddy",
      rollNumber: "CE20B010",
      department: "Civil Engineering",
      year: "3rd Year",
      cgpa: 8.5,
      skills: ["AutoCAD", "Structural Analysis"],
      email: "arjun.reddy@college.edu",
      photo: `https://avatar.vercel.sh/7.png`
    },
    {
      id: "8",
      name: "Kavita Rao",
      rollNumber: "BT20B008",
      department: "Biotechnology",
      year: "3rd Year",
      cgpa: 9.1,
      skills: ["Microbiology", "Genetic Engineering"],
      email: "kavita.rao@college.edu",
      photo: `https://avatar.vercel.sh/8.png`
    }
  ];

  // Filter students based on selections
  const filteredStudents = students.filter(student => {
    const domainMatch = !selectedDomain || student.department.toLowerCase().includes(selectedDomain);
    const skillMatch = !selectedSkill || student.skills.some(skill => 
      skill.toLowerCase().includes(selectedSkill)
    );
    return domainMatch && skillMatch;
  });

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Students</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Input placeholder="Search students..." className="w-[300px]" />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="flex flex-wrap gap-4">
            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Domain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Domains</SelectItem>
                {domains.map(domain => (
                  <SelectItem key={domain.value} value={domain.value}>
                    {domain.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSkill} onValueChange={setSelectedSkill}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Skills" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Skills</SelectItem>
                {skills.map(skill => (
                  <SelectItem key={skill.value} value={skill.value}>
                    {skill.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Job Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Roles</SelectItem>
                {roles.map(role => (
                  <SelectItem key={role.value} value={role.value}>
                    {role.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStudents.map(student => (
            <Card key={student.id} className="overflow-hidden">
              <CardHeader className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={student.photo} alt={student.name} />
                    <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">
                      <Link to={`/students/${student.id}`} className="hover:underline">
                        {student.name}
                      </Link>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{student.rollNumber}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Department</span>
                    <span className="text-sm">{student.department}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Year</span>
                    <span className="text-sm">{student.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">CGPA</span>
                    <span className="text-sm font-mono">{student.cgpa}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-sm font-medium block mb-1.5">Skills</span>
                    <div className="flex flex-wrap gap-1">
                      {student.skills.slice(0, 3).map((skill, i) => (
                        <Badge key={i} variant="outline" className="bg-campus-50 text-campus-800">
                          {skill}
                        </Badge>
                      ))}
                      {student.skills.length > 3 && (
                        <Badge variant="outline">+{student.skills.length - 3}</Badge>
                      )}
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button asChild size="sm" variant="outline" className="w-full">
                      <Link to={`/students/${student.id}`}>View Profile</Link>
                    </Button>
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

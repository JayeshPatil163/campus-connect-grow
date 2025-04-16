
import { useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Award, 
  BookOpen, 
  Calendar, 
  ExternalLink, 
  FileText, 
  Github, 
  Globe, 
  Linkedin, 
  MapPin, 
  Phone,
  Mail,
  Target, 
  Trophy, 
  Users,
  MessageSquare
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Mock student data
const studentData = {
  id: "ST12345",
  name: "Ravi Kumar",
  image: "",
  email: "ravi.kumar@college.edu",
  phone: "+91 98765 43210",
  department: "Computer Science",
  year: "Final Year",
  section: "A",
  cgpa: 9.2,
  semester: 8,
  address: "Bangalore, Karnataka",
  bio: "Passionate software developer specializing in web and mobile applications. Competitive programmer with strong problem-solving skills and experience in full-stack development.",
  
  skills: [
    { name: "React", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Java", level: 70 },
    { name: "Data Structures", level: 90 },
    { name: "Algorithms", level: 85 },
    { name: "MongoDB", level: 65 },
    { name: "Express.js", level: 70 },
    { name: "TypeScript", level: 75 },
    { name: "AWS", level: 60 },
  ],
  
  achievements: [
    { 
      title: "National Hackathon Winner",
      organizer: "TechFest 2024",
      date: "March 2024",
      description: "Secured first place in the national-level hackathon by developing an AI-powered solution for educational accessibility."
    },
    { 
      title: "5-Star Coder on HackerRank",
      organizer: "HackerRank",
      date: "February 2024",
      description: "Achieved 5-star rating in Problem Solving, Algorithms, and Data Structures."
    },
    { 
      title: "ACM ICPC Regional Finalist",
      organizer: "ACM",
      date: "December 2023",
      description: "Qualified for the regional finals of the prestigious ACM ICPC programming contest."
    },
  ],
  
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "May 2024",
      credentialId: "AWS-12345"
    },
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      date: "January 2024",
      credentialId: "UD-67890"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "November 2023",
      credentialId: "CS-54321"
    }
  ],
  
  clubs: [
    {
      name: "Code Club",
      role: "President",
      joinedDate: "August 2022",
      description: "Leading coding workshops, hackathons, and competitive programming sessions."
    },
    {
      name: "AI Research Group",
      role: "Core Member",
      joinedDate: "January 2023",
      description: "Working on research papers and practical applications of AI and ML."
    }
  ],
  
  projects: [
    {
      name: "Smart Attendance System",
      description: "Facial recognition-based attendance system using OpenCV and Django.",
      technologies: ["Python", "OpenCV", "Django", "ReactJS"],
      github: "https://github.com/ravikumar/smart-attendance"
    },
    {
      name: "College Event Management App",
      description: "Mobile application for managing college events, registrations, and notifications.",
      technologies: ["React Native", "Firebase", "Node.js"],
      github: "https://github.com/ravikumar/event-management-app"
    }
  ],
  
  // Coding profiles
  profiles: {
    github: "github.com/ravikumar",
    linkedin: "linkedin.com/in/ravikumar",
    leetcode: "leetcode.com/ravikumar",
    hackerrank: "hackerrank.com/ravikumar",
    codeforces: "codeforces.com/profile/ravikumar"
  },
  
  rankings: {
    leetcode: {
      rank: 12567,
      problems: 345,
      contests: 28
    },
    codeforces: {
      rating: 1825,
      rank: "Expert",
      contests: 42
    }
  },
  
  resume: "/resume/ravi_kumar_resume.pdf"
};

export default function StudentProfile() {
  // In a real app, we would fetch the student data based on the ID
  const { id } = useParams();
  const student = studentData; // In a real app, this would be fetched from an API

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Avatar className="h-24 w-24 border-4 border-background">
              <AvatarImage src={student.image} alt={student.name} />
              <AvatarFallback className="text-2xl bg-campus-100 text-campus-600 dark:bg-campus-800 dark:text-campus-300">
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">{student.name}</h1>
                <Badge className="ml-2">{student.id}</Badge>
              </div>
              <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                <BookOpen className="h-4 w-4" />
                <span>{student.department}, {student.year}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>{student.address}</span>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button size="sm" variant="default">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </Button>
                <Button size="sm" variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" /> Message
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={student.resume} target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-4 w-4" /> View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-end">
              <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800">
                Active Student
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">CGPA: <span className="font-bold text-foreground">{student.cgpa}</span></p>
              <p className="text-sm text-muted-foreground">Semester: <span className="font-bold text-foreground">{student.semester}</span></p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{student.bio}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{student.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{student.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>Section {student.section}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="skills">
          <TabsList className="grid grid-cols-6 w-full">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="clubs">Clubs & Activities</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="profiles">Coding Profiles</TabsTrigger>
          </TabsList>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-4 mt-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>
                  Student's self-assessed proficiency in various technologies and concepts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {student.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-4 mt-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Achievements & Awards</CardTitle>
                <CardDescription>
                  Academic and extracurricular accomplishments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {student.achievements.map((achievement, index) => (
                    <div key={index} className="border-l-4 border-campus-500 pl-4 pb-2">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-campus-500" />
                        <h3 className="text-lg font-medium">{achievement.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Award className="h-3 w-3" />
                        <span>{achievement.organizer}</span>
                        <span className="px-1">•</span>
                        <Calendar className="h-3 w-3" />
                        <span>{achievement.date}</span>
                      </div>
                      <p className="mt-2 text-sm">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certifications Tab */}
          <TabsContent value="certifications" className="space-y-4 mt-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Certifications</CardTitle>
                <CardDescription>
                  Professional certifications and courses completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {student.certifications.map((cert, index) => (
                    <Card key={index} className="bg-card/50">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">{cert.name}</h4>
                            <div className="text-sm text-muted-foreground mt-1">{cert.issuer}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              <span>Issued {cert.date}</span>
                              <span className="px-1">•</span>
                              <span>ID: {cert.credentialId}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clubs Tab */}
          <TabsContent value="clubs" className="space-y-4 mt-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Clubs & Activities</CardTitle>
                <CardDescription>
                  Campus organizations and extracurricular activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {student.clubs.map((club, index) => (
                    <div key={index} className="flex gap-4 border-b pb-4 last:border-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                        <Users className="h-6 w-6 text-foreground/70" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-base">{club.name}</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{club.role}</Badge>
                          <span className="text-xs text-muted-foreground">Joined {club.joinedDate}</span>
                        </div>
                        <p className="text-sm">{club.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-4 mt-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Projects</CardTitle>
                <CardDescription>
                  Personal and academic projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {student.projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-base">{project.name}</h4>
                        <Button size="sm" variant="ghost" className="h-8" asChild>
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Coding Profiles Tab */}
          <TabsContent value="profiles" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Coding Profiles</CardTitle>
                  <CardDescription>
                    Student's presence on coding platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5" />
                        <span>GitHub</span>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`https://${student.profiles.github}`} target="_blank" rel="noreferrer">
                          <span>{student.profiles.github}</span>
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5" />
                        <span>LinkedIn</span>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`https://${student.profiles.linkedin}`} target="_blank" rel="noreferrer">
                          <span>{student.profiles.linkedin}</span>
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5" />
                        <span>LeetCode</span>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`https://${student.profiles.leetcode}`} target="_blank" rel="noreferrer">
                          <span>{student.profiles.leetcode}</span>
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5" />
                        <span>HackerRank</span>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`https://${student.profiles.hackerrank}`} target="_blank" rel="noreferrer">
                          <span>{student.profiles.hackerrank}</span>
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5" />
                        <span>CodeForces</span>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`https://${student.profiles.codeforces}`} target="_blank" rel="noreferrer">
                          <span>{student.profiles.codeforces}</span>
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Platform Statistics</CardTitle>
                  <CardDescription>
                    Performance metrics on competitive coding platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-yellow-500" />
                        <h4 className="font-medium">LeetCode</h4>
                      </div>
                      <div className="grid grid-cols-3 mt-3 gap-4">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Global Rank</p>
                          <p className="text-xl font-bold">{student.rankings.leetcode.rank}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Problems Solved</p>
                          <p className="text-xl font-bold">{student.rankings.leetcode.problems}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Contests</p>
                          <p className="text-xl font-bold">{student.rankings.leetcode.contests}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-blue-500" />
                        <h4 className="font-medium">CodeForces</h4>
                      </div>
                      <div className="grid grid-cols-3 mt-3 gap-4">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Rating</p>
                          <p className="text-xl font-bold">{student.rankings.codeforces.rating}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Rank</p>
                          <p className="text-xl font-bold text-blue-500">{student.rankings.codeforces.rank}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Contests</p>
                          <p className="text-xl font-bold">{student.rankings.codeforces.contests}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

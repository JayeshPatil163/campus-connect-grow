
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

export default function Alumni() {
  const alumni = [
    {
      id: 1,
      name: "John Doe",
      batch: "2020",
      company: "Google",
      role: "Senior Software Engineer",
      location: "Mountain View, CA",
      linkedin: "https://linkedin.com/in/johndoe",
      mentorship: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      batch: "2019",
      company: "Microsoft",
      role: "Product Manager",
      location: "Seattle, WA",
      linkedin: "https://linkedin.com/in/janesmith",
      mentorship: true,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Alumni Network</h1>
          <div className="flex items-center gap-4">
            <Input placeholder="Search alumni..." className="w-[300px]" />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {alumni.map((person) => (
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
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Company:</span> {person.company}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Role:</span> {person.role}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Location:</span> {person.location}
                  </p>
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


import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Tech Symposium 2025",
      date: "Jul 24, 2025",
      time: "10:00 AM",
      location: "Main Auditorium",
      description: "Annual technical symposium featuring industry experts",
      type: "Technical",
      registrations: 150,
    },
    {
      id: 2,
      title: "Campus Hackathon",
      date: "Aug 5, 2025",
      time: "9:00 AM",
      location: "CS Building",
      description: "24-hour hackathon with exciting prizes",
      type: "Competition",
      registrations: 200,
    },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
                <CardDescription>{event.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">Date:</span> {event.date}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Time:</span> {event.time}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Registrations:</span>{" "}
                    {event.registrations}
                  </p>
                  <p className="text-sm mt-2">{event.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

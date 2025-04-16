
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { OpportunityCard } from "@/components/dashboard/OpportunityCard"; 
import {
  Briefcase,
  GraduationCap,
  LineChart,
  Users,
  ChevronRight,
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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

export default function Dashboard() {
  const placementData = [
    { year: '2020', rate: 68 },
    { year: '2021', rate: 72 },
    { year: '2022', rate: 67 },
    { year: '2023', rate: 78 },
    { year: '2024', rate: 74 },
    { year: '2025', rate: 80 },
  ];
  
  const departmentData = [
    { name: 'CS', students: 1250 },
    { name: 'EC', students: 950 },
    { name: 'ME', students: 800 },
    { name: 'CE', students: 458 },
  ];
  
  const companyHiringData = [
    { name: 'Tech', value: 45 },
    { name: 'Finance', value: 20 },
    { name: 'Consulting', value: 15 },
    { name: 'Manufacturing', value: 12 },
    { name: 'Other', value: 8 },
  ];
  
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, Admin</h1>
            <p className="text-muted-foreground">
              Here's an overview of campus placement statistics
            </p>
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

        {/* Charts section */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Placement Rate Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Placement Rate Trend</CardTitle>
              <CardDescription>Year-wise placement percentage</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={placementData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="year" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" domain={[0, 100]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                      formatter={(value) => [`${value}%`, 'Placement Rate']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="#8884d8" 
                      strokeWidth={2} 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Department Distribution Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Department Distribution</CardTitle>
              <CardDescription>Student count by department</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={departmentData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
                    />
                    <Bar dataKey="students" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Industry-wise Hiring */}
          <Card>
            <CardHeader>
              <CardTitle>Industry-wise Hiring</CardTitle>
              <CardDescription>Distribution of hiring by industry</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={companyHiringData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {companyHiringData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Opportunities */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Recent Opportunities</CardTitle>
                <CardDescription>Latest job postings for students</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1" asChild>
                <a href="/opportunities">
                  View All <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </CardHeader>
            <CardContent>
              <OpportunityCard
                opportunity={{
                  id: "1",
                  title: "Software Engineer",
                  company: "TechCorp Solutions",
                  location: "Bangalore, India",
                  type: "Full-time" as const,
                  deadline: "Jul 28, 2025",
                  applicants: 24,
                  positions: 5,
                  skills: ["React", "TypeScript", "Node.js"],
                }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Activity timeline */}
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
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

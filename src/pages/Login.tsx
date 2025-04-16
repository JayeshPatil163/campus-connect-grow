
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd call an auth API here
    navigate("/"); // Navigate to root which has dashboard
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-campus-50 to-white">
      <div className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col items-center justify-center gap-10 px-4 py-12 md:flex-row md:gap-16">
        <div className="flex flex-1 flex-col items-center justify-center md:items-start">
          <div className="flex items-center gap-2 text-3xl font-bold font-heading text-campus-800">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-campus-600 text-white text-lg">
              CC
            </div>
            <div>Campus<span className="text-campus-600">Connect</span></div>
          </div>
          <h1 className="mt-4 max-w-lg text-center text-4xl font-bold tracking-tight md:text-left md:text-5xl">
            Centralized College Opportunity Platform
          </h1>
          <p className="mt-4 max-w-lg text-center text-muted-foreground md:text-left">
            Simplifying placement preparation, student assessments, club activities, 
            and career discovery - all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-campus-500"></div>
              <span>TPO Portal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-campus-500"></div>
              <span>Student Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-campus-500"></div>
              <span>Alumni Connect</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-campus-500"></div>
              <span>Centralized Assessments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-campus-500"></div>
              <span>Club Management</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="rounded-lg border bg-white p-8 shadow-sm">
            <div className="mb-6 flex flex-col space-y-1">
              <h2 className="text-2xl font-bold">Sign in to admin portal</h2>
              <p className="text-sm text-muted-foreground">
                Enter your credentials to access the dashboard
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="admin@college.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-campus-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Sign In
              </Button>
            </form>
            <div className="mt-6 text-center text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-campus-600 hover:underline">
                Contact your administrator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

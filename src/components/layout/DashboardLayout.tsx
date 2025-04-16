
import { ReactNode } from "react";
import { SidebarNav } from "@/components/sidebar/SidebarNav";
import { UserButton } from "@/components/ui/UserButton";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-card border-r shadow-sm">
        <div className="p-6">
          <h2 className="text-2xl font-bold font-heading text-campus-800 dark:text-campus-200 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-campus-600 text-white text-sm">
              DP
            </span>
            DYP<span className="text-campus-600">Connect</span>
          </h2>
        </div>
        <div className="flex-1 px-3 py-2">
          <SidebarNav />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation */}
        <header className="h-16 flex items-center justify-between px-6 border-b bg-card">
          <div className="flex items-center gap-2 w-full max-w-md">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search students, opportunities..." 
              className="border-none shadow-none focus-visible:ring-0" 
            />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-campus-600 rounded-full"></span>
            </Button>
            <UserButton />
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}

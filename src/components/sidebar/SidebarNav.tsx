
import { 
  UserRound, Briefcase, BookOpen, 
  BarChart3, Calendar, Award, Users, 
  FileText, GraduationCap, Settings, LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface SidebarNavProps {
  className?: string;
}

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: BarChart3,
  },
  {
    title: "Students",
    href: "/students",
    icon: Users,
  },
  {
    title: "Opportunities",
    href: "/opportunities",
    icon: Briefcase,
  },
  {
    title: "Assessments",
    href: "/assessments",
    icon: BookOpen,
  },
  {
    title: "Events",
    href: "/events",
    icon: Calendar,
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: Award,
  },
  {
    title: "Alumni",
    href: "/alumni",
    icon: GraduationCap,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function SidebarNav({ className }: SidebarNavProps) {
  const location = useLocation();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-campus-100 hover:text-campus-900",
              isActive ? "bg-campus-100 text-campus-900 font-semibold" : "text-muted-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        );
      })}

      <div className="mt-auto pt-4">
        <Link
          to="/logout"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all text-muted-foreground hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          <span>Log out</span>
        </Link>
      </div>
    </div>
  );
}

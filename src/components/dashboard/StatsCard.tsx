
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className,
}: StatsCardProps) {
  return (
    <div className={cn(
      "rounded-xl bg-white p-6 shadow-sm border border-gray-100",
      className
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-3xl font-bold tracking-tight">{value}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
          
          {trend && (
            <div className="mt-2 flex items-center gap-1 text-xs">
              <span className={`flex items-center ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
                {trend.positive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          )}
        </div>
        <div className="rounded-full bg-campus-100 p-2 text-campus-600">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

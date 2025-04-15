
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Smartphone,
  Wifi,
  BookOpen,
  GraduationCap,
  Play,
  Leaf,
  BarChart,
  Users,
  FileText,
  Settings,
  ChevronRight,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Define menu items
const menuItems = [
  {
    title: "Overview",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Device Management",
    icon: Smartphone,
    path: "/dashboard/devices",
  },
  {
    title: "Internet Connectivity",
    icon: Wifi,
    path: "/dashboard/connectivity",
  },
  {
    title: "Curriculum Content",
    icon: BookOpen,
    path: "/dashboard/curriculum",
  },
  {
    title: "Tutor Training",
    icon: GraduationCap,
    path: "/dashboard/tutors",
  },
  {
    title: "E-Learning Materials",
    icon: Play,
    path: "/dashboard/e-learning",
  },
  {
    title: "Sustainability",
    icon: Leaf,
    path: "/dashboard/sustainability",
  },
  {
    title: "Monitoring & Evaluation",
    icon: BarChart,
    path: "/dashboard/monitoring",
  },
  {
    title: "User Management",
    icon: Users,
    path: "/dashboard/users",
  },
  {
    title: "Reports & Analytics",
    icon: FileText,
    path: "/dashboard/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center gap-2 px-6 py-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-primary text-xl">DigiLearn</span>
          <span className="text-sm text-sidebar-foreground/70">Admin</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="py-4">
        {/* Admin Profile */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-sidebar-foreground">Admin User</div>
              <div className="text-xs text-sidebar-foreground/60">Administrator</div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.title}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm rounded-md transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                )}
              >
                <item.icon size={18} />
                <span>{item.title}</span>
                {isActive && <ChevronRight size={16} className="ml-auto" />}
              </Link>
            );
          })}
        </div>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
          asChild
        >
          <Link to="/">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Back to Website</span>
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

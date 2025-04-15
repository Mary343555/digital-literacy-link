
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const isDashboardRoot = location.pathname === "/dashboard";
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <main className="flex-1 p-6 overflow-y-auto bg-slate-50">
            <div className="mb-6">
              <h1 className="text-2xl font-bold">
                {isDashboardRoot ? "Dashboard Overview" : "Dashboard"}
              </h1>
              <p className="text-muted-foreground">
                {isDashboardRoot 
                  ? "Manage and monitor your digital literacy project metrics"
                  : "Manage your digital literacy project"}
              </p>
            </div>
            
            {isDashboardRoot ? <DashboardOverview /> : <Outlet />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

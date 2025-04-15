
import { useState } from "react";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="flex items-center justify-between h-16 px-6 border-b bg-background sticky top-0 z-10">
      <div className="flex items-center">
        <SidebarTrigger />
        <div className="relative ml-4 md:ml-6 w-64 hidden md:block">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 bg-muted/40 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </Button>
      </div>
    </header>
  );
}

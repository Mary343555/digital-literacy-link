
import { Laptop, Users, GraduationCap, FileText, School, Wifi } from "lucide-react";
import { StatCard } from "./StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Devices Distributed"
          value="0"
          description="Across 0 schools"
          icon={<Laptop />}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Internet Connected Schools"
          value="0"
          description="0% of total schools"
          icon={<Wifi />}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Trained Tutors"
          value="0"
          description="Certified on digital literacy"
          icon={<GraduationCap />}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Curriculum Resources"
          value="0"
          description="Lesson plans & materials"
          icon={<FileText />}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Active Students"
          value="0"
          description="Weekly engagement"
          icon={<Users />}
          trend={{ value: 0, isPositive: true }}
        />
        <StatCard
          title="Participating Schools"
          value="0"
          description="Across 0 districts"
          icon={<School />}
          trend={{ value: 0, isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project Milestones</CardTitle>
            <CardDescription>Progress on key project objectives</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Device Distribution</div>
                <div className="text-sm text-muted-foreground">0%</div>
              </div>
              <Progress value={0} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Tutor Training</div>
                <div className="text-sm text-muted-foreground">0%</div>
              </div>
              <Progress value={0} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Curriculum Development</div>
                <div className="text-sm text-muted-foreground">0%</div>
              </div>
              <Progress value={0} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Internet Connectivity</div>
                <div className="text-sm text-muted-foreground">0%</div>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>No recent activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              No activities to display
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


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
          value="2,845"
          description="Across 57 schools"
          icon={<Laptop />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Internet Connected Schools"
          value="42"
          description="73% of total schools"
          icon={<Wifi />}
          trend={{ value: 4, isPositive: true }}
        />
        <StatCard
          title="Trained Tutors"
          value="186"
          description="Certified on digital literacy"
          icon={<GraduationCap />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Curriculum Resources"
          value="512"
          description="Lesson plans & materials"
          icon={<FileText />}
          trend={{ value: 23, isPositive: true }}
        />
        <StatCard
          title="Active Students"
          value="12,450"
          description="Weekly engagement"
          icon={<Users />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Participating Schools"
          value="57"
          description="Across 12 districts"
          icon={<School />}
          trend={{ value: 2, isPositive: true }}
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
                <div className="text-sm text-muted-foreground">95%</div>
              </div>
              <Progress value={95} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Tutor Training</div>
                <div className="text-sm text-muted-foreground">78%</div>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Curriculum Development</div>
                <div className="text-sm text-muted-foreground">86%</div>
              </div>
              <Progress value={86} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Internet Connectivity</div>
                <div className="text-sm text-muted-foreground">73%</div>
              </div>
              <Progress value={73} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest project updates and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm font-medium">Laptop delivery completed at Eastside School</p>
                  <p className="text-xs text-muted-foreground">April 12, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm font-medium">Tutor training workshop for Central District</p>
                  <p className="text-xs text-muted-foreground">April 10, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm font-medium">New science curriculum resources uploaded</p>
                  <p className="text-xs text-muted-foreground">April 8, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm font-medium">Internet installation at West Region schools</p>
                  <p className="text-xs text-muted-foreground">April 5, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm font-medium">Quarterly evaluation meeting with partners</p>
                  <p className="text-xs text-muted-foreground">April 2, 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

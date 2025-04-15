
import { WifiOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Connectivity() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Internet Connectivity</h1>
        <p className="text-muted-foreground">
          Monitor and manage internet connectivity across schools
        </p>
      </div>

      <Alert>
        <WifiOff className="h-4 w-4" />
        <AlertTitle>No connected schools</AlertTitle>
        <AlertDescription>
          Begin by setting up internet connections for schools in the network.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Connected Schools</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Average Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0 Mbps</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Active Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

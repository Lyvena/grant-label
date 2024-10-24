import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>My Applications</CardTitle>
              <CardDescription>Track your grant applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm text-gray-500">Active applications</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Available Grants</CardTitle>
              <CardDescription>Open grant opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-gray-500">Current opportunities</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Recent updates</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">No new notifications</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
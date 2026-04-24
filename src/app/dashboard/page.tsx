import { 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Plus,
  ArrowRight,
  FolderPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/stat-card";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, User</h1>
          <p className="text-gray-500 text-sm">Here’s what’s happening with your projects today.</p>
        </div>
        <Button className="rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 border-none shadow-md transition-all active:scale-95">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Projects" 
          value={12} 
          icon={Briefcase} 
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          label="Completed" 
          value={8} 
          icon={CheckCircle2} 
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard 
          label="My Tasks" 
          value={24} 
          icon={Clock} 
        />
        <StatCard 
          label="Overdue" 
          value={3} 
          icon={AlertCircle} 
          trend={{ value: 2, isPositive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-xl border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Project Overview</CardTitle>
              <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 font-medium">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <EmptyState 
                icon={FolderPlus}
                title="No projects yet"
                description="Start by creating your first project to track your progress."
                actionLabel="Create your First Project"
              />
            </CardContent>
          </Card>

          <Card className="rounded-xl border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">You completed the task "Design System Update"</p>
                      <p className="text-xs text-gray-500 mt-0.5">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-xl border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">My Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Finalize Landing Page", "API Integration", "User Feedback Analysis"].map((task) => (
                  <div key={task} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer group">
                    <div className="w-5 h-5 rounded border-2 border-gray-200 group-hover:border-indigo-400" />
                    <span className="text-sm font-medium text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-none shadow-sm bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-red-900">Overdue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Client Meeting Preparation", "Bug Fix: Dashboard Crash"].map((task) => (
                  <div key={task} className="flex flex-col gap-1 p-3 rounded-xl bg-white border border-red-100 shadow-sm">
                    <span className="text-sm font-semibold text-gray-900">{task}</span>
                    <span className="text-xs text-red-600 font-medium">Due Yesterday</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

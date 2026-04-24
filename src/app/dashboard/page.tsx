"use client";

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
import { useState } from "react";
import { NewProjectModal } from "@/components/projects/new-project-modal";
import { useProjectStore } from "@/lib/store/project-store";
import { useRouter } from "next/navigation";
import { TaskItem } from "@/components/dashboard/task-item";

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = useProjectStore((state) => state.projects);
  const router = useRouter();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back, User</h1>
          <p className="text-gray-500 text-sm dark:text-gray-400">Here’s what’s happening with your projects today.</p>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 border-none shadow-md transition-all active:scale-95 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Projects" 
          value={projects.length} 
          icon={Briefcase} 
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          label="Completed" 
          value={projects.filter(p => p.status === 'Completed').length} 
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
          <Card className="rounded-xl border-none shadow-sm dark:bg-gray-900">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Project Overview</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-indigo-600 hover:text-indigo-700 font-medium"
                onClick={() => router.push('/projects')}
              >
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              {projects.length === 0 ? (
                <EmptyState 
                  icon={FolderPlus}
                  title="No projects yet"
                  description="Start by creating your first project to track your progress."
                  actionLabel="Create your First Project"
                  onAction={() => setIsModalOpen(true)}
                />
              ) : (
                <div className="space-y-4">
                  {projects.slice(0, 3).map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:border-indigo-100 hover:bg-gray-50/50 transition-all dark:border-gray-800 dark:hover:bg-gray-800/50">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 dark:bg-indigo-950">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{project.name}</p>
                          <p className="text-xs text-gray-500">{project.status}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="rounded-lg" onClick={() => router.push(`/projects`)}>
                        Manage
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="rounded-xl border-none shadow-sm dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors dark:hover:bg-gray-800/50">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-1 dark:bg-indigo-900">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-200">You completed the task "Design System Update"</p>
                      <p className="text-xs text-gray-500 mt-0.5">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-xl border-none shadow-sm dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">My Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Finalize Landing Page", "API Integration", "User Feedback Analysis"].map((task) => (
                  <TaskItem key={task} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-none shadow-sm bg-red-50/50 dark:bg-red-950/20">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-red-900 dark:text-red-400">Overdue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Client Meeting Preparation", "Bug Fix: Dashboard Crash"].map((task) => (
                  <TaskItem key={task} task={task} isOverdue />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <NewProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}


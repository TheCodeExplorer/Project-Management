"use client";

import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/projects/project-card";
import { useProjectStore } from "@/lib/store/project-store";
import { useState } from "react";
import { NewProjectModal } from "@/components/projects/new-project-modal";

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = useProjectStore((state) => state.projects);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
          <p className="text-gray-500 text-sm dark:text-gray-400">Manage and track your projects.</p>
        </div>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-all active:scale-95"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Project
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search projects..." 
            className="pl-10 border-gray-100 focus-visible:ring-indigo-400 rounded-xl bg-gray-50/50 dark:bg-gray-800 dark:border-gray-700"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" className="rounded-xl border-gray-100 dark:border-gray-800 flex-1 md:flex-none">
            <Filter className="h-4 w-4 mr-2 text-gray-400" />
            Status
          </Button>
          <Button variant="outline" className="rounded-xl border-gray-100 dark:border-gray-800 flex-1 md:flex-none">
            <Filter className="h-4 w-4 mr-2 text-gray-400" />
            Priority
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all group min-h-[200px]"
        >
          <div className="p-3 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900 group-hover:text-indigo-600 mb-3 transition-colors">
            <Plus className="h-6 w-6" />
          </div>
          <span className="text-sm font-semibold text-gray-500 group-hover:text-indigo-600 transition-colors">
            Add New Project
          </span>
        </button>
      </div>

      <NewProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}


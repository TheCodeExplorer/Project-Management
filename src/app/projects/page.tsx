import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectCard } from "@/components/projects/project-card";

const MOCK_PROJECTS = [
  {
    name: "Website Redesign",
    description: "Full revamp of the company website with modern design trends and improved UX.",
    status: "In Progress" as const,
    priority: "High" as const,
    tasksCount: 12,
    dueDate: "Oct 24, 2023",
  },
  {
    name: "Mobile App Development",
    description: "Creating a cross-platform mobile application for better customer engagement.",
    status: "Planning" as const,
    priority: "Medium" as const,
    tasksCount: 8,
    dueDate: "Dec 12, 2023",
  },
  {
    name: "Marketing Campaign",
    description: "Q4 marketing strategy focused on social media and email outreach.",
    status: "Completed" as const,
    priority: "Low" as const,
    tasksCount: 15,
    dueDate: "Sep 30, 2023",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
          <p className="text-gray-500 text-sm">Manage and track your projects.</p>
        </div>
        <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all active:scale-95">
          <Plus className="h-4 w-4 mr-2" />
          Create Project
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search projects..." 
            className="pl-10 border-gray-100 focus-visible:ring-indigo-400 rounded-xl bg-gray-50/50"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" className="rounded-xl border-gray-100 flex-1 md:flex-none">
            <Filter className="h-4 w-4 mr-2 text-gray-400" />
            Status
          </Button>
          <Button variant="outline" className="rounded-xl border-gray-100 flex-1 md:flex-none">
            <Filter className="h-4 w-4 mr-2 text-gray-400" />
            Priority
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROJECTS.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
        <button className="flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed border-gray-200 hover:border-indigo-400 hover:bg-indigo-50/30 transition-all group min-h-[200px]">
          <div className="p-3 rounded-full bg-gray-50 text-gray-400 group-hover:bg-indigo-100 group-hover:text-indigo-600 mb-3 transition-colors">
            <Plus className="h-6 w-6" />
          </div>
          <span className="text-sm font-semibold text-gray-500 group-hover:text-indigo-600 transition-colors">
            Add New Project
          </span>
        </button>
      </div>
    </div>
  );
}

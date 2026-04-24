import { MoreVertical, Calendar, ListTodo } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface ProjectCardProps {
  name: string;
  description: string;
  status: "Planning" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  tasksCount: number;
  dueDate: string;
}

export function ProjectCard({ 
  name, 
  description, 
  status, 
  priority, 
  tasksCount, 
  dueDate 
}: ProjectCardProps) {
  const priorityColors = {
    Low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-none",
    Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-none",
    High: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-none",
  };

  const statusColors = {
    Planning: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-none",
    "In Progress": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-none",
    Completed: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 border-none",
  };

  return (
    <Card className="rounded-xl border-none shadow-sm hover:shadow-md transition-all group cursor-pointer dark:bg-gray-900">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex gap-2">
          <Badge className={`rounded-lg font-medium px-2 py-0 ${statusColors[status]}`}>
            {status}
          </Badge>
          <Badge className={`rounded-lg font-medium px-2 py-0 ${priorityColors[priority]}`}>
            {priority}
          </Badge>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="h-8 w-8 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg hover:bg-gray-100">
            <MoreVertical className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="rounded-xl">
            <DropdownMenuItem>Edit Project</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <CardTitle className="text-lg font-bold text-foreground group-hover:text-indigo-600 transition-colors">
            {name}
          </CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between text-muted-foreground pt-2 border-t border-gray-50 dark:border-gray-800">
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <ListTodo className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
            {tasksCount} Tasks
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <Calendar className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
            {dueDate}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

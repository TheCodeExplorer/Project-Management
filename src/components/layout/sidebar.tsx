import Link from "next/link";
import { 
  LayoutDashboard, 
  Briefcase, 
  CheckCircle2, 
  Users, 
  Settings,
  ChevronDown,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Projects", icon: Briefcase, href: "/projects" },
  { label: "My Tasks", icon: CheckCircle2, href: "/tasks", badge: 4 },
  { label: "Team", icon: Users, href: "/team" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-white flex flex-col">
      <div className="p-4 border-bottom h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white shadow-sm">
            K
          </div>
          <span>Kamoz</span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors",
              "text-gray-600 hover:bg-gray-100 hover:text-indigo-600 group"
            )}
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-4 w-4" />
              {item.label}
            </div>
            {item.badge && (
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-[10px] group-hover:bg-indigo-100 group-hover:text-indigo-600">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t">
        <div className="flex items-center justify-between mb-2 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Projects
          <Button variant="ghost" size="icon" className="h-4 w-4">
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        <div className="space-y-1">
          {["Website Redesign", "Mobile App", "Marketing"].map((project) => (
            <Link
              key={project}
              href={`/projects/${project.toLowerCase().replace(" ", "-")}`}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-100 hover:text-indigo-600 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              {project}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

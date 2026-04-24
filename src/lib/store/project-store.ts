import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "Planning" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  tasksCount: number;
  dueDate: string;
  createdAt: number;
}

interface ProjectState {
  projects: Project[];
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  deleteProject: (id: string) => void;
}

export const useProjectStore = create<ProjectState>()(
  persist(
    (set) => ({
      projects: [
        {
          id: '1',
          name: "Website Redesign",
          description: "Full revamp of the company website with modern design trends and improved UX.",
          status: "In Progress",
          priority: "High",
          tasksCount: 12,
          dueDate: "Oct 24, 2026",
          createdAt: Date.now(),
        },
        {
          id: '2',
          name: "Mobile App Development",
          description: "Creating a cross-platform mobile application for better customer engagement.",
          status: "Planning",
          priority: "Medium",
          tasksCount: 8,
          dueDate: "Dec 12, 2026",
          createdAt: Date.now(),
        },
      ],
      addProject: (project) => set((state) => ({
        projects: [
          ...state.projects,
          {
            ...project,
            id: Math.random().toString(36).substring(7),
            createdAt: Date.now(),
          }
        ]
      })),
      deleteProject: (id) => set((state) => ({
        projects: state.projects.filter(p => p.id !== id)
      })),
    }),
    {
      name: 'kamoz-projects-storage',
    }
  )
);

"use client";

import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProjectStore } from "@/lib/store/project-store";

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewProjectModal({ isOpen, onClose }: NewProjectModalProps) {
  const addProject = useProjectStore((state) => state.addProject);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addProject({
      name,
      description,
      status: "Planning",
      priority: "Medium",
      tasksCount: 0,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
    });

    setIsLoading(false);
    setName("");
    setDescription("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-2xl dark:bg-gray-950">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">New Project</DialogTitle>
          <DialogDescription>
            Create a new project to start tracking your work.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold">Project Name</Label>
            <Input
              id="name"
              placeholder="e.g. Website Redesign"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border-gray-100 focus-visible:ring-indigo-400 dark:bg-gray-900 dark:border-gray-800"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-semibold">Description</Label>
            <Input
              id="description"
              placeholder="What is this project about?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="rounded-xl border-gray-100 focus-visible:ring-indigo-400 dark:bg-gray-900 dark:border-gray-800"
              required
            />
          </div>
          <DialogFooter className="pt-4">
            <Button 
                type="button" 
                variant="ghost" 
                onClick={onClose}
                className="rounded-xl"
            >
              Cancel
            </Button>
            <Button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
                disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Create Project"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ 
  icon: Icon, 
  title, 
  description, 
  actionLabel, 
  onAction 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-gray-900 rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
      <div className="p-4 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1 max-w-[240px]">
        {description}
      </p>
      {actionLabel && (
        <Button 
          onClick={onAction}
          className="mt-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-sm"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

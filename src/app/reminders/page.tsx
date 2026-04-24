import { Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RemindersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reminders</h1>
          <p className="text-gray-500 text-sm dark:text-gray-400">Never miss a deadline with timely alerts.</p>
        </div>
        <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm">
          <Plus className="h-4 w-4 mr-2" />
          Set Reminder
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-8 text-center space-y-4">
        <div className="h-16 w-16 bg-blue-50 dark:bg-blue-950 rounded-full flex items-center justify-center text-blue-600 mx-auto">
          <Bell className="h-8 w-8" />
        </div>
        <h2 className="text-xl font-bold">No upcoming reminders</h2>
        <p className="text-gray-500 max-w-sm mx-auto">
          We'll notify you when your project deadlines or tasks are approaching.
        </p>
      </div>
    </div>
  );
}

import { Search, Bell, Sun, Moon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Topbar() {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-10">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input 
          placeholder="Search... (⌘ + K)" 
          className="pl-10 bg-gray-50 border-none focus-visible:ring-indigo-400 rounded-xl"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Sun className="h-5 w-5" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <div className="relative h-10 w-10 rounded-full flex items-center justify-center">
              <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 rounded-xl" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  john@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

"use client";

import { Search, Bell, Sun, Moon, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSidebarStore } from "@/lib/store/sidebar-store";
import { useSearchStore } from "@/lib/store/search-store";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export function Topbar() {
  const { toggle } = useSidebarStore();
  const { query, setQuery } = useSearchStore();
  const { theme, setTheme } = useTheme();
  const { user, isLoaded } = useUser();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-4 md:px-8 fixed top-0 right-0 left-0 lg:left-64 z-30 dark:bg-gray-950 dark:border-gray-800 transition-all">
      <div className="flex items-center gap-4 flex-1">
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"
          onClick={toggle}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative w-full max-w-96 hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search projects and tasks..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 bg-gray-50 border-none focus-visible:ring-indigo-400 rounded-xl dark:bg-gray-900"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900">
          <Bell className="h-5 w-5" />
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {!mounted ? (
            <div className="h-5 w-5 animate-pulse bg-gray-200 rounded-full" />
          ) : theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full overflow-hidden border-2 border-transparent hover:border-indigo-100 transition-all outline-none">
            <Avatar size="lg">
              <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User"} />
              <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white text-xs font-bold">
                {user?.firstName?.charAt(0) || "U"}{user?.lastName?.charAt(0) || ""}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 rounded-xl" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none text-foreground">{user?.fullName || "Guest User"}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.primaryEmailAddress?.emailAddress || "Guest"}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/profile">
              <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            </Link>
            <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <SignOutButton>
              <DropdownMenuItem className="text-red-600 cursor-pointer focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-950">
                Log out
              </DropdownMenuItem>
            </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}



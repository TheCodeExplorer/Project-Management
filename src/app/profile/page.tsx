"use client";

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Calendar, Shield, Loader2 } from "lucide-react";

export default function ProfilePage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex h-[calc(100vh-120px)] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  // Safe fallback if user is null (shouldn't happen with clerkMiddleware but good for robustness)
  if (!user) {
    return (
      <div className="flex h-[calc(100vh-120px)] items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">User not found</h1>
          <p className="text-gray-500">Please sign in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h1>
        <p className="text-gray-500 text-sm dark:text-gray-400">View and manage your account details.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1 rounded-2xl border-none shadow-sm dark:bg-gray-900 h-fit">
          <CardContent className="pt-8 flex flex-col items-center">
            <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-800 shadow-xl mb-4">
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback className="bg-indigo-600 text-white text-2xl font-bold">
                {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.fullName}</h2>
            <p className="text-sm text-gray-500 mb-6">{user.primaryEmailAddress?.emailAddress}</p>
            <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 rounded-lg px-3 border-none">
              <Shield className="h-3 w-3 mr-1.5" />
              Verified Account
            </Badge>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Card className="rounded-2xl border-none shadow-sm dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="text-lg">Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">First Name</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user.firstName || "Not set"}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Last Name</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{user.lastName || "Not set"}</p>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    <Mail className="h-4 w-4 text-gray-400" />
                    {user.primaryEmailAddress?.emailAddress}
                  </div>
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Created At</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Unknown"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-none shadow-sm bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-100/50 dark:border-indigo-900/50 border border-dashed text-center p-8">
            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
              Want to update your profile details?
            </p>
            <p className="text-xs text-gray-500 mt-1 mb-4">
              Profile management is handled securely via Clerk.
            </p>
            <button 
              className="text-sm font-bold text-indigo-700 dark:text-indigo-300 hover:underline"
              onClick={() => window.open('https://accounts.clerk.com/user', '_blank')}
            >
              Go to Account Settings
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}

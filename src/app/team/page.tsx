import { Plus, Mail, Shield, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatCard } from "@/components/dashboard/stat-card";
import { Users, Briefcase, CheckCircle2 } from "lucide-react";

const MEMBERS = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "ADMIN",
    avatar: "JD",
  },
  {
    name: "Sarah Smith",
    email: "sarah@example.com",
    role: "MEMBER",
    avatar: "SS",
  },
  {
    name: "Michael Chen",
    email: "michael@example.com",
    role: "MEMBER",
    avatar: "MC",
  },
];

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team</h1>
          <p className="text-gray-500 text-sm">Manage team members and their roles.</p>
        </div>
        <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all active:scale-95">
          <Plus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Total Members" value={8} icon={Users} />
        <StatCard label="Active Projects" value={5} icon={Briefcase} />
        <StatCard label="Total Tasks" value={124} icon={CheckCircle2} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border-none overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50/50">
            <TableRow className="border-gray-100 hover:bg-transparent">
              <TableHead className="font-semibold text-gray-600">Member</TableHead>
              <TableHead className="font-semibold text-gray-600">Email</TableHead>
              <TableHead className="font-semibold text-gray-600">Role</TableHead>
              <TableHead className="text-right font-semibold text-gray-600">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MEMBERS.map((member) => (
              <TableRow key={member.email} className="border-gray-50 hover:bg-gray-50/50 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 border-2 border-white shadow-sm">
                      <AvatarFallback className="bg-indigo-100 text-indigo-600 text-xs font-bold">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-900">{member.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-500">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3" />
                    {member.email}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    className={`rounded-lg font-medium px-2 py-0 border-none ${
                      member.role === 'ADMIN' 
                        ? 'bg-indigo-100 text-indigo-700' 
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {member.role === 'ADMIN' ? (
                      <ShieldCheck className="h-3 w-3 mr-1" />
                    ) : (
                      <Shield className="h-3 w-3 mr-1" />
                    )}
                    {member.role}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-indigo-600 rounded-xl">
                    Manage
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

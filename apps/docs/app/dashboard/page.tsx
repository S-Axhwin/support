"use client";
import { useEffect, useState } from "react";
import {
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  DollarSign,
  Home,
  Menu,
  Search,
  Users,
} from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { ChartDemo } from "../comp/ChartDemo";

export default function ConsultantDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [appointments, setAppointmenat] = useState([]);
  useEffect(() => {
    (async () => {
      const raw = await fetch("/api/appointments");
      const jsonData = await raw.json();
      console.log(jsonData.appointments);
      setAppointmenat(jsonData.appointments);
    })();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white w-64 min-h-screen p-4 ${isSidebarOpen ? "block" : "hidden"} md:block`}
      >
        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg font-medium hover:bg-gray-200 bg-gray-200"
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg font-medium hover:bg-gray-200"
              >
                <Users className="h-5 w-5" />
                <span>Clients</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg font-medium hover:bg-gray-200"
              >
                <Calendar className="h-5 w-5" />
                <span>Appointments</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-700 p-2 rounded-lg font-medium hover:bg-gray-200"
              >
                <Clock className="h-5 w-5" />
                <span>Time Tracking</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="ghost" size="icon">
                <Bell className="h-6 w-6" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="ml-3 flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
                      alt="User avatar"
                    />
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">
              Dashboard
            </h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Clients
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">128</div>
                  <p className="text-xs text-muted-foreground">
                    +4 new this month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Billable Hours
                  </CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">240</div>
                  <p className="text-xs text-muted-foreground">
                    +20% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Appointments
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {appointments.length}
                  </div>
                  <p className="text-xs text-muted-foreground">Next 7 days</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Clients and Billable Hours Chart */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-8">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Recent Clients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2].map((client, index) => {
                      console.log(client);

                      return (
                        <div key={index} className="flex items-center">
                          <div className="w-9 h-9 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                            {client?.patient?.email}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-medium">{client}</h3>
                            <p className="text-xs text-gray-500">
                              Last contact: 2 days ago
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
              <ChartDemo />
            </div>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...appointments].map((appointment, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 mr-3 flex items-center justify-center">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">
                          {appointment?.patient.email}
                        </h3>
                        <p className="text-xs text-gray-500">
                          Tomorrow at 10:00 AM
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

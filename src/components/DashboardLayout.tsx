import { useState } from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  BookOpen, 
  BarChart3, 
  Settings,
  Plus,
  Bell,
  Search,
  User
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from './ui/sidebar';

const navigationItems = [
  { name: 'Dashboard', href: '#', icon: Home, current: true },
  { name: 'Patient Management', href: '#patients', icon: Users, current: false },
  { name: 'Scheduling', href: '#scheduling', icon: Calendar, current: false },
  { name: 'Content & Recipes', href: '#content', icon: BookOpen, current: false },
  { name: 'Analytics', href: '#analytics', icon: BarChart3, current: false },
  { name: 'Settings', href: '#settings', icon: Settings, current: false },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentView: string;
  onViewChange: (view: string) => void;
}

export function DashboardLayout({ children, currentView, onViewChange }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-white">
        <Sidebar variant="inset" className="border-r">
          <SidebarContent>
            <div className="p-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Plus className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-sidebar-foreground">Hope Center</h2>
                  <p className="text-xs text-sidebar-foreground/70">Healthcare Dashboard</p>
                </div>
              </div>
            </div>
            
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton 
                        onClick={() => onViewChange(item.href.slice(1) || 'dashboard')}
                        isActive={currentView === (item.href.slice(1) || 'dashboard')}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-auto bg-white">
          <header className="border-b bg-white">
            <div className="flex h-16 items-center px-4 gap-4">
              <SidebarTrigger />
              
              <div className="flex-1 flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search patients, appointments..." 
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Bell className="w-4 h-4 mr-2" />
                  Alerts
                  <Badge variant="destructive" className="ml-2 px-1 text-xs">3</Badge>
                </Button>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="text-sm">
                    <p className="text-foreground">Dr. Sarah Wilson</p>
                    <p className="text-muted-foreground">Administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6 bg-white">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
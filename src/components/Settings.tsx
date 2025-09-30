import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Shield, 
  Users, 
  Building,
  Bell,
  Lock,
  Key,
  Upload,
  Save,
  Download
} from 'lucide-react';

export function Settings() {
  const [showAddStaffDialog, setShowAddStaffDialog] = useState(false);

  const staffMembers = [
    {
      id: '1',
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@hopecenter.com',
      role: 'Administrator',
      department: 'Administration',
      status: 'Active',
      lastLogin: '2 hours ago',
      permissions: ['Full Access']
    },
    {
      id: '2',
      name: 'Dr. Michael Smith',
      email: 'michael.smith@hopecenter.com',
      role: 'Doctor',
      department: 'Nutrition',
      status: 'Active',
      lastLogin: '1 day ago',
      permissions: ['Patient Management', 'Content Management']
    },
    {
      id: '3',
      name: 'Dr. Jennifer Johnson',
      email: 'jennifer.johnson@hopecenter.com',
      role: 'Psychologist',
      department: 'Mental Health',
      status: 'Active',
      lastLogin: '3 hours ago',
      permissions: ['Patient Management', 'Reports']
    },
    {
      id: '4',
      name: 'Chef Maria Martinez',
      email: 'maria.martinez@hopecenter.com',
      role: 'Content Manager',
      department: 'Nutrition',
      status: 'Active',
      lastLogin: '5 hours ago',
      permissions: ['Content Management']
    },
    {
      id: '5',
      name: 'Lisa Chen',
      email: 'lisa.chen@hopecenter.com',
      role: 'Trainer',
      department: 'Fitness',
      status: 'Inactive',
      lastLogin: '1 week ago',
      permissions: ['Content Management', 'Scheduling']
    }
  ];

  const rolePermissions = {
    'Administrator': ['Full Access'],
    'Doctor': ['Patient Management', 'Content Management', 'Scheduling', 'Reports'],
    'Psychologist': ['Patient Management', 'Reports', 'Scheduling'],
    'Content Manager': ['Content Management'],
    'Trainer': ['Content Management', 'Scheduling'],
    'Viewer': ['Reports']
  };

  const systemSettings = [
    { name: 'Patient Data Encryption', enabled: true, description: 'Encrypt all patient data at rest' },
    { name: 'Two-Factor Authentication', enabled: true, description: 'Require 2FA for all staff logins' },
    { name: 'Automatic Backups', enabled: true, description: 'Daily automated data backups' },
    { name: 'Session Timeout', enabled: true, description: 'Auto-logout after 30 minutes of inactivity' },
    { name: 'Audit Logging', enabled: true, description: 'Log all system access and changes' },
    { name: 'Email Notifications', enabled: false, description: 'Send email alerts for critical events' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Settings & Administration</h1>
          <p className="text-muted-foreground">Manage staff accounts, clinic information, and system configuration</p>
        </div>
      </div>

      <Tabs defaultValue="staff" className="space-y-4">
        <TabsList>
          <TabsTrigger value="staff">Staff Management</TabsTrigger>
          <TabsTrigger value="clinic">Clinic Information</TabsTrigger>
          <TabsTrigger value="security">Security & Privacy</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="staff">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3>Staff Accounts</h3>
                <p className="text-sm text-muted-foreground">Manage user accounts and permissions</p>
              </div>
              <Dialog open={showAddStaffDialog} onOpenChange={setShowAddStaffDialog}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Staff Member
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Staff Member</DialogTitle>
                    <DialogDescription>Create a new account for a staff member</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="doctor">Doctor</SelectItem>
                          <SelectItem value="psychologist">Psychologist</SelectItem>
                          <SelectItem value="content-manager">Content Manager</SelectItem>
                          <SelectItem value="trainer">Trainer</SelectItem>
                          <SelectItem value="viewer">Viewer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="administration">Administration</SelectItem>
                          <SelectItem value="nutrition">Nutrition</SelectItem>
                          <SelectItem value="mental-health">Mental Health</SelectItem>
                          <SelectItem value="fitness">Fitness</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" onClick={() => setShowAddStaffDialog(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setShowAddStaffDialog(false)}>
                      Create Account
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Staff Member</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {staffMembers.map((staff) => (
                      <TableRow key={staff.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{staff.name}</p>
                            <p className="text-sm text-muted-foreground">{staff.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{staff.role}</Badge>
                        </TableCell>
                        <TableCell>{staff.department}</TableCell>
                        <TableCell>
                          <Badge variant={staff.status === 'Active' ? 'default' : 'secondary'}>
                            {staff.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{staff.lastLogin}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="outline" size="sm">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Shield className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Role Permissions</CardTitle>
                <CardDescription>Configure what each role can access</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(rolePermissions).map(([role, permissions]) => (
                    <div key={role} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{role}</p>
                        <div className="flex gap-1 mt-1">
                          {permissions.map((permission, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {permission}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="clinic">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Clinic Information
                </CardTitle>
                <CardDescription>Basic information about your clinic</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="clinic-name">Clinic Name</Label>
                  <Input id="clinic-name" defaultValue="Hope Center" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123 Health Street, Medical District, City, State 12345" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="info@hopecenter.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://hopecenter.com" />
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Branding</CardTitle>
                <CardDescription>Customize the appearance of your dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <Plus className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Button variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload New Logo
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded border" />
                    <Input defaultValue="#F2845C" className="w-24" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-secondary rounded border" />
                    <Input defaultValue="#26547C" className="w-24" />
                  </div>
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Update Branding
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Security Settings
                </CardTitle>
                <CardDescription>Configure security and privacy settings for patient data protection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {systemSettings.map((setting, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">{setting.name}</div>
                        <div className="text-xs text-muted-foreground">{setting.description}</div>
                      </div>
                      <Switch checked={setting.enabled} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-4 h-4" />
                  Data Access Controls
                </CardTitle>
                <CardDescription>Manage who can access sensitive patient information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Patient Medical Records</span>
                    <Badge variant="outline">Doctors & Administrators Only</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Financial Information</span>
                    <Badge variant="outline">Administrators Only</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Contact Information</span>
                    <Badge variant="outline">All Staff</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Progress Reports</span>
                    <Badge variant="outline">Care Team</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure when and how staff receive alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3">Patient Alerts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Missed check-ins (3+ days)</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Rapid weight changes</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Low mood scores</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">System Alerts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Failed login attempts</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">System maintenance</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Backup completion</span>
                      <Switch />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3">Delivery Methods</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">In-app notifications</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email notifications</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SMS for critical alerts</span>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
                <CardDescription>Current system status and information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">System Version</span>
                    <span className="text-sm font-medium">v2.1.4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Last Backup</span>
                    <span className="text-sm font-medium">2 hours ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Database Size</span>
                    <span className="text-sm font-medium">2.3 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Active Sessions</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">System Uptime</span>
                    <span className="text-sm font-medium">99.9%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance</CardTitle>
                <CardDescription>System maintenance and backup options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download Backup
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Export User Data
                </Button>
                <Button variant="destructive" className="w-full justify-start">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cache
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
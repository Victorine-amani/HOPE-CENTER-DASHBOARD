import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';
import { 
  Users, 
  Calendar, 
  AlertTriangle, 
  TrendingUp,
  Plus,
  UserPlus,
  CalendarPlus,
  FileText
} from 'lucide-react';

export function DashboardOverview() {
  const [showAddPatientDialog, setShowAddPatientDialog] = useState(false);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const overviewStats = [
    {
      title: 'Active Patients',
      value: '142',
      description: '23 inpatient • 119 outpatient',
      icon: Users,
      trend: '+12% from last month',
      color: 'text-blue-600'
    },
    {
      title: 'Today\'s Sessions',
      value: '28',
      description: '12 consultations • 16 group sessions',
      icon: Calendar,
      trend: '8 completed • 20 upcoming',
      color: 'text-green-600'
    },
    {
      title: 'Alerts',
      value: '7',
      description: 'Missed check-ins and red flags',
      icon: AlertTriangle,
      trend: '3 critical • 4 moderate',
      color: 'text-red-600'
    },
    {
      title: 'Avg Progress',
      value: '73%',
      description: 'Patient goal achievement',
      icon: TrendingUp,
      trend: '+8% improvement this week',
      color: 'text-primary'
    }
  ];

  const recentPatients = [
    { name: 'Emma Rodriguez', status: 'Check-in needed', time: '2 hours ago', priority: 'high' },
    { name: 'Michael Chen', status: 'Session completed', time: '3 hours ago', priority: 'normal' },
    { name: 'Sarah Johnson', status: 'Medication update', time: '5 hours ago', priority: 'medium' },
    { name: 'David Kim', status: 'Progress review', time: '1 day ago', priority: 'normal' },
  ];

  const upcomingSessions = [
    { time: '10:00 AM', patient: 'Lisa Wong', type: 'Nutrition Consultation', status: 'confirmed' },
    { time: '11:30 AM', patient: 'Group Session', type: 'Cooking Workshop', status: 'confirmed' },
    { time: '2:00 PM', patient: 'Alex Thompson', type: 'Psychology Session', status: 'pending' },
    { time: '3:30 PM', patient: 'Maria Garcia', type: 'Fitness Training', status: 'confirmed' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Dr. Wilson. Here's what's happening today.</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={showAddPatientDialog} onOpenChange={setShowAddPatientDialog}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Patient
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Patient</DialogTitle>
                <DialogDescription>Register a new patient in the system</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Enter last name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="patient@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program">Program Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inpatient">Inpatient</SelectItem>
                      <SelectItem value="outpatient">Outpatient</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor">Assigned Doctor</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smith">Dr. Smith</SelectItem>
                      <SelectItem value="johnson">Dr. Johnson</SelectItem>
                      <SelectItem value="wilson">Dr. Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter full address" rows={2} />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="medical-notes">Medical Notes</Label>
                  <Textarea id="medical-notes" placeholder="Any relevant medical history or notes" rows={3} />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setShowAddPatientDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => {
                  setShowAddPatientDialog(false);
                  toast.success('Patient added successfully');
                }}>
                  Add Patient
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
            <DialogTrigger asChild>
              <Button size="sm">
                <CalendarPlus className="w-4 h-4 mr-2" />
                Schedule Session
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Schedule New Session</DialogTitle>
                <DialogDescription>Create a new appointment or group session</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="session-type">Session Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Individual Consultation</SelectItem>
                      <SelectItem value="therapy">Therapy Session</SelectItem>
                      <SelectItem value="nutrition">Nutrition Session</SelectItem>
                      <SelectItem value="group">Group Session</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patient">Patient</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select patient" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emma">Emma Rodriguez</SelectItem>
                      <SelectItem value="michael">Michael Chen</SelectItem>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="session-date">Date</Label>
                  <Input id="session-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="session-time">Time</Label>
                  <Input id="session-time" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="staff">Staff Member</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select staff" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smith">Dr. Smith</SelectItem>
                      <SelectItem value="johnson">Dr. Johnson</SelectItem>
                      <SelectItem value="wilson">Dr. Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="room101">Room 101</SelectItem>
                      <SelectItem value="room203">Room 203</SelectItem>
                      <SelectItem value="kitchen">Kitchen Lab</SelectItem>
                      <SelectItem value="gym">Gym</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="pending">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="session-notes">Session Notes</Label>
                  <Textarea id="session-notes" placeholder="Add any notes or objectives for this session" rows={3} />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setShowScheduleDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => {
                  setShowScheduleDialog(false);
                  toast.success('Session scheduled successfully');
                }}>
                  Schedule Session
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              <p className="text-xs text-green-600 mt-2">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and workflows</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setShowAddPatientDialog(true)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Patient
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => setShowScheduleDialog(true)}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Consultation
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <FileText className="w-4 h-4 mr-2" />
              Review Flagged Cases
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Patient Progress Review
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Patient Activity</CardTitle>
            <CardDescription>Latest updates and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map((patient, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{patient.name}</p>
                      <p className="text-xs text-muted-foreground">{patient.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={patient.priority === 'high' ? 'destructive' : 
                               patient.priority === 'medium' ? 'default' : 'secondary'}
                    >
                      {patient.priority}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{patient.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
          <CardDescription>Upcoming sessions and appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingSessions.map((session, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-sm font-medium text-primary">{session.time}</div>
                  <div>
                    <p className="text-sm font-medium">{session.patient}</p>
                    <p className="text-xs text-muted-foreground">{session.type}</p>
                  </div>
                </div>
                <Badge 
                  variant={session.status === 'confirmed' ? 'default' : 'secondary'}
                >
                  {session.status}
                </Badge>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Session completion rate today</span>
              <span className="text-sm">28.6%</span>
            </div>
            <Progress value={28.6} className="mt-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
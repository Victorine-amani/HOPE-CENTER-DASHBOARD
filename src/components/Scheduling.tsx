import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, CalendarDays } from './ui/calendar';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Clock, 
  Users, 
  MapPin,
  Search,
  Filter
} from 'lucide-react';

export function Scheduling() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<'calendar' | 'list'>('calendar');

  const appointments = [
    {
      id: '1',
      time: '09:00 AM',
      duration: '60 min',
      patient: 'Emma Rodriguez',
      type: 'Nutrition Consultation',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'Weekly progress review'
    },
    {
      id: '2',
      time: '10:30 AM',
      duration: '90 min',
      patient: 'Group Session (8 patients)',
      type: 'Cooking Workshop',
      staff: 'Chef Martinez',
      location: 'Kitchen Lab',
      status: 'confirmed',
      notes: 'Mediterranean cuisine focus'
    },
    {
      id: '3',
      time: '12:00 PM',
      duration: '45 min',
      patient: 'Michael Chen',
      type: 'Psychology Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'pending',
      notes: 'Follow-up on anxiety management'
    },
    {
      id: '4',
      time: '02:00 PM',
      duration: '30 min',
      patient: 'Sarah Johnson',
      type: 'Medical Check-up',
      staff: 'Dr. Wilson',
      location: 'Room 105',
      status: 'confirmed',
      notes: 'Medication review'
    },
    {
      id: '5',
      time: '03:30 PM',
      duration: '60 min',
      patient: 'Group Session (12 patients)',
      type: 'Fitness Training',
      staff: 'Trainer Lisa',
      location: 'Gym',
      status: 'confirmed',
      notes: 'Beginner-friendly workout'
    }
  ];

  const groupSessions = [
    {
      name: 'Cooking Workshop - Mediterranean',
      time: 'Monday, Wednesday, Friday - 10:30 AM',
      capacity: '8/12 enrolled',
      instructor: 'Chef Martinez',
      location: 'Kitchen Lab'
    },
    {
      name: 'Group Therapy - Anxiety Management',
      time: 'Tuesday, Thursday - 2:00 PM',
      capacity: '6/8 enrolled',
      instructor: 'Dr. Johnson',
      location: 'Room 203'
    },
    {
      name: 'Fitness Training - Beginner',
      time: 'Monday through Friday - 3:30 PM',
      capacity: '10/15 enrolled',
      instructor: 'Trainer Lisa',
      location: 'Gym'
    },
    {
      name: 'Mindfulness & Meditation',
      time: 'Daily - 8:00 AM',
      capacity: '15/20 enrolled',
      instructor: 'Dr. Chen',
      location: 'Wellness Room'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'default';
      case 'pending': return 'secondary';
      case 'cancelled': return 'destructive';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Scheduling & Sessions</h1>
          <p className="text-muted-foreground">Manage appointments, group sessions, and resource allocation</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <CalendarIcon className="w-4 h-4 mr-2" />
            Schedule Appointment
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Group Session
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <Button 
            variant={view === 'calendar' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setView('calendar')}
          >
            Calendar View
          </Button>
          <Button 
            variant={view === 'list' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setView('list')}
          >
            List View
          </Button>
        </div>
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search appointments..." className="pl-9" />
          </div>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sessions</SelectItem>
            <SelectItem value="consultation">Consultations</SelectItem>
            <SelectItem value="group">Group Sessions</SelectItem>
            <SelectItem value="therapy">Therapy</SelectItem>
            <SelectItem value="medical">Medical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {view === 'calendar' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
              <CardDescription>Select a date to view appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>
                  {selectedDate?.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="flex items-center gap-2 text-primary min-w-20">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{appointment.time}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium">{appointment.patient}</h4>
                            <p className="text-sm text-muted-foreground">{appointment.type}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {appointment.staff}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {appointment.location}
                              </span>
                              <span>{appointment.duration}</span>
                            </div>
                          </div>
                          <Badge variant={getStatusColor(appointment.status)}>
                            {appointment.status}
                          </Badge>
                        </div>
                        {appointment.notes && (
                          <p className="text-xs text-muted-foreground mt-2 italic">{appointment.notes}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>All Appointments</CardTitle>
              <CardDescription>Complete list of scheduled sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium text-primary">{appointment.time}</div>
                      <div>
                        <p className="text-sm font-medium">{appointment.patient}</p>
                        <p className="text-xs text-muted-foreground">{appointment.type} • {appointment.staff}</p>
                      </div>
                    </div>
                    <Badge variant={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Group Sessions</CardTitle>
              <CardDescription>Ongoing group programs and workshops</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {groupSessions.map((session, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{session.name}</h4>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <CalendarIcon className="w-3 h-3" />
                        {session.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        {session.capacity} • {session.instructor}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {session.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Total Sessions</span>
                <span className="font-medium">28</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Completed</span>
                <span className="font-medium text-green-600">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Upcoming</span>
                <span className="font-medium text-blue-600">20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">No-shows</span>
                <span className="font-medium text-red-600">2</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Room Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Room 101</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Kitchen Lab</span>
                <span className="font-medium">70%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Gym</span>
                <span className="font-medium">60%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Room 203</span>
                <span className="font-medium">45%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">This Week</span>
                <span className="font-medium text-green-600">92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Last Week</span>
                <span className="font-medium">88%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">This Month</span>
                <span className="font-medium">90%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Goal</span>
                <span className="font-medium text-muted-foreground">95%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';
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
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [showGroupSessionDialog, setShowGroupSessionDialog] = useState(false);

  // All appointments with dates
  const allAppointments = [
    // September 1 (Monday)
    {
      id: '1',
      date: new Date(2025, 8, 1),
      time: '09:00 AM',
      duration: '60 min',
      patient: 'David Martinez',
      type: 'Initial Consultation',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'First assessment session'
    },
    {
      id: '2',
      date: new Date(2025, 8, 1),
      time: '02:00 PM',
      duration: '45 min',
      patient: 'Jennifer Lee',
      type: 'Nutrition Session',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'Dietary adjustments discussion'
    },
    // September 2 (Tuesday)
    {
      id: '3',
      date: new Date(2025, 8, 2),
      time: '10:00 AM',
      duration: '60 min',
      patient: 'Robert Taylor',
      type: 'Therapy Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'confirmed',
      notes: 'Weekly therapy appointment'
    },
    {
      id: '4',
      date: new Date(2025, 8, 2),
      time: '03:00 PM',
      duration: '90 min',
      patient: 'Group Session (15 patients)',
      type: 'Mindfulness Workshop',
      staff: 'Dr. Chen',
      location: 'Wellness Room',
      status: 'confirmed',
      notes: 'Meditation and relaxation techniques'
    },
    // September 4 (Thursday)
    {
      id: '5',
      date: new Date(2025, 8, 4),
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
      id: '6',
      date: new Date(2025, 8, 4),
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
      id: '7',
      date: new Date(2025, 8, 4),
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
      id: '8',
      date: new Date(2025, 8, 4),
      time: '02:00 PM',
      duration: '30 min',
      patient: 'Sarah Johnson',
      type: 'Medical Check-up',
      staff: 'Dr. Wilson',
      location: 'Room 105',
      status: 'confirmed',
      notes: 'Medication review'
    },
    // September 5 (Friday)
    {
      id: '9',
      date: new Date(2025, 8, 5),
      time: '09:00 AM',
      duration: '60 min',
      patient: 'Group Session (12 patients)',
      type: 'Fitness Training',
      staff: 'Trainer Lisa',
      location: 'Gym',
      status: 'confirmed',
      notes: 'Beginner-friendly workout'
    },
    {
      id: '10',
      date: new Date(2025, 8, 5),
      time: '11:00 AM',
      duration: '45 min',
      patient: 'Lisa Wong',
      type: 'Nutrition Session',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'Meal planning review'
    },
    {
      id: '11',
      date: new Date(2025, 8, 5),
      time: '02:30 PM',
      duration: '60 min',
      patient: 'James Brown',
      type: 'Therapy Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'confirmed',
      notes: 'Stress management techniques'
    },
    // September 8 (Monday)
    {
      id: '12',
      date: new Date(2025, 8, 8),
      time: '10:00 AM',
      duration: '60 min',
      patient: 'Alex Thompson',
      type: 'Therapy Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'confirmed',
      notes: 'Cognitive behavioral therapy'
    },
    {
      id: '13',
      date: new Date(2025, 8, 8),
      time: '02:30 PM',
      duration: '90 min',
      patient: 'Group Session (10 patients)',
      type: 'Cooking Workshop',
      staff: 'Chef Martinez',
      location: 'Kitchen Lab',
      status: 'confirmed',
      notes: 'Asian cuisine focus'
    },
    // September 9 (Tuesday)
    {
      id: '14',
      date: new Date(2025, 8, 9),
      time: '09:30 AM',
      duration: '45 min',
      patient: 'Patricia Davis',
      type: 'Medical Check-up',
      staff: 'Dr. Wilson',
      location: 'Room 105',
      status: 'confirmed',
      notes: 'Monthly health assessment'
    },
    {
      id: '15',
      date: new Date(2025, 8, 9),
      time: '01:00 PM',
      duration: '60 min',
      patient: 'Kevin White',
      type: 'Nutrition Consultation',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'Diet plan adjustment'
    },
    // September 11 (Thursday)
    {
      id: '16',
      date: new Date(2025, 8, 11),
      time: '10:00 AM',
      duration: '90 min',
      patient: 'Group Session (14 patients)',
      type: 'Fitness Training',
      staff: 'Trainer Lisa',
      location: 'Gym',
      status: 'confirmed',
      notes: 'Cardio and strength training'
    },
    {
      id: '17',
      date: new Date(2025, 8, 11),
      time: '02:00 PM',
      duration: '60 min',
      patient: 'Maria Garcia',
      type: 'Therapy Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'confirmed',
      notes: 'Family counseling session'
    },
    // September 12 (Friday)
    {
      id: '18',
      date: new Date(2025, 8, 12),
      time: '09:00 AM',
      duration: '45 min',
      patient: 'Thomas Anderson',
      type: 'Medical Check-up',
      staff: 'Dr. Wilson',
      location: 'Room 105',
      status: 'confirmed',
      notes: 'Pre-discharge evaluation'
    },
    {
      id: '19',
      date: new Date(2025, 8, 12),
      time: '11:30 AM',
      duration: '90 min',
      patient: 'Group Session (9 patients)',
      type: 'Cooking Workshop',
      staff: 'Chef Martinez',
      location: 'Kitchen Lab',
      status: 'confirmed',
      notes: 'Healthy desserts and snacks'
    },
    // September 15 (Monday)
    {
      id: '20',
      date: new Date(2025, 8, 15),
      time: '08:30 AM',
      duration: '60 min',
      patient: 'Nancy Martinez',
      type: 'Initial Consultation',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'New patient intake'
    },
    {
      id: '21',
      date: new Date(2025, 8, 15),
      time: '01:00 PM',
      duration: '60 min',
      patient: 'Christopher Lee',
      type: 'Therapy Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'pending',
      notes: 'Behavioral assessment'
    },
    // September 16 (Tuesday)
    {
      id: '22',
      date: new Date(2025, 8, 16),
      time: '10:00 AM',
      duration: '45 min',
      patient: 'Rebecca Wilson',
      type: 'Nutrition Session',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'Meal prep guidance'
    },
    {
      id: '23',
      date: new Date(2025, 8, 16),
      time: '03:00 PM',
      duration: '90 min',
      patient: 'Group Session (11 patients)',
      type: 'Mindfulness Workshop',
      staff: 'Dr. Chen',
      location: 'Wellness Room',
      status: 'confirmed',
      notes: 'Breathing exercises and yoga'
    },
    // September 18 (Thursday)
    {
      id: '24',
      date: new Date(2025, 8, 18),
      time: '09:00 AM',
      duration: '60 min',
      patient: 'Daniel Kim',
      type: 'Medical Check-up',
      staff: 'Dr. Wilson',
      location: 'Room 105',
      status: 'confirmed',
      notes: 'Routine physical examination'
    },
    {
      id: '25',
      date: new Date(2025, 8, 18),
      time: '11:00 AM',
      duration: '90 min',
      patient: 'Group Session (13 patients)',
      type: 'Cooking Workshop',
      staff: 'Chef Martinez',
      location: 'Kitchen Lab',
      status: 'confirmed',
      notes: 'International cuisine series'
    },
    {
      id: '26',
      date: new Date(2025, 8, 18),
      time: '02:30 PM',
      duration: '45 min',
      patient: 'Michelle Taylor',
      type: 'Therapy Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'confirmed',
      notes: 'Progress evaluation'
    },
    // September 19 (Friday)
    {
      id: '27',
      date: new Date(2025, 8, 19),
      time: '10:00 AM',
      duration: '60 min',
      patient: 'Group Session (10 patients)',
      type: 'Fitness Training',
      staff: 'Trainer Lisa',
      location: 'Gym',
      status: 'confirmed',
      notes: 'Core strengthening exercises'
    },
    {
      id: '28',
      date: new Date(2025, 8, 19),
      time: '01:00 PM',
      duration: '45 min',
      patient: 'Andrew Clark',
      type: 'Nutrition Session',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'Supplement recommendations'
    },
    // September 22 (Monday)
    {
      id: '29',
      date: new Date(2025, 8, 22),
      time: '09:00 AM',
      duration: '60 min',
      patient: 'Sophia Rodriguez',
      type: 'Initial Consultation',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'Comprehensive health evaluation'
    },
    {
      id: '30',
      date: new Date(2025, 8, 22),
      time: '02:00 PM',
      duration: '60 min',
      patient: 'Brian Moore',
      type: 'Therapy Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'confirmed',
      notes: 'Coping strategies development'
    },
    // September 23 (Tuesday)
    {
      id: '31',
      date: new Date(2025, 8, 23),
      time: '10:30 AM',
      duration: '90 min',
      patient: 'Group Session (12 patients)',
      type: 'Cooking Workshop',
      staff: 'Chef Martinez',
      location: 'Kitchen Lab',
      status: 'confirmed',
      notes: 'Budget-friendly healthy meals'
    },
    {
      id: '32',
      date: new Date(2025, 8, 23),
      time: '03:00 PM',
      duration: '45 min',
      patient: 'Amanda Harris',
      type: 'Medical Check-up',
      staff: 'Dr. Wilson',
      location: 'Room 105',
      status: 'confirmed',
      notes: 'Follow-up appointment'
    },
    // September 25 (Thursday)
    {
      id: '33',
      date: new Date(2025, 8, 25),
      time: '08:00 AM',
      duration: '90 min',
      patient: 'Group Session (16 patients)',
      type: 'Mindfulness Workshop',
      staff: 'Dr. Chen',
      location: 'Wellness Room',
      status: 'confirmed',
      notes: 'Morning meditation session'
    },
    {
      id: '34',
      date: new Date(2025, 8, 25),
      time: '11:00 AM',
      duration: '60 min',
      patient: 'Joshua Martinez',
      type: 'Nutrition Consultation',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'Weight management program'
    },
    {
      id: '35',
      date: new Date(2025, 8, 25),
      time: '02:00 PM',
      duration: '60 min',
      patient: 'Emily Davis',
      type: 'Therapy Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'pending',
      notes: 'Anxiety management follow-up'
    },
    // September 26 (Friday)
    {
      id: '36',
      date: new Date(2025, 8, 26),
      time: '09:30 AM',
      duration: '60 min',
      patient: 'Group Session (11 patients)',
      type: 'Fitness Training',
      staff: 'Trainer Lisa',
      location: 'Gym',
      status: 'confirmed',
      notes: 'Low-impact exercises'
    },
    {
      id: '37',
      date: new Date(2025, 8, 26),
      time: '01:30 PM',
      duration: '45 min',
      patient: 'Matthew Wilson',
      type: 'Medical Check-up',
      staff: 'Dr. Wilson',
      location: 'Room 105',
      status: 'confirmed',
      notes: 'Blood pressure monitoring'
    },
    // September 29 (Monday)
    {
      id: '38',
      date: new Date(2025, 8, 29),
      time: '10:00 AM',
      duration: '60 min',
      patient: 'Olivia Brown',
      type: 'Nutrition Session',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'confirmed',
      notes: 'Dietary goal setting'
    },
    {
      id: '39',
      date: new Date(2025, 8, 29),
      time: '02:30 PM',
      duration: '90 min',
      patient: 'Group Session (9 patients)',
      type: 'Cooking Workshop',
      staff: 'Chef Martinez',
      location: 'Kitchen Lab',
      status: 'confirmed',
      notes: 'Seasonal ingredients workshop'
    },
    // September 30 (Tuesday) - Today's date
    {
      id: '40',
      date: new Date(2025, 8, 30),
      time: '09:00 AM',
      duration: '45 min',
      patient: 'William Taylor',
      type: 'Therapy Session',
      staff: 'Dr. Johnson',
      location: 'Room 203',
      status: 'confirmed',
      notes: 'Weekly check-in session'
    },
    {
      id: '41',
      date: new Date(2025, 8, 30),
      time: '11:00 AM',
      duration: '60 min',
      patient: 'Group Session (14 patients)',
      type: 'Fitness Training',
      staff: 'Trainer Lisa',
      location: 'Gym',
      status: 'confirmed',
      notes: 'Full body workout'
    },
    {
      id: '42',
      date: new Date(2025, 8, 30),
      time: '03:00 PM',
      duration: '45 min',
      patient: 'Isabella Garcia',
      type: 'Nutrition Consultation',
      staff: 'Dr. Smith',
      location: 'Room 101',
      status: 'pending',
      notes: 'Initial nutrition assessment'
    }
  ];

  // Filter appointments for the selected date
  const appointments = selectedDate 
    ? allAppointments.filter(apt => {
        const aptDate = new Date(apt.date);
        return (
          aptDate.getDate() === selectedDate.getDate() &&
          aptDate.getMonth() === selectedDate.getMonth() &&
          aptDate.getFullYear() === selectedDate.getFullYear()
        );
      })
    : [];

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
          <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <CalendarIcon className="w-4 h-4 mr-2" />
                Schedule Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Schedule New Appointment</DialogTitle>
                <DialogDescription>Create a new individual appointment</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="apt-type">Session Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="therapy">Therapy Session</SelectItem>
                      <SelectItem value="nutrition">Nutrition Session</SelectItem>
                      <SelectItem value="medical">Medical Check-up</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apt-patient">Patient</Label>
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
                  <Label htmlFor="apt-date">Date</Label>
                  <Input id="apt-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apt-time">Time</Label>
                  <Input id="apt-time" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apt-duration">Duration</Label>
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
                  <Label htmlFor="apt-staff">Staff Member</Label>
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
                  <Label htmlFor="apt-location">Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="room101">Room 101</SelectItem>
                      <SelectItem value="room203">Room 203</SelectItem>
                      <SelectItem value="room105">Room 105</SelectItem>
                      <SelectItem value="wellness">Wellness Room</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apt-status">Status</Label>
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
                  <Label htmlFor="apt-notes">Session Notes</Label>
                  <Textarea id="apt-notes" placeholder="Add any notes or objectives" rows={3} />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setShowScheduleDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => {
                  setShowScheduleDialog(false);
                  toast.success('Appointment scheduled successfully');
                }}>
                  Schedule Appointment
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Dialog open={showGroupSessionDialog} onOpenChange={setShowGroupSessionDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                New Group Session
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create Group Session</DialogTitle>
                <DialogDescription>Set up a new group session or workshop</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="group-name">Session Name</Label>
                  <Input id="group-name" placeholder="e.g., Cooking Workshop - Mediterranean" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="group-type">Session Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cooking">Cooking Workshop</SelectItem>
                      <SelectItem value="therapy">Group Therapy</SelectItem>
                      <SelectItem value="fitness">Fitness Training</SelectItem>
                      <SelectItem value="meditation">Mindfulness & Meditation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="group-instructor">Instructor</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select instructor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="martinez">Chef Martinez</SelectItem>
                      <SelectItem value="johnson">Dr. Johnson</SelectItem>
                      <SelectItem value="lisa">Trainer Lisa</SelectItem>
                      <SelectItem value="chen">Dr. Chen</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="group-schedule">Schedule</Label>
                  <Input id="group-schedule" placeholder="e.g., Monday, Wednesday - 10:30 AM" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="group-duration">Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                      <SelectItem value="120">120 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="group-location">Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kitchen">Kitchen Lab</SelectItem>
                      <SelectItem value="gym">Gym</SelectItem>
                      <SelectItem value="room203">Room 203</SelectItem>
                      <SelectItem value="wellness">Wellness Room</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="group-capacity">Capacity</Label>
                  <Input id="group-capacity" type="number" placeholder="e.g., 12" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="group-description">Description</Label>
                  <Textarea id="group-description" placeholder="Describe the session focus and objectives" rows={3} />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setShowGroupSessionDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => {
                  setShowGroupSessionDialog(false);
                  toast.success('Group session created successfully');
                }}>
                  Create Session
                </Button>
              </div>
            </DialogContent>
          </Dialog>
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
                {appointments.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CalendarIcon className="w-12 h-12 text-muted-foreground mb-4" />
                    <h3 className="text-muted-foreground mb-2">No appointments scheduled</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      There are no appointments for this date
                    </p>
                    <Button onClick={() => setShowScheduleDialog(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Schedule Appointment
                    </Button>
                  </div>
                ) : (
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
                )}
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
                {allAppointments.map((appointment) => (
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">Manage</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Manage Group Session</DialogTitle>
                            <DialogDescription>Update session details and enrollment</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label>Session Name</Label>
                                <Input defaultValue={session.name} />
                              </div>
                              <div className="space-y-2">
                                <Label>Instructor</Label>
                                <Input defaultValue={session.instructor} />
                              </div>
                              <div className="space-y-2">
                                <Label>Schedule</Label>
                                <Input defaultValue={session.time} />
                              </div>
                              <div className="space-y-2">
                                <Label>Location</Label>
                                <Select defaultValue={session.location.toLowerCase().replace(' ', '-')}>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="kitchen-lab">Kitchen Lab</SelectItem>
                                    <SelectItem value="gym">Gym</SelectItem>
                                    <SelectItem value="room-203">Room 203</SelectItem>
                                    <SelectItem value="wellness-room">Wellness Room</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="col-span-2 space-y-2">
                                <Label>Current Enrollment</Label>
                                <p className="text-sm text-muted-foreground">{session.capacity}</p>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label>Session Status</Label>
                              <Select defaultValue="active">
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="active">Active</SelectItem>
                                  <SelectItem value="full">Full - No New Enrollments</SelectItem>
                                  <SelectItem value="paused">Paused</SelectItem>
                                  <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div className="flex justify-end gap-2 mt-4">
                            <Button variant="outline" type="button">
                              Cancel
                            </Button>
                            <Button type="button" onClick={() => toast.success('Session updated successfully')}>
                              Save Changes
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
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
            <CardTitle>Staff Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Dr. Smith</span>
                <Badge variant="default">Available</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Dr. Johnson</span>
                <Badge variant="secondary">In Session</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Chef Martinez</span>
                <Badge variant="default">Available</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Trainer Lisa</span>
                <Badge variant="secondary">In Session</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
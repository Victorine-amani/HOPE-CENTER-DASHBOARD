import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { 
  Search, 
  Filter, 
  Plus, 
  Eye, 
  Edit, 
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  Users,
  Heart,
  Activity
} from 'lucide-react';

export function PatientManagement() {
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [showAddPatientDialog, setShowAddPatientDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showFilterDialog, setShowFilterDialog] = useState(false);

  const patients = [
    {
      id: '1',
      name: 'Emma Rodriguez',
      age: 28,
      gender: 'Female',
      program: 'Inpatient',
      status: 'Active',
      doctor: 'Dr. Smith',
      admissionDate: '2024-01-15',
      lastCheckIn: '2 hours ago',
      progress: 78,
      weight: '65 kg',
      bmi: '23.2',
      phone: '(555) 123-4567',
      email: 'emma.r@email.com'
    },
    {
      id: '2',
      name: 'Michael Chen',
      age: 35,
      gender: 'Male',
      program: 'Outpatient',
      status: 'Active',
      doctor: 'Dr. Johnson',
      admissionDate: '2024-02-20',
      lastCheckIn: '1 day ago',
      progress: 65,
      weight: '80 kg',
      bmi: '26.8',
      phone: '(555) 234-5678',
      email: 'michael.c@email.com'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      age: 42,
      gender: 'Female',
      program: 'Inpatient',
      status: 'Needs Attention',
      doctor: 'Dr. Wilson',
      admissionDate: '2024-01-08',
      lastCheckIn: '3 days ago',
      progress: 45,
      weight: '72 kg',
      bmi: '27.1',
      phone: '(555) 345-6789',
      email: 'sarah.j@email.com'
    },
  ];

  const selectedPatientData = patients.find(p => p.id === selectedPatient);

  const treatmentPlan = [
    { phase: 'Medical Stabilization', status: 'completed', duration: '2 weeks' },
    { phase: 'Nutritional Rehabilitation', status: 'in-progress', duration: '4 weeks' },
    { phase: 'Psychological Therapy', status: 'in-progress', duration: '6 weeks' },
    { phase: 'Maintenance & Follow-up', status: 'pending', duration: '8 weeks' },
  ];

  const recentLogs = [
    { date: '2024-03-15', type: 'Weight', value: '65.2 kg', trend: 'up' },
    { date: '2024-03-15', type: 'Mood', value: '7/10', trend: 'stable' },
    { date: '2024-03-14', type: 'Meals', value: '3/3 logged', trend: 'up' },
    { date: '2024-03-14', type: 'Exercise', value: '45 min', trend: 'up' },
  ];

  if (selectedPatient && selectedPatientData) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => setSelectedPatient(null)}>
              ← Back to Patient List
            </Button>
            <div>
              <h1>{selectedPatientData.name}</h1>
              <p className="text-muted-foreground">Patient ID: {selectedPatientData.id} • {selectedPatientData.program} Program</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
            <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Edit Patient Profile</DialogTitle>
                  <DialogDescription>Update patient information and treatment details</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-name">Full Name</Label>
                    <Input id="edit-name" defaultValue={selectedPatientData?.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-age">Age</Label>
                    <Input id="edit-age" type="number" defaultValue={selectedPatientData?.age} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-phone">Phone</Label>
                    <Input id="edit-phone" defaultValue={selectedPatientData?.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-email">Email</Label>
                    <Input id="edit-email" type="email" defaultValue={selectedPatientData?.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-program">Program</Label>
                    <Select defaultValue={selectedPatientData?.program.toLowerCase()}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inpatient">Inpatient</SelectItem>
                        <SelectItem value="outpatient">Outpatient</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-status">Status</Label>
                    <Select defaultValue={selectedPatientData?.status.toLowerCase()}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="needs attention">Needs Attention</SelectItem>
                        <SelectItem value="discharged">Discharged</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-doctor">Assigned Doctor</Label>
                    <Select defaultValue="smith">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smith">Dr. Smith</SelectItem>
                        <SelectItem value="johnson">Dr. Johnson</SelectItem>
                        <SelectItem value="wilson">Dr. Wilson</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-weight">Current Weight (kg)</Label>
                    <Input id="edit-weight" defaultValue={selectedPatientData?.weight.replace(' kg', '')} />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="edit-notes">Medical Notes</Label>
                    <Textarea id="edit-notes" rows={3} placeholder="Add any updates or notes" />
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline" onClick={() => setShowEditDialog(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => {
                    setShowEditDialog(false);
                    toast.success('Patient profile updated successfully');
                  }}>
                    Save Changes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Patient Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-sm text-muted-foreground">Age & Gender</label>
                <p>{selectedPatientData.age} years old, {selectedPatientData.gender}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Primary Doctor</label>
                <p>{selectedPatientData.doctor}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Admission Date</label>
                <p>{selectedPatientData.admissionDate}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Contact</label>
                <p className="text-sm">{selectedPatientData.phone}</p>
                <p className="text-sm">{selectedPatientData.email}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Current Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <label className="text-sm text-muted-foreground">Weight</label>
                <p className="text-2xl font-bold">{selectedPatientData.weight}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">BMI</label>
                <p className="text-xl">{selectedPatientData.bmi}</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Last Check-in</label>
                <p>{selectedPatientData.lastCheckIn}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Overall Progress</span>
                  <span className="text-sm">{selectedPatientData.progress}%</span>
                </div>
                <Progress value={selectedPatientData.progress} />
              </div>
              <div className="mt-4">
                <Badge 
                  variant={selectedPatientData.status === 'Active' ? 'default' : 'destructive'}
                >
                  {selectedPatientData.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="treatment-plan" className="space-y-4">
          <TabsList>
            <TabsTrigger value="treatment-plan">Treatment Plan</TabsTrigger>
            <TabsTrigger value="logs">Patient Logs</TabsTrigger>
            <TabsTrigger value="notes">Staff Notes</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
          </TabsList>

          <TabsContent value="treatment-plan">
            <Card>
              <CardHeader>
                <CardTitle>Treatment Plan Timeline</CardTitle>
                <CardDescription>Current phase and upcoming milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {treatmentPlan.map((phase, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                      <div className={`w-3 h-3 rounded-full ${
                        phase.status === 'completed' ? 'bg-green-500' :
                        phase.status === 'in-progress' ? 'bg-primary' : 'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium">{phase.phase}</p>
                        <p className="text-sm text-muted-foreground">{phase.duration}</p>
                      </div>
                      <Badge 
                        variant={
                          phase.status === 'completed' ? 'default' :
                          phase.status === 'in-progress' ? 'secondary' : 'outline'
                        }
                      >
                        {phase.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logs">
            <Card>
              <CardHeader>
                <CardTitle>Recent Logs from Patient App</CardTitle>
                <CardDescription>Weight, mood, food entries, and activity data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentLogs.map((log, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium">{log.type}</p>
                          <p className="text-sm text-muted-foreground">{log.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{log.value}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          log.trend === 'up' ? 'bg-green-500' : 'bg-gray-400'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes">
            <Card>
              <CardHeader>
                <CardTitle>Staff Notes</CardTitle>
                <CardDescription>Notes from doctors, nutritionists, and therapists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Dr. Smith - Nutrition Consultation</span>
                      <span className="text-sm text-muted-foreground">March 14, 2024</span>
                    </div>
                    <p className="text-sm">Patient showing good progress with meal plan compliance. Weight gain is within target range. Continue current nutrition protocol.</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Dr. Johnson - Therapy Session</span>
                      <span className="text-sm text-muted-foreground">March 12, 2024</span>
                    </div>
                    <p className="text-sm">Positive engagement in group therapy. Patient expressed concerns about social eating situations. Recommended additional coping strategies.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions">
            <Card>
              <CardHeader>
                <CardTitle>Session History</CardTitle>
                <CardDescription>Attendance and participation records</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Staff</TableHead>
                      <TableHead>Attendance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>March 15, 2024</TableCell>
                      <TableCell>Nutrition Consultation</TableCell>
                      <TableCell>Dr. Smith</TableCell>
                      <TableCell><Badge variant="default">Attended</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>March 14, 2024</TableCell>
                      <TableCell>Group Therapy</TableCell>
                      <TableCell>Dr. Johnson</TableCell>
                      <TableCell><Badge variant="default">Attended</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>March 13, 2024</TableCell>
                      <TableCell>Cooking Workshop</TableCell>
                      <TableCell>Chef Martinez</TableCell>
                      <TableCell><Badge variant="destructive">Missed</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Patient Management</h1>
          <p className="text-muted-foreground">Manage patient records, treatment plans, and progress tracking</p>
        </div>
        <Dialog open={showAddPatientDialog} onOpenChange={setShowAddPatientDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Patient
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
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search patients..." className="pl-9" />
        </div>
        <Dialog open={showFilterDialog} onOpenChange={setShowFilterDialog}>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Filter Patients</DialogTitle>
              <DialogDescription>Filter patient list by various criteria</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Program Type</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="inpatient" />
                    <label htmlFor="inpatient" className="text-sm cursor-pointer">Inpatient</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="outpatient" />
                    <label htmlFor="outpatient" className="text-sm cursor-pointer">Outpatient</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="active" />
                    <label htmlFor="active" className="text-sm cursor-pointer">Active</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="needs-attention" />
                    <label htmlFor="needs-attention" className="text-sm cursor-pointer">Needs Attention</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="discharged" />
                    <label htmlFor="discharged" className="text-sm cursor-pointer">Discharged</label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="doctor-filter">Doctor</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All doctors" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Doctors</SelectItem>
                    <SelectItem value="smith">Dr. Smith</SelectItem>
                    <SelectItem value="johnson">Dr. Johnson</SelectItem>
                    <SelectItem value="wilson">Dr. Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="progress-filter">Progress Range</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All ranges" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ranges</SelectItem>
                    <SelectItem value="high">High (75-100%)</SelectItem>
                    <SelectItem value="medium">Medium (50-74%)</SelectItem>
                    <SelectItem value="low">Low (0-49%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowFilterDialog(false)}>
                Clear Filters
              </Button>
              <Button onClick={() => {
                setShowFilterDialog(false);
                toast.success('Filters applied');
              }}>
                Apply Filters
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient List</CardTitle>
          <CardDescription>Active patients in both inpatient and outpatient programs</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Last Check-in</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.age} years, {patient.gender}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={patient.program === 'Inpatient' ? 'default' : 'secondary'}>
                      {patient.program}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={patient.status === 'Active' ? 'default' : 'destructive'}>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{patient.doctor}</TableCell>
                  <TableCell>{patient.lastCheckIn}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={patient.progress} className="w-16" />
                      <span className="text-sm">{patient.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedPatient(patient.id)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
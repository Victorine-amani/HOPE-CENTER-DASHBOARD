import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
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
            <Button size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
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
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search patients..." className="pl-9" />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
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
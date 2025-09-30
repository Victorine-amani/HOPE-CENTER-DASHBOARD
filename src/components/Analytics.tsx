import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner@2.0.3';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Calendar,
  Activity,
  Heart,
  Download,
  Filter
} from 'lucide-react';

export function Analytics() {
  const [showExportDialog, setShowExportDialog] = useState(false);
  const overallMetrics = [
    {
      title: 'Total Active Patients',
      value: '142',
      change: '+12%',
      trend: 'up',
      description: 'vs last month'
    },
    {
      title: 'Average Weight Progress',
      value: '73%',
      change: '+8%',
      trend: 'up',
      description: 'goal achievement'
    },
    {
      title: 'App Engagement Rate',
      value: '89%',
      change: '+5%',
      trend: 'up',
      description: 'daily active users'
    },
    {
      title: 'Session Attendance',
      value: '92%',
      change: '-2%',
      trend: 'down',
      description: 'this month'
    }
  ];

  const programMetrics = [
    {
      program: 'Inpatient Program',
      patients: 23,
      avgProgress: 78,
      completionRate: 85,
      avgStay: '6 weeks'
    },
    {
      program: 'Outpatient Program', 
      patients: 119,
      avgProgress: 71,
      completionRate: 79,
      avgStay: '12 weeks'
    }
  ];

  const engagementData = [
    { metric: 'Daily Logins', value: '89%', target: '90%', status: 'good' },
    { metric: 'Meal Logging', value: '76%', target: '80%', status: 'warning' },
    { metric: 'Weight Tracking', value: '83%', target: '85%', status: 'good' },
    { metric: 'Mood Check-ins', value: '67%', target: '75%', status: 'warning' },
    { metric: 'Exercise Logging', value: '72%', target: '70%', status: 'excellent' },
    { metric: 'Recipe Views', value: '91%', target: '80%', status: 'excellent' }
  ];

  const recentAlerts = [
    {
      type: 'critical',
      message: '3 patients missed check-ins for 3+ days',
      time: '2 hours ago'
    },
    {
      type: 'warning',
      message: 'Meal logging rate dropped 5% this week',
      time: '1 day ago'
    },
    {
      type: 'info',
      message: 'New patient cohort starting next week (8 patients)',
      time: '2 days ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'warning': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Analytics & Reports</h1>
          <p className="text-muted-foreground">Patient progress, engagement metrics, and outcome analysis</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Dialog open={showExportDialog} onOpenChange={setShowExportDialog}>
            <DialogTrigger asChild>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Export Analytics Report</DialogTitle>
                <DialogDescription>Select report type and date range to export</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="report-type">Report Type</Label>
                  <Select defaultValue="overview">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="overview">Overview Report</SelectItem>
                      <SelectItem value="patient-progress">Patient Progress Report</SelectItem>
                      <SelectItem value="engagement">Engagement Metrics</SelectItem>
                      <SelectItem value="outcomes">Treatment Outcomes</SelectItem>
                      <SelectItem value="complete">Complete Analytics Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-range">Date Range</Label>
                  <Select defaultValue="month">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                      <SelectItem value="quarter">This Quarter</SelectItem>
                      <SelectItem value="year">This Year</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="format">Export Format</Label>
                  <Select defaultValue="pdf">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF Document</SelectItem>
                      <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                      <SelectItem value="csv">CSV File</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Include Sections</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include-metrics" defaultChecked />
                      <label htmlFor="include-metrics" className="text-sm cursor-pointer">Key Metrics</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include-charts" defaultChecked />
                      <label htmlFor="include-charts" className="text-sm cursor-pointer">Charts & Graphs</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include-patient-list" />
                      <label htmlFor="include-patient-list" className="text-sm cursor-pointer">Patient List</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include-recommendations" defaultChecked />
                      <label htmlFor="include-recommendations" className="text-sm cursor-pointer">Recommendations</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setShowExportDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => {
                  setShowExportDialog(false);
                  toast.success('Report exported successfully');
                }}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overallMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              {metric.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-600" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-600" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
              <p className={`text-xs mt-2 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change} {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patient-progress">Patient Progress</TabsTrigger>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Program Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Program Performance</CardTitle>
                <CardDescription>Inpatient vs Outpatient outcomes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {programMetrics.map((program, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{program.program}</h4>
                        <Badge variant="outline">{program.patients} patients</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Avg Progress</p>
                          <div className="flex items-center gap-2">
                            <Progress value={program.avgProgress} className="flex-1" />
                            <span className="font-medium">{program.avgProgress}%</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Completion Rate</p>
                          <p className="font-medium">{program.completionRate}%</p>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p className="text-muted-foreground">Average Duration: <span className="font-medium">{program.avgStay}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Important notifications and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === 'critical' ? 'bg-red-500' :
                        alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <p className="text-xs text-muted-foreground">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="patient-progress">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>Weight Progress Distribution</CardTitle>
                <CardDescription>Patient progress ranges across the program</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Excellent Progress (80-100%)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={32} className="w-32" />
                      <span className="text-sm font-medium">32%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Good Progress (60-79%)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={45} className="w-32" />
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Moderate Progress (40-59%)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={18} className="w-32" />
                      <span className="text-sm font-medium">18%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Needs Attention (0-39%)</span>
                    <div className="flex items-center gap-2">
                      <Progress value={5} className="w-32" />
                      <span className="text-sm font-medium">5%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Metrics</CardTitle>
                <CardDescription>This month's highlights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Average Weight Loss</p>
                      <p className="text-lg font-bold">2.3 kg</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">BMI Improvement</p>
                      <p className="text-lg font-bold">-1.8 points</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Mood Score</p>
                      <p className="text-lg font-bold">7.2/10</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement">
          <Card>
            <CardHeader>
              <CardTitle>App Engagement Metrics</CardTitle>
              <CardDescription>Patient interaction with the mobile application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {engagementData.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{item.metric}</span>
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">{item.value}</span>
                        <span className="text-sm text-muted-foreground">Target: {item.target}</span>
                      </div>
                      <Progress 
                        value={parseInt(item.value)} 
                        className="h-2" 
                      />
                      <p className={`text-xs ${getStatusTextColor(item.status)} capitalize`}>
                        {item.status === 'excellent' ? 'Exceeding target' :
                         item.status === 'good' ? 'On track' :
                         item.status === 'warning' ? 'Below target' : 'Critical'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="outcomes">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Treatment Outcomes</CardTitle>
                <CardDescription>Success rates and clinical improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Weight Goals Achieved</span>
                      <span className="font-medium">73%</span>
                    </div>
                    <Progress value={73} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Behavioral Changes Sustained</span>
                      <span className="font-medium">68%</span>
                    </div>
                    <Progress value={68} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Psychological Wellbeing Improved</span>
                      <span className="font-medium">82%</span>
                    </div>
                    <Progress value={82} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Program Completion Rate</span>
                      <span className="font-medium">79%</span>
                    </div>
                    <Progress value={79} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Utilization</CardTitle>
                <CardDescription>Staff and facility usage optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Staff Utilization</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Room Occupancy</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Session Efficiency</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cost per Patient</span>
                    <span className="font-medium">$2,340</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">ROI (6-month follow-up)</span>
                    <span className="font-medium text-green-600">+284%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
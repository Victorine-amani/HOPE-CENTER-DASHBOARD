import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2,
  Upload,
  BookOpen,
  Video,
  FileText,
  Clock,
  DollarSign,
  Users,
  ChefHat
} from 'lucide-react';

export function ContentManagement() {
  const [activeTab, setActiveTab] = useState('recipes');
  const [showAddRecipeDialog, setShowAddRecipeDialog] = useState(false);
  const [showUploadContentDialog, setShowUploadContentDialog] = useState(false);

  const recipes = [
    {
      id: '1',
      title: 'Mediterranean Quinoa Bowl',
      category: 'Lunch',
      difficulty: 'Easy',
      prepTime: '20 min',
      servings: '2',
      calories: '380',
      tags: ['Budget-friendly', 'Vegetarian', 'High-protein'],
      status: 'Published',
      views: 156,
      assigned: 23,
      created: '2024-03-10'
    },
    {
      id: '2',
      title: 'Grilled Chicken with Herbs',
      category: 'Dinner',
      difficulty: 'Medium',
      prepTime: '35 min',
      servings: '4',
      calories: '320',
      tags: ['High-protein', 'Low-carb'],
      status: 'Published',
      views: 89,
      assigned: 15,
      created: '2024-03-08'
    },
    {
      id: '3',
      title: 'Overnight Oats with Berries',
      category: 'Breakfast',
      difficulty: 'Easy',
      prepTime: '5 min',
      servings: '1',
      calories: '290',
      tags: ['Quick', 'Make-ahead', 'Fiber-rich'],
      status: 'Draft',
      views: 0,
      assigned: 0,
      created: '2024-03-15'
    }
  ];

  const educationalContent = [
    {
      id: '1',
      title: 'Understanding Portion Sizes',
      type: 'Article',
      category: 'Nutrition Education',
      readTime: '8 min',
      status: 'Published',
      views: 234,
      assigned: 45,
      created: '2024-03-05'
    },
    {
      id: '2',
      title: 'Mindful Eating Techniques',
      type: 'Video',
      category: 'Mental Health',
      readTime: '15 min',
      status: 'Published',
      views: 178,
      assigned: 32,
      created: '2024-03-01'
    },
    {
      id: '3',
      title: 'Meal Planning Basics',
      type: 'PDF Guide',
      category: 'Practical Skills',
      readTime: '12 min',
      status: 'Published',
      views: 156,
      assigned: 28,
      created: '2024-02-28'
    }
  ];

  const contentStats = [
    { label: 'Total Recipes', value: '47', change: '+5 this week' },
    { label: 'Educational Articles', value: '23', change: '+2 this week' },
    { label: 'Video Content', value: '12', change: 'No change' },
    { label: 'Patient Engagement', value: '89%', change: '+3% this month' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1>Content & Recipe Management</h1>
          <p className="text-muted-foreground">Create, manage, and assign recipes and educational content to patients</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={showAddRecipeDialog} onOpenChange={setShowAddRecipeDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Recipe
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Recipe</DialogTitle>
                <DialogDescription>Create a new recipe for the patient app</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Recipe Title</Label>
                  <Input id="title" placeholder="Enter recipe title..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="breakfast">Breakfast</SelectItem>
                      <SelectItem value="lunch">Lunch</SelectItem>
                      <SelectItem value="dinner">Dinner</SelectItem>
                      <SelectItem value="snack">Snack</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prep-time">Prep Time</Label>
                  <Input id="prep-time" placeholder="e.g., 20 min" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="servings">Servings</Label>
                  <Input id="servings" placeholder="e.g., 4" />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="ingredients">Ingredients</Label>
                  <Textarea id="ingredients" placeholder="List ingredients, one per line..." rows={4} />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="instructions">Instructions</Label>
                  <Textarea id="instructions" placeholder="Step-by-step cooking instructions..." rows={6} />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="Budget-friendly, Vegetarian, Quick..." />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setShowAddRecipeDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowAddRecipeDialog(false)}>
                  Save Recipe
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={showUploadContentDialog} onOpenChange={setShowUploadContentDialog}>
            <DialogTrigger asChild>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Upload Content
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Upload Educational Content</DialogTitle>
                <DialogDescription>Add articles, videos, or guides for patients</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="content-title">Content Title</Label>
                    <Input id="content-title" placeholder="Enter title" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content-type">Content Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="article">Article</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="pdf">PDF Guide</SelectItem>
                        <SelectItem value="audio">Audio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content-category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nutrition">Nutrition Education</SelectItem>
                        <SelectItem value="mental-health">Mental Health</SelectItem>
                        <SelectItem value="practical">Practical Skills</SelectItem>
                        <SelectItem value="wellness">General Wellness</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content-duration">Duration/Read Time</Label>
                    <Input id="content-duration" placeholder="e.g., 10 min" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content-description">Description</Label>
                  <Textarea id="content-description" placeholder="Brief description of the content" rows={3} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content-file">Upload File or URL</Label>
                  <Input id="content-file" placeholder="Enter URL or select file" />
                  <Button variant="outline" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Browse Files
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content-tags">Tags</Label>
                  <Input id="content-tags" placeholder="Separate tags with commas" />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setShowUploadContentDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => {
                  setShowUploadContentDialog(false);
                  toast.success('Content uploaded successfully');
                }}>
                  Upload Content
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {contentStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className="text-primary">
                  {index === 0 && <ChefHat className="w-6 h-6" />}
                  {index === 1 && <BookOpen className="w-6 h-6" />}
                  {index === 2 && <Video className="w-6 h-6" />}
                  {index === 3 && <Users className="w-6 h-6" />}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
            <TabsTrigger value="educational">Educational Content</TabsTrigger>
            <TabsTrigger value="assignments">Content Assignments</TabsTrigger>
            <TabsTrigger value="analytics">Content Analytics</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search content..." className="pl-9 w-64" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <TabsContent value="recipes">
          <Card>
            <CardHeader>
              <CardTitle>Recipe Library</CardTitle>
              <CardDescription>Manage recipes for the patient app</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Recipe</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recipes.map((recipe) => (
                    <TableRow key={recipe.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{recipe.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {recipe.servings} servings • {recipe.calories} cal
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>{recipe.category}</TableCell>
                      <TableCell>
                        <Badge variant={recipe.difficulty === 'Easy' ? 'default' : 'secondary'}>
                          {recipe.difficulty}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {recipe.prepTime}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1 flex-wrap">
                          {recipe.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {recipe.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{recipe.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={recipe.status === 'Published' ? 'default' : 'secondary'}>
                          {recipe.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{recipe.views} views</p>
                          <p className="text-muted-foreground">{recipe.assigned} assigned</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
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
        </TabsContent>

        <TabsContent value="educational">
          <Card>
            <CardHeader>
              <CardTitle>Educational Content</CardTitle>
              <CardDescription>Articles, videos, and guides for patient education</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Content</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {educationalContent.map((content) => (
                    <TableRow key={content.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {content.type === 'Article' && <FileText className="w-4 h-4 text-primary" />}
                          {content.type === 'Video' && <Video className="w-4 h-4 text-primary" />}
                          {content.type === 'PDF Guide' && <BookOpen className="w-4 h-4 text-primary" />}
                          <div>
                            <p className="font-medium">{content.title}</p>
                            <p className="text-sm text-muted-foreground">{content.type}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{content.type}</Badge>
                      </TableCell>
                      <TableCell>{content.category}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {content.readTime}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">{content.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>{content.views} views</p>
                          <p className="text-muted-foreground">{content.assigned} assigned</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
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
        </TabsContent>

        <TabsContent value="assignments">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Assign Content to Patients</CardTitle>
                <CardDescription>Personalize content delivery based on treatment plans</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Patient</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose patient..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emma">Emma Rodriguez</SelectItem>
                      <SelectItem value="michael">Michael Chen</SelectItem>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Content Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recipe">Recipe</SelectItem>
                      <SelectItem value="article">Article</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Specific Content</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose content..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quinoa-bowl">Mediterranean Quinoa Bowl</SelectItem>
                      <SelectItem value="portions">Understanding Portion Sizes</SelectItem>
                      <SelectItem value="mindful">Mindful Eating Techniques</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full">Assign Content</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Assignments</CardTitle>
                <CardDescription>Latest content assigned to patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Mediterranean Quinoa Bowl</p>
                      <p className="text-xs text-muted-foreground">Assigned to Emma Rodriguez</p>
                    </div>
                    <Badge variant="outline">Recipe</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Mindful Eating Techniques</p>
                      <p className="text-xs text-muted-foreground">Assigned to Michael Chen</p>
                    </div>
                    <Badge variant="outline">Video</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Understanding Portion Sizes</p>
                      <p className="text-xs text-muted-foreground">Assigned to Sarah Johnson</p>
                    </div>
                    <Badge variant="outline">Article</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>Most viewed and engaged content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Understanding Portion Sizes</p>
                      <p className="text-sm text-muted-foreground">234 views • 45 assignments</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">92% completion</p>
                      <p className="text-xs text-green-600">+15% vs last month</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Mindful Eating Techniques</p>
                      <p className="text-sm text-muted-foreground">178 views • 32 assignments</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">87% completion</p>
                      <p className="text-xs text-green-600">+8% vs last month</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Mediterranean Quinoa Bowl</p>
                      <p className="text-sm text-muted-foreground">156 views • 23 assignments</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">78% tried</p>
                      <p className="text-xs text-green-600">+12% vs last month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Patient Engagement</CardTitle>
                <CardDescription>How patients interact with assigned content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average view time</span>
                    <span className="font-medium">6.2 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Content completion rate</span>
                    <span className="font-medium text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Recipe attempt rate</span>
                    <span className="font-medium text-blue-600">72%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Content sharing</span>
                    <span className="font-medium">34%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Feedback submissions</span>
                    <span className="font-medium">28%</span>
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
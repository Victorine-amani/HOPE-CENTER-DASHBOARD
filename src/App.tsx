import { useState } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardOverview } from './components/DashboardOverview';
import { PatientManagement } from './components/PatientManagement';
import { Scheduling } from './components/Scheduling';
import { ContentManagement } from './components/ContentManagement';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'patients':
        return <PatientManagement />;
      case 'scheduling':
        return <Scheduling />;
      case 'content':
        return <ContentManagement />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="size-full bg-white">
      <DashboardLayout currentView={currentView} onViewChange={setCurrentView}>
        {renderCurrentView()}
      </DashboardLayout>
      <Toaster />
    </div>
  );
}
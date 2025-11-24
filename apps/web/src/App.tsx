import { Route, Routes } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './pages/Dashboard';
import { Leads } from './pages/Leads';
import { Reports } from './pages/Reports';
import { Automation } from './pages/Automation';
import { Integrations } from './pages/Integrations';
import { ThemeProvider, useThemeMode } from './theme/ThemeProvider';
import { Search } from './pages/Search';
import { Activities } from './pages/Activities';
import { Campaigns } from './pages/Campaigns';
import { Filters } from './pages/Filters';
import { MyList } from './pages/MyList';
import { WhatsApp } from './pages/WhatsApp';

const Shell = () => {
  const { theme, toggleTheme } = useThemeMode();
  const isLight = theme === 'light';

  return (
    <div className={`flex min-h-screen ${isLight ? 'bg-slate-50 text-[#003b5c]' : 'bg-midnight text-gray-100'}`}>
      <Sidebar theme={theme} />
      <div className="flex flex-1 flex-col">
        <TopBar theme={theme} onToggleTheme={toggleTheme} />
        <main className={`flex-1 overflow-y-auto px-4 py-6 sm:px-6 ${isLight ? 'bg-white/70' : 'bg-gradient-to-b from-slate via-midnight'}`}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/filters" element={<Filters />} />
            <Route path="/lists" element={<MyList />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}

export default App;


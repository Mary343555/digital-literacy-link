
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DeviceManagement from "./pages/dashboard/DeviceManagement";
import Connectivity from "./pages/dashboard/Connectivity";
import Curriculum from "./pages/dashboard/Curriculum";
import TutorTraining from "./pages/dashboard/TutorTraining";
import ELearning from "./pages/dashboard/ELearning";
import Sustainability from "./pages/dashboard/Sustainability";
import Monitoring from "./pages/dashboard/Monitoring";
import Users from "./pages/dashboard/Users";
import Reports from "./pages/dashboard/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="devices" element={<DeviceManagement />} />
            <Route path="connectivity" element={<Connectivity />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="tutors" element={<TutorTraining />} />
            <Route path="e-learning" element={<ELearning />} />
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="monitoring" element={<Monitoring />} />
            <Route path="users" element={<Users />} />
            <Route path="reports" element={<Reports />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

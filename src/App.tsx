import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import QuienesSomos from "./pages/QuienesSomos";
import Operaciones from "./pages/Operaciones";
import Ambiental from "./pages/Ambiental";
import Noticias from "./pages/Noticias";
import NoticiaSingle from "./pages/NoticiaSingle";
import Contacto from "./pages/Contacto";
import Proveedores from "./pages/Proveedores";
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
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/operaciones" element={<Operaciones />} />
          <Route path="/ambiental" element={<Ambiental />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:id" element={<NoticiaSingle />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proveedores-y-contrataciones" element={<Proveedores />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

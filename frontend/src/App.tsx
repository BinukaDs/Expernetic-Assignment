import { BrowserRouter } from "react-router-dom";
import { Navbar } from "@/components/ui/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { BaseContext } from "./context/BaseContext";
import AppRoutes from "./Routes";



function App() {

  const BASE = "http://localhost:5210/api";


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-full mx-auto mt-10">
        <Toaster />
        <BrowserRouter>
          <BaseContext.Provider value={BASE}> <AppRoutes /></BaseContext.Provider>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App

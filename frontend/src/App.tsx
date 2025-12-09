import { BrowserRouter } from "react-router-dom";
import { Navbar } from "@/components/ui/Navbar"
import { Toaster } from "@/components/ui/sonner"

import AppRoutes from "./Routes";



function App() {




  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-full mx-auto mt-10">
        <Toaster />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App

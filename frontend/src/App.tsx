import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar"
import AppRoutes from "./Routes";



function App() {




  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-3xl mx-auto mt-10">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App

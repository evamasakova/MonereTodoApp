import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Error from "./Error";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TaskCreateForm from "./TaskCreateForm";
import CategoryCreateForm from "./CategoryCreateForm";
import Completed from "./Completed";
import Sidebar from "../components/Sidebar";
import FilteredDashboard from "./FilteredDashboard/FilteredDashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category/:id" element={<FilteredDashboard />} />
            <Route path="/create-category" element={<CategoryCreateForm />} />
            <Route path="/create-task" element={<TaskCreateForm />} />
            <Route path="/inactive" element={<Completed />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Sidebar />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

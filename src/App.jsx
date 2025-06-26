import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Admin from "./pages/Admin";
import Navbar from "./pages/Navbar";

export default function App() {
  return (

    <div className="w-screen min-h-screen flex justify-center items-start bg-gray-50">
      <div className="w-1/2 text-white">
        <Navbar />
        <main className="flex-1 w-full py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

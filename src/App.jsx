import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Admin from "./pages/Admin";
import Navbar from "./pages/Navbar";

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-start bg-gray-50">
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

    // <div className="w-screen h-screen flex justify-center items-start bg-white">
    //   <div className="w-1/2 bg-black text-white p-4">
    //     {/* Your content starts from top */}
    //     <h1 className="text-xl font-bold">Blog Title</h1>
    //     <p>This content starts from the top but is horizontally centered.</p>
    //   </div>
    // </div>
  );
}

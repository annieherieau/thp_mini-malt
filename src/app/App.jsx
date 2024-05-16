import Footer from "../components/Footer";
import Header from "../components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

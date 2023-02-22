import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";
import Footer from "./components/shared/Footer";
import MainLayout from "./components/shared/MainLayout";
import FAQ from "./components/pages/FAQ";
import Rules from "./components/pages/Rules";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="rules" element={<Rules />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

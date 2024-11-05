import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Pricing from "./Screens/Pricing/Pricing";
import ContactUs from "./Screens/Contact/ContactUs";
import About from "./Screens/About/About";
import Features from "./Screens/Features/Features";
import UseCases from "./Screens/UseCases/UseCases"
import NotFound from "./Screens/NotFound"
import ScrollToTop from "./Component/Nav/ScrollToTop";




const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

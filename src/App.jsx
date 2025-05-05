import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Packages from "./pages/Packages";
import Bookings from "./pages/Bookings";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import LoginForm from "./pages/LoginForm";

function App() {

  
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Add this here to ensure the page scrolls to top on route change */}
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destination/:name" element={<DestinationDetail />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/loginform" element={<LoginForm/>}/> */}
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;

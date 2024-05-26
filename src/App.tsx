import { Route, Routes } from "react-router-dom"
import Header from "./components/layout/header"
import Home from "./components/pages/home/index"
import Book from "./components/pages/book"
import Contact from "./components/pages/contact"
import About from "./components/pages/about"
import Footer from "./components/layout/Footer"
import ForgetPassword from "./components/pages/forgetPassword"
import OTPPage from "./components/pages/forgetPassword/OTPPage"
import ShippingCart from "./components/pages/shipping-cart"
import Login from "./components/pages/login"
import Signup from "./components/pages/signup"
import UserDashboard from "./components/pages/dashboard/userDashboard"
// import OTPPage from "./components/pages/forgetPassword/OTPPage"
function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Book />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/otp-page" element={<OTPPage />} />
          <Route path="/shipping-cart" element={<ShippingCart />} />
          <Route path="/dashboard/my-profile" element={<UserDashboard />} />

        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App

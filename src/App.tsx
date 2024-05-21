import { Route, Routes } from "react-router-dom"
import Header from "./components/layout/header"
import Home from "./components/pages/home/index"
import Book from "./components/pages/book"
import Contact from "./components/pages/contact"
import About from "./components/pages/about"
import Footer from "./components/layout/Footer"
import ForgetPassword from "./components/pages/forgetPassword"
import OTPPage from "./components/pages/forgetPassword/OTPPage"
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
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/otp-page" element={<OTPPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App

import AboutPage from "./pages/AboutPage/About";
import BookDetailsPage from "./pages/BookDetailsPage/BookDetails";
import BookPage from "./pages/BookPage/Book";
import ContactPage from "./pages/ContactPage/Contact";
import HomePage from "./pages/HomePage/Home";
import Login from "./pages/Login/Login";
import NotFoundPage from "./pages/NotFoundPage/NotFound";
import Register from "./pages/Register/Register";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/books" element={<BookPage/>}/>
        <Route path="/bookdetails" element={<BookDetailsPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

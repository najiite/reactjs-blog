import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//Routes Import
import Home from "./routes/Home";
import About from "./routes/About";
import Post from "./routes/Post";

//Components Import
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  return (
    
    <Router>
    <div className="mx-auto bg-gray-100">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='post' element={<Post />}></Route>
        
      </Routes>
      <Footer />
      
    </div>
  </Router>
  );
}

export default App;

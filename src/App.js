import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//Routes Import
import Home from "./routes/Home";
import About from "./routes/About";
import Post from "./routes/Post";

//Components Import
import Header from "./components/Header";
import Footer from "./components/Footer"

import { useMode } from "./ModeContext";

function App() {
  const {bg,text} = useMode()
  return (
    <div className={`mx-auto  ${bg} font-josefin ${text}`}>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='post' element={<Post />}>
          <Route path=":slug" element={<Post />} />
        </Route>
        
      </Routes>
      <Footer />
      
  </Router>
    </div>
  );
}

export default App;

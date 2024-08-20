import Home from "./Home";
import Page2 from "./Page2";
import Page1 from "./Page1";
import {BrowserRouter,  Routes, Route,Link} from 'react-router-dom'
import Card from "./Card";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/page1'>Page1</Link>
        <Link to='/page2'>Page2</Link>
        <Link to='/Card'>Card</Link>
      </header>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/user/;id" element={<Card/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

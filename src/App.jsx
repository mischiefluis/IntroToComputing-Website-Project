import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Limits from "./components/Limits";
import Differentiation from "./components/Differentiation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}>
          <Route path="limits" element={<Limits/>}/>
          <Route path="differentiation" element={<Differentiation/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

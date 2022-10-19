import Login from './login';
import Pages from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  

  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login/>}  ></Route>
        <Route path="/pages" element={<Pages/>} ></Route>
          </Routes>
          </BrowserRouter>
      
         
          
    </div>
        

  
  )
}

export default App;

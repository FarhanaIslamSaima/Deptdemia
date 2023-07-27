import Header from "./Component/Header/Header";
import Contribute from "./Component/Contribute/Contribute";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  Router,
  useRouteMatch,
} from "react-router-dom";
import QueryHome from "./Component/Query/QueryHome";
import Home from "./Component/Home/Home";
import Login from "./Component/SignIn/Login";
import Signup from "./Component/SignIn/SignIn";

function App() {
  return (
    <>
  
   <BrowserRouter>
   <Header/>
   
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
  <Route exact path="/Query" element={<QueryHome/>}></Route>
  <Route exact path="/Contribute" element={<Contribute/>}></Route>
  <Route exact path="/login" element={<Login></Login>}></Route>
  <Route exact path="/signup" element={<Signup></Signup>}></Route>

  </Routes>

  
    
    
   
   
   </BrowserRouter>
   </>
  
  );
}

export default App;

import Header from "./Component/Header/Header";
import Contribute from "./Component/Contribute/Contribute";
import Subject from "./Component/Home/Left/Subjects/Subject";
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
import Physics from "./Component/Home/Left/Subjects/Physics/Physics";
import AccountContext from "./Context/AccountContext";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Profile from "./Component/PrivateRoute/Profile";


function App() {

  return (
    <>
    
  <AccountContext>
   <BrowserRouter>
   <Header/>
   
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route path="/" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route  path="/Contribute" element={<Contribute/>}></Route>
            <Route exact path="/Query" element={<QueryHome/>}></Route>
      </Route>
 
  
  <Route exact path="/login" element={<Login></Login>}></Route>
  <Route exact path="/signup" element={<Signup></Signup>}></Route>
  <Route exact path="/subject/:id" element={<Subject/>}></Route>

  </Routes>

  
    
    
   
   
   </BrowserRouter>
   </AccountContext>
   </>
  
  );
}

export default App;
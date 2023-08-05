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
import GlobalStyleOverrides from "./ThemeProvider/Theme";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SpecQuery from "./Component/QuerSol/ContributeSol/SpecQuery";
import SpecSol from "./Component/QuerSol/Solves/SpecSol";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Details from "./Component/NewsFeed/Details";


function App() {

  return (
    <ThemeProvider theme={GlobalStyleOverrides()}>
    
    
    
  <AccountContext>
   <BrowserRouter>
   <Header/>
  
   
  <Routes>

    <Route exact path="/" element={<Home/>}></Route>
    
    <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route  path="/Contribute" element={<Contribute/>}></Route>
            <Route exact path="/Query" element={<QueryHome/>}></Route>
            <Route exact path="/SpecQuery/:id" element={<SpecQuery/>}/>
            
      </Route>
      <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
        </Route>

   <Route exact path="/details/:id" element={<Details/>} />     
  <Route exact path="/login" element={<Login></Login>}></Route>
  <Route exact path="/signup" element={<Signup></Signup>}></Route>
  <Route exact path="/subject/:subject" element={<Subject/>}></Route>
  <Route exact path="/solve/:id" element={<SpecSol/>}></Route>

  </Routes>

  
    
  <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
   
   
   
   </BrowserRouter>
   </AccountContext>
   </ThemeProvider>
   


 
  
  );
}

export default App;
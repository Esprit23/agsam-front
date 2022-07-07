import { useState } from "react";
import './index.css'
import Index from "./components/index"; 
import Dashboard from "./page/Dashboard";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Article from "./page/Article";
import ListelArticle from "./page/ListeArticle";
import TypeArticle from "./page/typeArticle";
import Projet from "./page/projet";
import Layout from "./layout/layout";
// import SideBar from "./components/sideBar/sideBar";
// import TopBar from "./components/topBar/TopBar";
import Home from "./components/page/Home/Home";
import UserList from "./components/page/userList/UserList";
import User from "./components/page/user/User";
import NewUser from "./components/page/user/newUser";




function App() {
  const [isLoggedIn, setLoggedIn ] = useState(false);

  return (

    <>
  
      <BrowserRouter>
      <Layout>
      <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/article" element={<Article/>}/>
            <Route path="/ProfilUser" element={<UserList/>}/>
            <Route path="/listearticle" element={<ListelArticle/>}/>
            <Route path="/typearticle" element={<TypeArticle/>}/>
            <Route path="/Projet" element={<Projet/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser/" element={<NewUser/>}/>
          </Routes>
      </Layout>
      </BrowserRouter>
      <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} /> 
   
    {/* <TopBar/>
        <div className="container">
          <SideBar/>
          <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<UserList/>}/>
               <Route path="/user">
                <UserList/>
              </Route> 
            </Routes>
          </BrowserRouter>
          <Home/> 
          
        </div> */}
    </>
    

  );
}


export default App;
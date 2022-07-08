import { useState,useEffect } from "react";
import './index.css'
import Index from "./components/index"; 
import { createTheme } from '@mui/material/styles';
// import { borderRadius } from '@mui/system';


// import Article from "./page/Article";
// import ListelArticle from "./page/ListeArticle";
// import TypeArticle from "./page/typeArticle";
// import Projet from "./page/projet";
// import Layout from "./layout/layout";
// import Home from "./components/page/Home/Home";
// import UserList from "./components/page/userList/UserList";
// import User from "./components/page/user/User";
// import NewUser from "./components/page/user/newUser";
import PropagateLoader from "react-spinners/DotLoader";


const theme = createTheme(
  

  );

function App() {
  const override= {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  },[])
  const [isLoggedIn, setLoggedIn ] = useState(false);


  return (
      <>
        {
          loading?
          <div className="App">
          <PropagateLoader
            loading={loading} 
            css={override} 
            color={"#111"}
            size={100} />

          </div>
          
          :
          <Index isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} /> 
          
        }
      </>

  );
}


export default App;
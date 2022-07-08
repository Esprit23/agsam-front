import SignIn from "./auth/signIn";
import SignUp from "./auth/signUp";
// import Article from "../page/Article";
// import ListelArticle from "../page/ListeArticle";
import TypeArticle from "../page/typeArticle";
import Projet from "../page/projet";
import Layout from "../layout/layout";
import Home from "./page/Home/Home";
import UserList from "./page/userList/UserList";
import User from "./page/user/User";
import NewUser from "./page/user/newUser";
import ArticleList from './page/Aritcle/ArticleList';
import Article from './page/Aritcle/Article';
import NewArticle from './page/Aritcle/NewArticle';
import Header from "./Navbar/Header";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Dashboard from "../page/Dashboard";



export default function Index(props) {
   
    const { isLoggedIn, setLoggedIn } = props
    return (
        <div>
            
 
            <Header isLoggedIn={isLoggedIn} />
            <BrowserRouter>
                {isLoggedIn ?
                      <Layout>
                        <Routes>
                            <Route path="/dashboard" element={<Dashboard setIsLoggedIn={setLoggedIn} />}/>
                            <Route path="/article" element={<Article setIsLoggedIn={setLoggedIn}/>}/>
                            <Route path="/listearticle" element={<ArticleList setIsLoggedIn={setLoggedIn}/>}/>
                            <Route path="/article/:articleId" element={<ArticleList setIsLoggedIn={setLoggedIn}/>}/>
                            <Route path="/typearticle" element={<TypeArticle setIsLoggedIn={setLoggedIn}/>}/>
                            <Route path="/Projet" element={<Projet setIsLoggedIn={setLoggedIn}/>}/>
                            <Route path="/home" element={<Home />}/>
                            <Route path="/user/:userId" element={<User setIsLoggedIn={setLoggedIn}/>}/>
                            <Route path="/newUser/" element={<NewUser setIsLoggedIn={setLoggedIn}/>}/>
                            <Route path="/ProfilUser" element={<UserList setIsLoggedIn={setLoggedIn}/>}/>
                        </Routes>
                    </Layout>
                    :
                    <Routes>
                        <Route path="/" element={<SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}>
                        </Route>
                        <Route path="/signup" element={<SignUp setIsLoggedIn={setLoggedIn} />}>

                        </Route>
                
                        
                   
                    </Routes>
                
                    
                    
                } 
            </BrowserRouter>
            
            
        </div>

    );
}

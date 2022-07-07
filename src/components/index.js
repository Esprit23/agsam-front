import SignIn from "./auth/signIn";
import SignUp from "./auth/signUp";
// import Header from "./Navbar/Header";
// import VideoList from "./Video/VideoList";
// import Video from "./Video/Video";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


export default function Index(props) {
   
    const { isLoggedIn, setLoggedIn } = props
    return (
        <div>
            
            {/* <Header isLoggedIn={isLoggedIn} /> */}
            
            <BrowserRouter>
                {isLoggedIn ?
                    <Routes>
                         {/* <Route path="/video" element={<VideoList setLoggedIn={setLoggedIn}/>}>
                        </Route>  
                         <Route path="/video/:id" element={<Video setLoggedIn={setLoggedIn}/>}>
                        </Route>  */}
                    </Routes>
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
// const useStyles= makeStyles((theme)=>({
//     container:{
//         marginTop:10
//     },
//     title :{
//         dispalay:'flex',
//         justifyContent:'center',
//         alignItems:'center',
//         backgroundColor:'#3f51b5',
//         color:'#fff',
//         padding:'20'
//     },
// }))
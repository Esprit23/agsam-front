import React, { useState } from "react";
import TopBar from "../components/Navbar/TopBar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";


function Layout({children}){

    const [isMobile, setIsMobile]=useState(false);
    const funcSetIsMobile=()=>{
        setIsMobile(!isMobile);
    }
    const Container = styled.div`
    display: flex;
    width: 100%;
`
    return(
        <>
        <TopBar funcSetIsMobile={funcSetIsMobile}/>
        <Container>
            <Sidebar isMobile={isMobile} funcSetIsMobile={funcSetIsMobile}/>
            <main>
                {children}
            </main>
        
            
        </Container>
        </>
        
    )
}
export default Layout;
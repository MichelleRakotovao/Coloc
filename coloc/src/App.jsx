import "./styles/App.css"
import { useState } from "react"
import NavBar from './containers/navBar'
import Login from './containers/login'
import {Route,Routes} from "react-router-dom"
export default function App(){
    const [isUserLoggedIn,setIsUserLoggedIn]=useState(false)
    return(
    <>
        {isUserLoggedIn && <NavBar/>}
        <Routes>
            <Route path='login' element={<Login onLogin={()=>setIsUserLoggedIn(true)}/>}/>
        </Routes>
   </>
    )
}
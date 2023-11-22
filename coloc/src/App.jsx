import "./styles/App.css"
import NavBar from './containers/navBar'
import Login from './containers/login'
import {Route,Routes} from "react-router-dom"

export default function App(){
    return(
    <>
        <NavBar/>
        <Routes>
            <Route path='login' element={<Login/>}/>
        </Routes>
   </>
    )
}
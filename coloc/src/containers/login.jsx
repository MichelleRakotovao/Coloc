import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/button"
function Login(){
    const [name,setName]=useState("")
    const handleNameChange=(e)=>{
        setName(e.target.value)
        console.log(e.target.value);
    }
    const [email,setEmail]=useState("")
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
    }
    const [sex,setSex]=useState("feminin")
    const handleSelectionChange=(e)=>{
        setSex(e.target.value)
    }
  return(
     <div id="main-container">
        <div id="form-container">
          <form method="get">
            <Input type={"text"} placeholder={"Nom complet"} onChange={handleNameChange} value={name}/>
            <select name="Sexe" value={sex} onChange={handleSelectionChange}>
                <option value="feminin">feminin</option>
                <option value="male">mâle</option>
            </select>
            <p>{sex}</p>
            <Input type={"email"} placeholder="Adresse mail" onChange={handleEmailChange} value={email}/>
            <Button value={"Continuer"} onClick={handleSubmit}/>
          </form>
        </div>
        <div id="text-container">
            <h1>Cherchez un colocataire en toute facilité</h1>
        </div>
     </div>
  )
}

export default Login
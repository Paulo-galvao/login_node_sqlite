import { useState } from "react";
import { useNavigate, Link } from "react-router";


export default function Login() {

  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  async function handleLogin(e) {
    e.preventDefault();

    const response = await fetch("https://loginnodesqlite-production.up.railway.app/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    
    const data = await response.json();

    if( response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/userarea");
      alert("Sucesso ao realizar login")
    } else {
      
      alert(data.message);
    }

  }

    return (
      <>
          
        <form 
          className="flex flex-col p-8 gap-3 bg-white w-[300px] rounded-lg shadow-lg" 
          onSubmit={handleLogin} 
           >
          <h1 className="text-2xl text-center font-bold">Login</h1>
          <label  htmlFor="username">Username</label>
          <input 
            required
            onChange={e => setUsername(e.target.value)} 
            id="username" 
            type="text" 
            name="username"  
            className="bg-gray-100  focus:outline-indigo-300"/>
  
          <label htmlFor="password">Password</label>
          <input 
            required
            onChange={e => setPassword(e.target.value)}  
            id="password" 
            type="password" 
            name="password" 
            className="bg-gray-100  focus:outline-indigo-300"/>
          <button  className="bg-blue-400 cursor-pointer mt-4 py-1 rounded-sm text-white hover:bg-blue-300" type="submit">Login</button>
          <span className="text-sm mt-2">Ainda não possui conta? <Link className="text-blue-700" to={"/signin"}>Cadastre-se</Link> </span>
        </form>
      
      </>
        
        

    )
}
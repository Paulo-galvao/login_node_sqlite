import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function UserArea() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");

  useEffect( () => {    

    if (!token) {
      navigate("/");
    }

    fetch("https://loginnodesqlite-production.up.railway.app/", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then( res => res.json() )
    .then( res => {
      console.log(res);
      
      setUser(res);
    }
    ).catch(error => alert(error));

    
  }, []);

  function logout() {
    localStorage.removeItem("token");
    navigate('/');
  }

  return (
    <div>
      <h1>Welcome {user.username} </h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

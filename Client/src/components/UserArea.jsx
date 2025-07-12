import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function UserArea() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {    
    if (!token) {
      navigate("/");
    }
  });

  function logout() {
    localStorage.removeItem("token");
    navigate('/');
  }

  return (
    <div>
      <h1>Welcome to user area</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

import { useState } from "react";
import { useNavigate, Link } from "react-router";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignin(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3021/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if(response.ok) {
      localStorage.setItem("token", data.token);
      alert(data.message);
      navigate("/userarea");
    } else {
      alert(data.message);
    }

    

  }

  return (
    <div className="h-screen bg-gray-300 flex items-center justify-center">
      <form
        className="flex flex-col p-8 gap-3 bg-white w-[300px] rounded-lg shadow-lg"
          onSubmit={handleSignin}
      >
        <h1 className="text-2xl text-center font-bold">Signin</h1>
        <label htmlFor="username">Username</label>
        <input
          required
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="text"
          name="username"
          className="bg-gray-100  focus:outline-indigo-300"
        />

        <label htmlFor="password">Password</label>
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          name="password"
          className="bg-gray-100  focus:outline-indigo-300"
        />
        <button
          className="bg-blue-400 cursor-pointer mt-4 py-1 rounded-sm text-white hover:bg-blue-300"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

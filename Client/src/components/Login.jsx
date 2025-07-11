export default function Login() {
    return (
      <>
          
        <form className="flex flex-col p-8 gap-3 bg-white w-[300px] rounded-lg shadow-lg" 
          action="" 
          method="post" >
          <h1 className="text-2xl text-center font-bold">Login</h1>
          <label  htmlFor="username">Username</label>
          <input id="username" type="text" name="username" required className="bg-gray-100"/>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required/>
          <button type="submit">Login</button>
        </form>
      
      </>
        
        

    )
}
'use client'
import { useRouter } from "next/navigation"


function Login() {
  const router=useRouter();

  const navigatin = (item)=>{
    router.push("/login/"+item)
  }
  return (
    <div>
      <h1>login page</h1>
      <button onClick={()=>navigatin('loginstudent')} >go to loginstudent</button>
      <button onClick={()=>navigatin('loginteacher')} >go to loginteacher</button>
    </div>
  )
}

export default Login

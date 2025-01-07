'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {
  const router = useRouter();

  const navigate = (item)=>{
    router.push(item)
  }

  return (
    <>
     <h1>hello</h1>
     <Link href="/login">go to login page </Link>
     <br/>
     <br/>
     <Link href="/about">go to about page </Link>
     <br/>
     <br/>

     {/* <button onClick={()=>router.push("/login")}>login page</button> */}

     {/* or */}
     <button onClick={()=>navigate("/login")}>login page</button>
     <br/>
     <br/>

     <button onClick={()=>navigate("/about")}>about page</button>
    </>
  

  );
}


// console.log (parseInt( typeof typeof typeof typeof typeof "shubham"))
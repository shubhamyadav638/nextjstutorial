import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <h1>common layout</h1>
   <Link href="/about">go to about page</Link>
   <br/>
   <br/>
   <Link href="/about/aboutstudent">go to aboutstudent page</Link>
   <br/>
   <br/>
   <Link href="/about/aboutteacher">go to aboutteacher page</Link>
   <br/>
   <br/>
   <Link href="/login">go to login page</Link>
   <br/>
   <br/>
   <Link href="/login/loginstudent">go to loginstudent page</Link>
   <br/>
   <br/>
   <Link href="/login/loginteacher">go to loginteacher page</Link>
   <br/>
   <br/>
   </>
  );
}

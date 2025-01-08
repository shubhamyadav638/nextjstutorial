"use client"
import Link from "next/link";
import './about.css'
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            {
                pathName !== "/about/aboutteacher" ?
                    <ul className="about-menu">
                        <li>
                            <h4 >about Navbar</h4>
                        </li>
                        <li>
                            <Link href="/about">about Main</Link>
                        </li>
                        <li>
                            <Link href="/about/aboutstudent">Student about </Link>
                        </li>
                        <li>
                            <Link href="/about/aboutcollege">aboutcollege about </Link>
                        </li>
                        <li>
                            <Link href="/about/aboutteacher">Teacher about </Link>
                        </li>
                       
                    </ul>
                    : <Link href="/about" >Go to Main about Page</Link>
            }
            {children}
        </div>
    )
}



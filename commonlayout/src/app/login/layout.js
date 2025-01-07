import Link from "next/link";
import './login.css'

export default function layout({children}){
    return(
        <div>
            <ul className="login_menu">
                <li>
                    <h4>Login Navbar</h4>
                </li>
                <li>
                    <Link href="/login">login</Link>
                </li>

                <li>
                    <Link href="/login/loginstudent">loginstudent</Link>
                </li>
                <li>
                    <Link href="/login/loginteacher">loginteacher</Link>
                </li>
            </ul>
            {children}
        </div>
    )

}
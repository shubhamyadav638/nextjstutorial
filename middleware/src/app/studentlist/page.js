import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li> 
                    <Link href="/studentlist/1" >shubhsm</Link>
                </li>
                <li> 
                <Link href="/studentlist/2" >shivam</Link>
                </li>
                <li> 
                <Link href="/studentlist/3" >nishant</Link>
                </li>
                <li> 
                <Link href="/studentlist/4" >ankit</Link>
                </li>
            </ul>
        </div>
    )
}
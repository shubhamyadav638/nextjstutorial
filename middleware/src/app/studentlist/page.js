import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li> 
                    <Link href="/studentlist/anil" >shubham</Link>
                </li>
                <li> 
                <Link href="/studentlist/sam" >aayushi</Link>
                </li>
                <li> 
                <Link href="/studentlist/peter" >priyanka</Link>
                </li>
                <li> 
                <Link href="/studentlist/bruce" >shwet</Link>
                </li>
            </ul>
        </div>
    )
}
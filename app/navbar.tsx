import Link from "next/link";

export default function Navbar(){
    return (
        <ul>
            <Link href={"homepage"}></Link>
            <Link href={"jobsandbusiness"}></Link>
            <Link href={"stockandcrypto"}></Link>
            <Link href={"freemarket"}></Link>
        </ul>
    )
}
/*
the navbar must be on every page
it has links to the main pages
*/
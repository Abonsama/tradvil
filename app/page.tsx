'use client'
import Link from "next/link";
export default function Home() {
        // check for userdata in storage
    // if found go to the homepage,else go to signin page
    function checkDatabase(){
        const userName= localStorage.getItem("userName")
        if (userName ===null){
            return "./signInPage"
        }else{
            return "./HomePage"
        }
    }
    return(
        <main>
            <h1>Tradvil</h1>
            <Link href={checkDatabase()} >play</Link>
        </main>
    )
}
/*
check if sign in
if so the play buttons goes to home page
if not go to sign in page
*/
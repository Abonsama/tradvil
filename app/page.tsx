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
        <section className="flex  flex-col w-screen h-screen justify-evenly items-center">
            <h1 className="font-anton text-[120px] uppercase tracking-widest">Tradvil</h1>
            <Link href={checkDatabase()} className=" w-[200px] h-[75px] grow-0 flex items-center justify-center shadow-[0_0_70px_27px_rgba(0,255,255,0.07)] border-[.5px] border-cyan-300 rounded-[10px] px-[5px] text-center text-[40px] font-semibold uppercase" >play</Link>
        </section>
    )
}
/*
check if sign in
if so the play buttons goes to home page
if not go to sign in page
*/
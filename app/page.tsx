import Link from "next/link";

export default function Home() {
    return(
        <main>
            <h1>Tradvil</h1>
            <Link href={"./HomePage"} >play</Link>
        </main>
    )
}
/*
check if sign in
if so the play buttons goes to home page
if not go to sign in page
*/
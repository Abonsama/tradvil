import Link from "next/link"

export default function SignUpPage(){
    return(
        <section>
            <span>Tradvil</span>
            <form action="">
                <input type="text" />
                <input type="text" />
            </form>
            <span>or Sign In with</span>
            <Link href={"google"}></Link>
            <Link href={"facebook"}></Link>
            <footer>All Rights reserved <span>Tradvil</span>{/*year*/}</footer>
        </section>
    )
}
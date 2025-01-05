import Link from "next/link"

export default function SignUpPage(){
    return(
        <section>
            <span>Tradvil</span>
            <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <p><input type="checkbox"/>I agree to <Link href={""}>Privacy Policy</Link> and <Link href={''}>terms and conditions</Link></p>
            </form>
            <span>or Sign Up with</span>
            <Link href={"google"}></Link>
            <Link href={"facebook"}></Link>
            <footer>All Rights reserved <span>Tradvil</span>{/*year*/}</footer>
        </section>
    )
}
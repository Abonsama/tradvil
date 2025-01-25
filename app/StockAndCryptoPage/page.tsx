import Link from "next/link";
import Header from "../header";
import Navbar from "../navbar";

export default function SCPage(){
    return(
        <section>
            <Header></Header>
            <Link href={'../stockPage'} className="stockButton">
                {/* image and describtion*/}
                Stock Market
            </Link>
            <Link href={"../cryptoPage"} className="cryptoButton">
                {/* image and describtion*/}
                Crypto Exchange
            </Link>
            <Navbar></Navbar>
        </section>
    )
}
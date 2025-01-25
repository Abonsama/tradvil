import Link from "next/link";
import Navbar from "../navbar";
import Header from "../header";

export default function JBPage(){
    return(
        <section>
            <Header></Header>
            <Link href={"../jobsPage"} className="jobButton">
                {/* image and describtion*/}
                jobs
            </Link>
            <Link href={"../businessPage"} className="businessButton">
                {/* image and describtion*/}
                business
            </Link>
            <Navbar></Navbar>
        </section>
    )
}
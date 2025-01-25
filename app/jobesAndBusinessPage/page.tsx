import Link from "next/link";

export default function JBPage(){
    return(
        <section>
            <Link href={"../jobsPage"} className="jobButton">
                {/* image and describtion*/}
            </Link>
            <Link href={"../businessPage"} className="businessButton">
                {/* image and describtion*/}
            </Link>
        </section>
    )
}
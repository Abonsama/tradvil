import Link from "next/link"
export default function jobsPage(){
    // get list of available jobs from database
    // show the one of eact catagory (if no penalty)
    // pause untill you make database
    return(
        <section>
            <button className="filterButton"></button>
            <Link href={"itemslist"}></Link>
            <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
        </section>
    )
}
/*
this page has list of jobs
and has a list component that holds what you enroll to
*/
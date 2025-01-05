import Link from "next/link"
export default function BusinessesPage(){
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
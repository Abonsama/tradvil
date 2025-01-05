import Link from "next/link"
export default function RealEstatePage(){
    return(
        <section>
            <button className="filterButton"></button>
            <Link href={"itemslist"}></Link>
            <div className="container">
            <ul>
                <li>item</li>
                <li>item</li>
                <li>item</li>
                <li>item</li>
            </ul>
            </div>
        </section>
    )
}
import Link from "next/link"
import Header from "../header"
import Navbar from "../navbar"
export default function CollectionPage(){
    function getData(){
        let fetchData=[
            {
                price:200,
                name:"xxx",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
            },
            {
                price:200,
                name:"yyy",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
            },
            {
                price:200,
                name:"zzz",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
            },
            {
                price:200,
                name:"ttt",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
            },
            {
                price:200,
                name:"bbb",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
            },
            {
                price:200,
                name:"sss",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
            },
            {
                price:200,
                name:"ooo",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
            },
        ]
            return (
                <ul>
                    {fetchData.map((i) => (
                    <li key={`${i.name}`}>
                        <span>{i.name}</span>
                        <span>{i.describtion}</span>
                        <span>{i.price}</span>
                    </li>
                    ))}
                    </ul>
                );
            }
    return(
        <section>
            <Header></Header>
            <button className="filterButton"></button>
            <Link href={"itemslist"}></Link>
            <div className="container">
            <ul>
                {getData()}
            </ul>
            </div>
            <Navbar></Navbar>
        </section>
    )
}
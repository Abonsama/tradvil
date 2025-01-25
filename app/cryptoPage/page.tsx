import Header from "../header"
import Navbar from "../navbar"
export default function CryptoPage(){
    function getData(){
        let fetchData=[
            {
                price:200,
                name:"xxx"
            },
            {
                price:200,
                name:"yyy"
            },
            {
                price:200,
                name:"zzz"
            },
            {
                price:200,
                name:"ttt"
            },
            {
                price:200,
                name:"bbb"
            },
            {
                price:200,
                name:"sss"
            },
            {
                price:200,
                name:"ooo"
            },
        ]
            return (
                <ul>
                    {fetchData.map((i) => (
                    <li key={`${i.name}`}>
                        <span>{i.name}</span>
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
            <div className="container">
            <ul>
                {getData()}
            </ul>
            </div>
            <Navbar></Navbar>
        </section>
    )
}

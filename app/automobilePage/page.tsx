import Link from "next/link"
import Header from "../header";
import Navbar from "../navbar";
export default function CarsPage(){
    function getData(){
        let fetchData=[
            {
                price:200,
                name:"xxx",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs",
                type:"super car"
            },
            {
                price:200,
                name:"yyy",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs",
                type:"classic"
            },
            {
                price:200,
                name:"zzz",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs",
                type:"semi truck"
            },
            {
                price:200,
                name:"ttt",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs",
                type:"truck"
            },
            {
                price:200,
                name:"bbb",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs",
                type:"sport car"
            },
            {
                price:200,
                name:"sss",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs",
                type:"suv"
            },
            {
                price:200,
                name:"ooo",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs",
                type:"sedan"
            },
            {
                price:200,
                name:"ppp",
                describtion:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs",
                type:"pick up"
            },
        ]
        function AmLi(DD){
            let li1=[];
            let li2=[];
            let li3=[];
            let li4=[];
            let li5=[];
            let li6=[];
            let li7=[];
            let li8=[];
            for (let st=0;st < DD.length;st++){
                if(DD[st].type=='super car'){
                    li1.push(DD[st])
                }else if(DD[st].type=='classic'){
                    li2.push(DD[st])
                }else if(DD[st].type=='semi truck'){
                    li3.push(DD[st])
                }else if(DD[st].type=='truck'){
                    li4.push(DD[st])
                }else if(DD[st].type=='sport car'){
                    li5.push(DD[st])
                }else if(DD[st].type=='suv'){
                    li6.push(DD[st])
                }else if(DD[st].type=='sedan'){
                    li7.push(DD[st])
                }else {li8.push(DD[st])}
            }
            return (
                <ul>
                    {li1.map((i) => (
                    <li key={`${i.name}-${i.type}`}>
                        <span>{i.name}</span>
                        <span>{i.type}</span>
                        <span>{i.sharePrice}</span>
                    </li>
                    ))}
                    {li2.map((i) => (
                        <li key={`${i.name}-${i.type}`}>
                        <span>{i.name}</span>
                        <span>{i.type}</span>
                        <span>{i.sharePrice}</span>
                        </li>
                    ))}
                    {li3.map((i) => (
                        <li key={`${i.name}-${i.type}`}>
                        <span>{i.name}</span>
                        <span>{i.type}</span>
                        <span>{i.sharePrice}</span>
                        </li>
                    ))}
                    {li4.map((i) => (
                        <li key={`${i.name}-${i.type}`}>
                        <span>{i.name}</span>
                        <span>{i.type}</span>
                        <span>{i.sharePrice}</span>
                        </li>
                    ))}
                    {li5.map((i) => (
                        <li key={`${i.name}-${i.type}`}>
                        <span>{i.name}</span>
                        <span>{i.type}</span>
                        <span>{i.sharePrice}</span>
                        </li>
                    ))}
                    {li6.map((i) => (
                        <li key={`${i.name}-${i.type}`}>
                        <span>{i.name}</span>
                        <span>{i.type}</span>
                        <span>{i.sharePrice}</span>
                        </li>
                    ))}
                    {li7.map((i) => (
                        <li key={`${i.name}-${i.type}`}>
                        <span>{i.name}</span>
                        <span>{i.type}</span>
                        <span>{i.sharePrice}</span>
                        </li>
                    ))}
                    {li8.map((i) => (
                        <li key={`${i.name}-${i.type}`}>
                        <span>{i.name}</span>
                        <span>{i.type}</span>
                        <span>{i.sharePrice}</span>
                        </li>
                    ))}
                    </ul>
                );
        }
        return AmLi(fetchData)
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
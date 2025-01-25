import Link from "next/link"
import Navbar from "../navbar";
import Header from "../header";
export default function BusinessesPage(){
    function listItems(){
        // after Fetch it gets the object of business and it has array of objects each array represents each type of business
        const fetchData =[
            {
                type:"store",
                name:"",
                describtion:'la bla bla bla',
                fees:50000
            },
            {
                type:"factory",
                name:"",
                describtion:'la bla bla bla',
                fees:50000
            },
            {
                type:"company1",
                name:"",
                describtion:'la bla bla bla',
                fees:50000
            },
            {
                type:"company2",
                name:"",
                describtion:'la bla bla bla',
                fees:50000
            },
            {
                type:"company3",
                name:"",
                describtion:'la bla bla bla',
                fees:50000
            },
        ]
        function BsLi(DD){
            let li1;
            let li2;
            let li3;
            let li4;
            let li5;
            for (let Bs=0;Bs < DD.length;Bs++){
                if(DD[Bs].type=='store'){
                    li1=DD[Bs]
                }else if(DD[Bs].type=='factory'){
                    li2=DD[Bs]
                }else if(DD[Bs].type=='company1'){
                    li3=DD[Bs]
                }else if(DD[Bs].type=='company2'){
                    li4=DD[Bs]
                }else {li5=DD[Bs]}
            }
            return(<ul>
                <li><button><span>{li1.type}</span><span>{li1.describtion}</span><span>{li1.fees}</span></button></li>
                <li><button><span>{li2.type}</span><span>{li2.describtion}</span><span>{li2.fees}</span></button></li>
                <li><button><span>{li3.type}</span><span>{li3.describtion}</span><span>{li3.fees}</span></button></li>
                <li><button><span>{li4.type}</span><span>{li4.describtion}</span><span>{li4.fees}</span></button></li>
                <li><button><span>{li5.type}</span><span>{li5.describtion}</span><span>{li5.fees}</span></button></li>
            </ul>)
        }
        return BsLi(fetchData)
    }
    return(
        <section>
            <Header></Header>
            <button className="filterButton"></button>
            <Link href={"itemslist"}></Link>
            {listItems()}
            <Navbar></Navbar>
        </section>
    )
}
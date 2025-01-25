import Link from "next/link"
import Navbar from "../navbar"
import Header from "../header"
export default function jobsPage(){
    // get list of available jobs from database
    // show the one of eact catagory (if no penalty)
    // pause untill you make database
    function listItems(){
        // after Fetch it gets the object of jobs and it has array of objects each array represents a difficulty level of jobs
        const fetchData =[
            {
                id:0,
                job:"do something",
                describtion:'la bla bla bla',
                level:'easy',
                salary:25
            },
            {
                id:0,
                job:"do something",
                describtion:'la bla bla bla',
                level:'medium',
                salary:250
            },
            {
                id:0,
                job:"do something",
                describtion:'la bla bla bla',
                level:'hard',
                salary:2500
            },
            {
                id:0,
                job:"do something",
                describtion:'la bla bla bla',
                level:'very hard',
                salary:25000
            },
            {
                id:0,
                job:"do something",
                describtion:'la bla bla bla',
                level:'extreme',
                salary:250000
            }
        ]
        function JoLi(DD){
            let li1;
            let li2;
            let li3;
            let li4;
            let li5;
            for (let jo=0;jo < DD.length;jo++){
                if(DD[jo].level=='easy'){
                    li1=DD[jo]
                }else if(DD[jo].level=='medium'){
                    li2=DD[jo]
                }else if(DD[jo].level=='hard'){
                    li3=DD[jo]
                }else if(DD[jo].level=='very hard'){
                    li4=DD[jo]
                }else {li5=DD[jo]}
            }
            return(<ul>
                <li><button><span>{li1.job}</span><span>{li1.describtion}</span><span>{li1.salary}</span></button></li>
                <li><button><span>{li2.job}</span><span>{li2.describtion}</span><span>{li2.salary}</span></button></li>
                <li><button><span>{li3.job}</span><span>{li3.describtion}</span><span>{li3.salary}</span></button></li>
                <li><button><span>{li4.job}</span><span>{li4.describtion}</span><span>{li4.salary}</span></button></li>
                <li><button><span>{li5.job}</span><span>{li5.describtion}</span><span>{li5.salary}</span></button></li>
            </ul>)
        }
        return JoLi(fetchData)
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
/*
this page has list of jobs
and has a list component that holds what you enroll to
*/
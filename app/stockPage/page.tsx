import Header from "../header"
import Navbar from "../navbar"
export default function StockPage(){
    function getData(){
        let fetchData=[
            {
                type:"company",
                sharePrice:200,
                name:"xxx"
            },
            {
                type:"company",
                sharePrice:200,
                name:"yyy"
            },
            {
                type:"company",
                sharePrice:200,
                name:"zzz"
            },
            {
                type:"company",
                sharePrice:200,
                name:"ttt"
            },
            {
                type:"company",
                sharePrice:200,
                name:"bbb"
            },
            {
                type:"etf",
                sharePrice:200,
                name:"sss"
            },
            {
                type:"index",
                sharePrice:200,
                name:"xxx"
            },
        ]
        function StLi(DD){
            let li1=[];
            let li2=[];
            let li3=[];
            for (let st=0;st < DD.length;st++){
                if(DD[st].type=='company'){
                    li1.push(DD[st])
                }else if(DD[st].type=='etf'){
                    li2.push(DD[st])
                }else {li2.push(DD[st])}
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
                    </ul>
                );
        }
        return StLi(fetchData)
    }
    return(
        <section>
            <Header></Header>
            {getData()}
            <Navbar></Navbar>
        </section>
    )
}
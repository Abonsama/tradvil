import Ads from "../Ads";
import Analytics from "../Analytics";
import Balance from "../Balance";
import Header from "../header";

export default function HomePage(){
    return(
        <section>
        <Header></Header>
        <Ads></Ads>
        <Balance></Balance>
        <Analytics></Analytics>
        </section>
    )
}

/**
this is the homepage and has the balance,
the analytics and ads
 */

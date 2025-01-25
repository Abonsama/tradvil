import Ads from "../Ads";
import Analytics from "../Analytics";
import Balance from "../Balance";
import Header from "../header";
import Navbar from "../navbar";

export default function HomePage(){
    // in this page we display the balance and the analytics

    return(
        <section>
        <Header></Header>
        <Ads></Ads>
        <Balance></Balance>
        <Analytics></Analytics>
        <Navbar></Navbar>
        </section>
    )
}

/**
this is the homepage and has the balance,
the analytics and ads
 */

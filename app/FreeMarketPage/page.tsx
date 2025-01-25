import Link from "next/link";
import Header from "../header";
import Navbar from "../navbar";
export default function CRCPage(){
    return(
        <section>
            <Header></Header>
            <Link href={"../collectionMarketPage"} className="collectionButton">
                {/* image and describtion*/}
                items
            </Link>
            <Link href={"../realEstatePage"} className="realEstateButton">
                {/* image and describtion*/}
                real estate
            </Link>
            <Link href={"../automobilePage"} className="carsButton">
                {/* image and describtion*/}
                cars
            </Link>
            <Navbar></Navbar>
        </section>
    )
}
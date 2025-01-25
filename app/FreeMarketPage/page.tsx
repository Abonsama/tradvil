import Link from "next/link";

export default function CRCPage(){
    return(
        <section>
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
        </section>
    )
}
import Link from "next/link";

export default function Navbar(){
    return (
        <ul>
            <Link href={"./HomePage"}></Link>
            <Link href={"./jobesAndBusinessPage"}></Link>
            <Link href={"./StockAndCryptoPage"}></Link>
            <Link href={"./FreeMarketPage"}></Link>
        </ul>
    )
}
/*
the navbar must be on every page
it has links to the main pages
*/
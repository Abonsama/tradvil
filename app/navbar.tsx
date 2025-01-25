import Link from "next/link";

export default function Navbar(){
    return (
        <ul>
            <Link href={"./HomePage"}>homeIcon</Link>
            <Link href={"./jobesAndBusinessPage"}>JBIcon</Link>
            <Link href={"./StockAndCryptoPage"}>SCIcon</Link>
            <Link href={"./FreeMarketPage"}>FreeMarketIcon</Link>
        </ul>
    )
}
/*
the navbar must be on every page
it has links to the main pages
*/
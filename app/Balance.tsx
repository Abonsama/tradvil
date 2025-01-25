'use client'
import { useState, useEffect } from "react";

export default function Balance() {
    const [balance, setBalance] = useState(localStorage.getItem("balance"));
    useEffect(() => {
        const interval = setInterval(() => {
            const updatedBalance = parseInt(localStorage.getItem("balance"), 10);
            setBalance(updatedBalance);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className="balance">{balance}</div>
        </>
        );
}




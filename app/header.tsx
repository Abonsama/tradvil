'use client'
import MessagesButton from "./messages";
import { useRef } from "react";
import Profile from "./Profile";

export default function Header() {
    const messageRef = useRef(null);
    const profileRef = useRef(null);

    function toggleClass(ref) {
        if (ref.current && ref.current.classList.contains("col")) {
            ref.current.classList.add("exp");
            ref.current.classList.remove("col");
        } else if (ref.current) {
            ref.current.classList.add("col");
            ref.current.classList.remove("exp");
        }
    }

    return (
        <header>
            <button
                onClick={() => toggleClass(messageRef)}
                ref={messageRef}
                className="col"
            >
                <MessagesButton />
            </button>
            <span>Tradvil</span>
            <button
                onClick={() => toggleClass(profileRef)}
                ref={profileRef}
                className="col"
            >
                <Profile />
            </button>
        </header>
    );
}

/*
this is the header
it must be on all pages
containes the logo and the profile button and the messages
 */
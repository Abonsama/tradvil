import MessagesButton from "./messages";
import Profile from "./Profile";

export default function Header(){
    return(
        <header>
            <MessagesButton></MessagesButton>
            <span>Tradvil</span>
            <Profile></Profile>
        </header>
    )
}

/*
this is the header
it must be on all pages
containes the logo and the profile button and the messages
 */
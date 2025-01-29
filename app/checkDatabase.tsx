'use client'
    // check for userdata in storage
    // if found go to the homepage,else go to signin page
    export default function checkDatabase(){
        const userName= localStorage.getItem("userName")
        if (userName ===null){
            return "./signInPage"
        }else{
            return "./HomePage"
        }
    }
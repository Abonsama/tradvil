'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function SignUpPage() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const router = useRouter();

    function handleSubmit(e) {
        const rex = /\w/g;
    
        e.preventDefault();
    
        // Check username
        if (inputRef1.current.value !== "" && inputRef1.current.value.length > 2) {
            localStorage.setItem('userName', inputRef1.current.value);
        }else{
            alert("make a proper username")
            return
        }
    
        // Check password strength
        if (rex.test(inputRef2.current.value)) {
            localStorage.setItem('password', inputRef2.current.value);
        } else {
            alert("Password is not strong enough.");
            return;  // If the password doesn't match the regex, exit the function
        }
    
        // Set default balance
        localStorage.setItem('balance', '0');
        
        // Navigate to HomePage
        router.push('/HomePage');
    }
    

    return (
        <section>
            <span>Tradvil</span>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input
                    type="text"
                    id="username"
                    placeholder="User Name"
                    ref={inputRef1}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    id="password"
                    placeholder="Password"
                    ref={inputRef2}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <span>or Sign In with</span>
            {/* <Link href={"google"}>Google</Link>
            <Link href={"facebook"}>Facebook</Link> */}
            <footer>All Rights Reserved <span>Tradvil</span> {new Date().getFullYear()}</footer>
        </section>
    );
}

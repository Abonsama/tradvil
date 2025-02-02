'use client';
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function SignUpPage(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
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
            return;
        }
        localStorage.setItem('balance', '0');
        router.push('/HomePage');
    }

    return (
        <section className='flex  flex-col w-screen h-screen items-center overflow-hidden'>
            <span className='font-anton text-[70px] uppercase tracking-widest'>Tradvil</span>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto flex flex-col w-1/3 h-1/3'>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">user name</label>
            </div>
                <div className="relative z-0 w-full mb-5 group mx-auto my-auto">
        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-focus:dark:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        </div>
        <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-cyan-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="" className="text-cyan-600 hover:underline dark:text-cyan-500">terms and conditions</a></label>
        </div>
        <button type="submit" className="grow-0 shadow-[0_0_70px_27px_rgba(0,255,255,0.07)] text-white bg-transparent border-[2px] border-cyan-300 focus:outline-none font-medium rounded-[10px] text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-transparent  dark:focus:bg-cyan-950/95 my-[15px] mb-[30px] hover:bg-cyan-500">Submit</button>

            </form>
            <span className="my-44">or Sign up with</span>
            {/* <Link href={"google"}>Google</Link>
            <Link href={"facebook"}>Facebook</Link> */}
            <footer className="fixed md:fixed bottom-5">All Rights Reserved <span className="text-cyan-300 uppercase font-semibold">Tradvil</span> {new Date().getFullYear()}</footer>
        </section>
    );
}
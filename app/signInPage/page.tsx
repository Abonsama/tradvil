



export default function SignInPage() {

    return (
        <section className='flex flex-col w-screen h-screen items-center'>
            <span className='font-anton text-[70px] uppercase tracking-widest'>Tradvil</span>
            <form className='max-w-md mx-auto mt-10 mb-auto flex flex-col w-1/3 h-1/3'>
                <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_UserName" id="floating_UserName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
        <label htmlFor="floating_UserName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-500 peer-focus:dark:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-300 focus:outline-none focus:ring-0 focus:border-cyan-500 peer" placeholder=" " required />
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
    </div>

    <button type="submit" className="grow-0 shadow-[0_0_70px_27px_rgba(0,255,255,0.07)] text-white bg-transparent border-[2px] border-cyan-300 focus:outline-none font-medium rounded-[10px] text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-transparent  dark:focus:bg-cyan-950/95 my-[15px] mb-[30px] hover:bg-cyan-500">Submit</button>
            </form>
            <span className="mb-72">or Sign In with</span>
            {/* <Link href={"google"}>Google</Link>
            <Link href={"facebook"}>Facebook</Link> */}
            <footer className="fixed md:fixed bottom-5">All Rights Reserved <span className="text-cyan-300 uppercase font-semibold">Tradvil</span> {new Date().getFullYear()}</footer>
            </section>
    );
}

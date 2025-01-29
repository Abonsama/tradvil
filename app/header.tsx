'use client'
import { useRef } from "react";
export default function Header(){
    const ref1= useRef(null)
    const ref2= useRef(null)
    function showOrHide1(){
        ref1.current.classList.toggle('hidden')
    }
    function showOrHide2(){
        ref2.current.classList.toggle('hidden')
    }
        function getData(){
            let fetchData=[
                {
                    name:"xxx",
                    lastMessage:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
                },
                {
                    name:"yyy",
                    lastMessage:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
                },
                {
                    name:"zzz",
                    lastMessage:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
                },
                {
                    name:"www",
                    lastMessage:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
                },
                {
                    name:"eee",
                    lastMessage:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
                },
                {
                    name:"qqq",
                    lastMessage:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
                },
                {
                    name:"nnn",
                    lastMessage:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
                },
                {
                    name:"hhh",
                    lastMessage:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
                },
                {
                    name:"ddd",
                    lastMessage:" lajsfj sldfj s  sofjs sj sdjkf ssj sfs"
                },
            ]
                return (
                    <ul>
                        {fetchData.map((i) => (
                        <li key={`${i.name}`}><button>
                            <span>{i.name}</span>
                            <span>{i.lastMessage}</span>
                        </button>
                        </li>
                        ))}
                        </ul>
                    );
                }
    return(
        <header>
            <div className="">M
            <aside ref={ref1} onClick={showOrHide1}>
            {getData()}
        </aside>
            </div>
            <span>Tradvil</span>
            <div className="">
            <aside>
                <button>account settings</button>
                <button>game settings</button>
                <button>theme and color</button>
                <button>log out</button>
        </aside>
            </div>
        </header>
    )
}

/*
this is the header
it must be on all pages
containes the logo and the profile button and the messages
 */
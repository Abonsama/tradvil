
export default function MessagesButton(){
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
        <aside className="social">
            {getData()}
        </aside>
    )
}
/*
the messages button containes all the friends you have and
all the social functions you need
*/
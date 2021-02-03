import React, {useState, useEffect} from 'react';

const Tabs = (props) =>{
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
        const y = props.strings.map((item, ind) =>{
            const x = {label: "tab"+ind ,content: item}
            tabs.push(x);
            return x;
        })
        setTabs(y);
    }, []);
    const [cont, setCont] = useState("");

    const handleClick = (e, item) =>{
        setCont(item);
        const x = tabs.filter(item => item.content === cont);
        console.log(x);
    }

    return(
        <>
            {
                tabs.map(item =>
                <button id={item.label} key={item.label} onClick={e =>  handleClick(e,item) }>{item.label}</button>
            )
            }
            <div>
                    {
                        <p>{cont.content}</p>
                    }
            </div>
        </>
    );


}
export default Tabs;
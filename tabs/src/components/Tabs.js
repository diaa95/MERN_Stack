import React, {useState} from 'react';

const Tabs = (props) =>{
    const [tabs, setTabs] = useState([{label: "Tab1", content: "content of tab 1"}, {label: "Tab2", content: "content of tab 2"},{label: "Tab3", content: "content of tab 3"}]);
    const [cont, setCont] = useState("");

    const handleClick = key =>{
        setCont(key);
        console.log(key);
        const x = tabs.filter(item => item.content === cont);
        console.log(x);
    }

    return(
        <>
            {
                tabs.map(item =>
                <button id={item.label} key={item.label} onClick={ handleClick }>{item.label}</button>
            )
            }
            {/*<div>*/}
            {/*        {*/}
            {/*            x.map(item => <p>{item.content}</p> )*/}
            {/*        }*/}
            {/*</div>*/}
        </>
    );


}
export default Tabs;